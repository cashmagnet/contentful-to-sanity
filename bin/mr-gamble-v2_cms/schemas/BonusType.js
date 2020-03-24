export default {
  name: 'bonusType',
  title: 'Bonus Type',
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
      name: 'description',
      title: 'Description',
      type: 'localeString'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localeString'
    }
  ]
}
