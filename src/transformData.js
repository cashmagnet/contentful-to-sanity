const markdownToBlocks = require('./markdownToBlocks');
const richTextToBlocks = require('./richTextToBlocks');

const transformData = (data, options = {}) => {

  if (options.locale && !data.locales.find(locale => locale.code === options.locale)) {
    throw new Error(`Locale "${options.locale}" not found in exported Contentful data`)
  }

  const locale = options.locale || data.locales[0].code;
  const opts = Object.assign({}, options, {locale});
  return data.entries.filter(isPublished).map(entry => transformEntry(entry, data, opts));
};

function isPublished(entry) {
  return typeof entry.sys.publishedAt === 'string'
}

function transformEntry(entry, data, options) {
  const doc = {
    _id: entry.sys.id,
    _type: entry.sys.contentType.sys.id,
    _createdAt: entry.sys.createdAt,
    _updatedAt: entry.sys.updatedAt
  };

  const supportedLanguages = [
    {id: 'fi', cfId: 'fi'},
    {id: 'en', cfId: 'en'},
    {id: 'enCA', cfId: 'en-CA'},
    {id: 'enGB', cfId: 'en-GB'}
  ];


  return Object.keys(entry.fields).reduce((acc, fieldName) => {
    supportedLanguages.forEach( x => {
      const type = data.contentTypes.find(contentType => contentType.sys.id === entry.sys.contentType.sys.id);
      const fieldData = type.fields.find(field => field.id === fieldName);
      const localized = fieldData.localized;

      if (localized) {
        if (typeof acc[fieldName] === typeof undefined || acc[fieldName] === null)
          acc[fieldName] = {};
        acc[fieldName][x.id] = transformField(entry, fieldName, data, options, x.cfId);
      } else {
        acc[fieldName] = transformField(entry, fieldName, data, options, "fi");
      }
    });

    return acc
  }, doc)
}

function transformField(entry, fieldName, data, options, locale) {
  const { keepMarkdown} = options;
  const value = entry.fields[fieldName][locale];
  const typeId = entry.sys.contentType.sys.id;
  const editor = data.editorInterfaces.find(ed => ed.sys.contentType.sys.id === typeId);
  const widgetId = editor.controls.find(ctrl => ctrl.fieldId === fieldName).widgetId;

  if (typeof value === 'undefined') {
    return undefined
  }

  if (!keepMarkdown && typeof value === 'string' && widgetId === 'markdown') {
    return markdownToBlocks(value, options)
  }

  if (value && widgetId === 'slugEditor') {
    return {current: value}
  }

  if (value && value.sys && value.sys.type === 'Link') {
    return transformLink(value, data, locale, options, entry)
  }

  if (typeId === 'richText' ||(value && value.sys && value.sys.type === 'RichText')) {
    return richTextToBlocks(value);
  }

  const parentTypeDef = data.contentTypes.find(type => type.sys.id === typeId);
  if (!parentTypeDef) {
    throw new Error(`Could not find type definition for type "${typeId}"`)
  }

  const typeDef = parentTypeDef.fields.find(field => field.id === fieldName);
  if (!typeDef) {
    throw new Error(`Could not find type definition for field "${fieldName}" in type "${typeId}"`)
  }

  if (typeDef.type === 'Location') {
    return transformLocation(value);
  }

  if (typeDef.type === 'RichText'){
    return richTextToBlocks(value);
  }


  if (Array.isArray(value)) {
    return value.map(val => {
      if (val && val.sys && val.sys.type === 'Link') {
        return transformLink(val, data, locale, options, entry)
      }

      return val
    })
  }

  return value
}

function transformLocation(coords) {
  return {
    _type: 'geopoint',
    lat: coords.lat,
    lng: coords.lon
  }
}

function maybeWeakRef(ref, options) {
  return options.weakRefs ? Object.assign({}, ref, {_weak: true}) : ref
}

function transformLink(value, data, locale, options, parent) {
  if (value.sys.linkType === 'Asset') {
    return transformAssetLink(value, data, locale, options, parent)
  }

  if (value.sys.linkType === 'Entry') {
    return maybeWeakRef({_type: 'reference', _ref: value.sys.id}, options)
  }

  throw new Error(`Unhandled link type "${value.sys.linkType}"`)
}

function transformAssetLink(value, data, locale, options, parent) {
  if (data.assets) {
    const asset = data.assets.find(item => item.sys.id === value.sys.id);
    if (!asset && !options.weakRefs) {
      return undefined;
    } else if (!asset) {
      return undefined
    }

    const file = asset.fields.file[locale];
    const type = file.contentType.startsWith('image/') ? 'image' : 'file'
    return maybeWeakRef(
      {_type: 'reference', _sanityAsset: `${type}@${prefixUrl(file.url)}`},
      options
    )
  }

  return undefined;
}

function prefixUrl(url) {
  return url.startsWith('//') ? `https:${url}` : url
}

module.exports = transformData;
