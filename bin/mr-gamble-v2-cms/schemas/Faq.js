export default {
  name: 'faq',
  title: 'FAQ',
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
      name: 'questionAnswers',
      title: 'QuestionAnswers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'foldedContent'
            }
          ]
        }
      ]
    },
    {
      name: 'relatedLink',
      title: 'Related Link',
      type: 'string'
    }
  ]
}
