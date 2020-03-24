export default {
  name: 'licenceType',
  title: 'Licence Type',
  type: 'document',
  preview: {
    select: {
      title: 'name'
    }
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'reference',
      to: [
        {
          type: 'seo'
        }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'localeString'
    },
    {
      name: 'seoMeta',
      title: 'SEO Meta',
      type: 'localeString'
    },
    {
      name: 'header',
      title: 'Header',
      type: 'localeRichText'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'localeRichText'
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'localeRichText'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image'
    }
  ]
}
