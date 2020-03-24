export default {
  name: 'genericContentPage',
  title: 'Generic Content Page',
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
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image'
    },
    {
      name: 'combinedBody',
      title: 'Combined Body',
      type: 'localeRichText'
    },
    {
      name: 'seoMetaDescription',
      title: 'SEO Meta Description',
      type: 'localeString'
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'localeString'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image'
    },
    {
      name: 'casinos',
      title: 'Casinos',
      type: 'reference',
      to: [
        {
          type: 'casinoRanking'
        }
      ]
    }
  ]
}
