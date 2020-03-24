export default {
  name: 'footer',
  title: 'Footer',
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
      name: 'twitch',
      title: 'Twitch',
      type: 'url'
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url'
    },
    {
      name: 'youtube',
      title: 'Youtube',
      type: 'url'
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url'
    },
    {
      name: 'googlePlus',
      title: 'GooglePlus',
      type: 'url'
    },
    {
      name: 'firstLinks',
      title: 'First Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'keyValuePair'
            }
          ]
        }
      ]
    },
    {
      name: 'secondLinks',
      title: 'Second Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'keyValuePair'
            }
          ]
        }
      ]
    },
    {
      name: 'thirdLinks',
      title: 'Third Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'keyValuePair'
            }
          ]
        }
      ]
    }
  ]
}
