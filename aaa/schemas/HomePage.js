export default {
  name: 'homePage',
  title: 'Home Page',
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
      name: 'h1Tag',
      title: 'H1 Tag',
      type: 'localeString'
    },
    {
      name: 'top9CasinosSpot',
      title: 'Top 9 Casinos Spot',
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
      name: 'firstBody',
      title: 'First Body',
      type: 'localeRichText'
    },
    {
      name: 'secondBody',
      title: 'Second Body',
      type: 'localeRichText'
    },
    {
      name: 'thirdBody',
      title: 'Third Body',
      type: 'localeRichText'
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'localeString'
    },
    {
      name: 'seoMeta',
      title: 'SEO Meta',
      type: 'localeString'
    },
    {
      name: 'secondaryListPromotedCasinoss',
      title: 'Secondary List Promoted Casinoss',
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
    }
  ]
}
