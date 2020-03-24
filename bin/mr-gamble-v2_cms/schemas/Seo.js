export default {
  name: 'seo',
  title: 'SEO',
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
      name: 'datasetName',
      title: 'Dataset Name',
      type: 'localeString'
    },
    {
      name: 'datasetDescription',
      title: 'Dataset Description',
      type: 'localeString'
    }
  ]
}
