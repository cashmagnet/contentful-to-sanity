export default {
  name: 'language',
  title: 'Language',
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
      type: 'localeString'
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
      name: 'flag',
      title: 'Flag',
      type: 'image'
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'localeString'
    },
    {
      name: 'headerText',
      title: 'Header Text',
      type: 'localeRichText'
    }
  ]
}
