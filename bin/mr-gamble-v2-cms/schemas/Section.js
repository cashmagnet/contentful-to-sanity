export default {
  name: 'section',
  title: 'Section',
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
      name: 'rightHandBackground',
      title: 'Right Hand Background',
      type: 'image'
    },
    {
      name: 'colourCode',
      title: 'Colour Code',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'isGuideSection',
      title: 'Is Guide Section',
      type: 'boolean'
    }
  ]
}
