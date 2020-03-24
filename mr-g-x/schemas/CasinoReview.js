export default {
  name: 'casinoReview',
  title: 'Casino Review',
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
      validation: Rule => Rule.required(),
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
      name: 'header',
      title: 'Header',
      type: 'localeString'
    },
    {
      name: 'seoMetaTag',
      title: 'SEO Meta Title',
      type: 'localeString'
    },
    {
      name: 'seoMetaDescription',
      title: 'SEO Meta Description',
      type: 'localeString'
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
      name: 'casino',
      title: 'Casino',
      type: 'reference',
      to: [
        {
          type: 'casino'
        }
      ]
    },
    {
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime'
    },
    {
      name: 'reviewText',
      title: 'Review Text',
      type: 'localeRichText'
    }
  ]
}
