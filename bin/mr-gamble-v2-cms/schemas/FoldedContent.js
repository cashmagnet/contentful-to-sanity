export default {
  name: 'foldedContent',
  title: 'Folded Content',
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
      type: 'string'
    },
    {
      name: 'contentItem',
      title: 'ContentItem',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'reference',
          to: [
            {
              type: 'section'
            },
            {
              type: 'foldedContent'
            },
            {
              type: 'faq'
            },
            {
              type: 'casinoComparison'
            }
          ]
        },
        {
          type: 'foldedContent'
        },
        {
          type: 'section'
        },
        {
          type: 'casinoComparison'
        },
        {
          type: 'faq'
        }
      ]
    },
    {
      name: 'footerContentItem',
      title: 'Footer Content Item',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'reference',
          to: [
            {
              type: 'section'
            },
            {
              type: 'foldedContent'
            },
            {
              type: 'faq'
            },
            {
              type: 'casinoComparison'
            }
          ]
        },
        {
          type: 'foldedContent'
        },
        {
          type: 'section'
        },
        {
          type: 'casinoComparison'
        },
        {
          type: 'faq'
        }
      ]
    }
  ]
}
