export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string'
    },
    {
      name: 'metaDescription',
      title: 'SEO Description',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localeString'
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [
        {
          type: 'person'
        }
      ]
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            layout: 'tags'
          }
        }
      ]
    },
    {
      name: 'combinedBody',
      title: 'Combined Body',
      type: 'localeRichText'
    }
  ]
}
