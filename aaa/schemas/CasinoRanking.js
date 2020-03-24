export default {
  name: 'casinoRanking',
  title: 'Casino Ranking',
  type: 'document',
  preview: {
    select: {
      title: 'name'
    }
  },
  fields: [
    {
      name: 'casinos',
      title: 'Casinos',
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'casino'
            }
          ]
        }
      ]
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'isRaffle',
      title: 'Is Raffle',
      type: 'boolean'
    }
  ]
}
