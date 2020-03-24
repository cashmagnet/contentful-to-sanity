const directMap = {
  Integer: 'number',
  Number: 'number',
  Symbol: 'string',
  Location: 'geopoint',
  Boolean: 'boolean',
  Date: 'datetime',
  Object: 'object'
}

const defaultEditors = {
  Integer: 'numberEditor',
  Number: 'numberEditor',
  Symbol: 'singleLine',
  Location: 'locationEditor',
  Boolean: 'boolean',
  Date: 'datePicker',
  Object: 'objectEditor'
}

const editorMap = {
  radio: 'radio',
  dropdown: 'dropdown',
  tagEditor: 'tags'
}

function transformSimpleTypeToLocalizedVersion(typeName, supportedLanguages) {
  return `
import supportedLanguages from './supportedLanguages'

export default {
  name: '${getLocalizedTypeName(typeName, true)}',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true}
    }
  ],
  fields: supportedLanguages.map(lang => (
    {
      title: lang.title,
      name: lang.id,
      type: '${typeName}',
      fieldset: lang.isDefault ? null : 'translations'
    }
  ))  
}`
}

function transformMoreComplexTypeToLocalizedVersion(typeName, type, options, of) {
  return ` 
  
  {
    name: '${getLocalizedTypeName(typeName, true)}',
    type: 'object',
    fieldsets: [
      {
        title: 'Translations',
        name: 'translations',
        options: {collapsible: true}
      }
    ],
    fields: supportedLanguages.map(lang => (
      {
        title: lang.title,
        name: lang.id,
        type: "${typeName}",
        of: ${JSON.stringify(of)},
        options: ${JSON.stringify(options)},
        fieldset: lang.isDefault ? null : 'translations'
      })

  }`
}

