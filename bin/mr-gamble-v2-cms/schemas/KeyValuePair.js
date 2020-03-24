export default {
  name: 'keyValuePair',
  title: 'Key Value Pair',
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
      name: 'value',
      title: 'Value',
      type: 'string'
    }
  ]
}
