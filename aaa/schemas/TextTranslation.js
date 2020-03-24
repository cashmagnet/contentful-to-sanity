export default {
  name: 'textTranslation',
  title: 'Text Translation',
  type: 'document',
  preview: {
    select: {
      title: 'baseName'
    }
  },
  fields: [
    {
      name: 'baseName',
      title: 'Base Name',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'value',
      title: 'Value',
      type: 'localeString'
    }
  ]
}