function capitalizedFirstLetter (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function getLocalizedTypeName(typeName, isTypeLocalized) {
  const localizedPrefix = "locale";
  if (isTypeLocalized){
    const typeNameCapitalized = typeName.charAt(0).toUpperCase() + typeName.slice(1)
    return localizedPrefix + typeNameCapitalized;
  }

  return typeName;
}

function transformSchema(data, options) {
    return data.contentTypes.map(type => transformContentType(type, data, options));
}

function transformContentType(type, data, options) {
  const output = {
    name: type.sys.id,
    title: type.name,
    description: type.description || undefined,
    type: 'document'
  };

  if (type.displayField) {
    output.preview = {select: {title: type.displayField}}
  }

  output.fields = type.fields
    .filter(field => !field.omitted)
    .filter(field => !shouldSkip(field, data, type.sys.id))
    .map(source =>
      Object.assign(
        {
          name: source.id,
          title: source.name
        },
        isRequired(source),
        isHidden(source),
        {type: undefined},
        contentfulTypeToSanityType(source, data, type.sys.id, options, source.localized)
      )
    );

  return output
}

function isHidden(field) {
  return field.disabled ? {hidden: true} : {}
}

function isRequired(field) {
  return field.required ? {required: true} : {}
}

function shouldSkip(source, data, typeId) {
  const editor = data.editorInterfaces.find(ed => ed.sys.contentType.sys.id === typeId)
  const widgetId = editor.controls.find(ctrl => ctrl.fieldId === source.id).widgetId
  return source.type === 'Object' && widgetId === 'objectEditor'
}

function contentfulTypeToSanityType(source, data, typeId, options, isLocalized) {
  const editor = data.editorInterfaces.find(ed => ed.sys.contentType.sys.id === typeId)
  const widgetId = editor.controls.find(ctrl => ctrl.fieldId === source.id).widgetId
  const defaultEditor = defaultEditors[source.type]
  const sanityEquivalent = directMap[source.type]

  if (sanityEquivalent && widgetId === defaultEditor) {
    return {type: getLocalizedTypeName(sanityEquivalent, isLocalized) };
  }

  if (widgetId === 'urlEditor') {
    return { type: getLocalizedTypeName('url', isLocalized) };
  }

  if (widgetId === 'slugEditor') {
    return determineSlugType(source, data, typeId, isLocalized)
  }

  if (!options.keepMarkdown && source.type === 'Text' && widgetId === 'markdown') {
    if (!isLocalized)
      return {
        type: 'array',
        of: [{type: 'block'}, {type: 'image'}]
      }

    return {
      // @todo add localized md
      type: 'localizedMarkdownText'
    }
  }

  if (source.type === 'Text') {
    return { type: getLocalizedTypeName('text', isLocalized) };
  }

  if (source.type === 'Link') {
    return determineRefType(source, data, typeId)
  }

  if (source.type === 'Array') {
    return determineArrayType(source, data, typeId)
  }

  if (sanityEquivalent && ['dropdown', 'radio'].includes(widgetId)) {
    const {list, layout} = determineSelectOptions(source, data, typeId)
    return {type: getLocalizedTypeName(sanityEquivalent, isLocalized), options: {list, layout}}
  }

  if (source.type === 'Symbol') {

    return { type: getLocalizedTypeName('string', isLocalized) };
  }

  if (source.type === 'RichText') {
    if (!isLocalized)
      return {
        type: 'array',
        of: [
          {
            type: 'block',
          },
          { type: 'reference', to: [{type: 'section' },{type: 'foldedContent' }, {type: 'faq' },{type: 'casinoComparison' }]},
          { type: 'foldedContent' },
          { type: 'section' },
          { type: 'casinoComparison' },
          { type: 'faq' }
        ],
      }
    return {type: getLocalizedTypeName('RichText', isLocalized)}
  }

  throw new Error(
    `Unhandled data type "${source.type}" with widget "${widgetId}" for field "${
      source.id
    }" of type "${typeId}"`
  )
}

function determineSlugType(source, data, typeId, isLocalized) {
  const type = data.contentTypes.find(typ => typ.sys.id === typeId)
  const sourceField = type.displayField;
  if (!sourceField) {
    throw new Error(`Unable to determine which field to extract slug from`)
  }

  return {type: getLocalizedTypeName('slug', isLocalized), options: {source: sourceField}}
}

function determineSelectOptions(source, data, typeId) {
  const validations = source.items ? source.items.validations : source.validations
  const onlyValues = (validations.find(val => val.in) || {}).in
  const editor = data.editorInterfaces.find(ed => ed.sys.contentType.sys.id === typeId)
  const widgetId = editor.controls.find(ctrl => ctrl.fieldId === source.id).widgetId
  const layout = editorMap[widgetId]

  return onlyValues ? {list: onlyValues, layout} : {layout}
}

function determineArrayType(source, data, typeId) {
  const itemsType = source.items.type
  const onlyValues = (source.items.validations.find(val => val.in) || {}).in

  const field = {type: 'array'}
  const type = directMap[itemsType]
  const {list, layout} = determineSelectOptions(source, data, typeId)

  if (type === 'string' && onlyValues) {
    field.of = [{type: 'string', options: {list, layout}}]
    return field
  }

  if (type) {
    field.of = [{type, options: {layout}}]
    return field
  }

  if (itemsType === 'Link') {
    field.of = [determineRefType(source.items, data)]
    return field
  }

  throw new Error(
    `Unable to determine array items type for field "${source.id}" of type "${typeId}"`
  )
}

function determineRefType(source, data) {
  if (source.linkType === 'Entry') {
    return determineEntryRefType(source, data)
  }

  if (source.linkType === 'Asset') {
    return determineAssetRefType(source, data)
  }

  throw new Error(`Unhandled link type "${source.linkType}"`)
}

function determineAssetRefType(source, data, isLocalized) {
  const mimeValidation = source.validations.find(val => val.linkMimetypeGroup) || {}
  const mimeGroups = mimeValidation.linkMimetypeGroup || []

  if (mimeGroups.includes('image') || ['image', 'picture'].includes(source.id)) {
    return {type: getLocalizedTypeName('image', isLocalized)}
  }

  // @todo file/image?
  return {type: getLocalizedTypeName('image', isLocalized)}
}

function determineEntryRefType(source, data, isLocalized) {
  const typeValidation = source.validations.find(val => val.linkContentType) || {}
  const linkTypes = typeValidation.linkContentType || []
  if (linkTypes.length === 1) {
    if (!isLocalized)
      return {type: 'reference', to: [{type: linkTypes[0]}]}

    return {type: getLocalizedTypeName('reference' + capitalizedFirstLetter(linkTypes[0]), isLocalized) }
  }

  if (linkTypes.length > 1) {
    if (!isLocalized)
      return {type: 'reference', to: linkTypes.map(type => ({type}))}

    return {type: getLocalizedTypeName('reference' + linkTypes.map(x => capitalizedFirstLetter(x)).join(''))}
  }

  return {type: 'reference', to: data.contentTypes.map(type => ({type: type.sys.id}))}
}

module.exports = transformSchema
