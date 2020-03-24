export default {
  name: 'casinoGroup',
  title: 'Casino Owner',
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
      name: 'headerText',
      title: 'Header Text',
      type: 'localeRichText'
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'localeRichText'
    }
  ]
}
