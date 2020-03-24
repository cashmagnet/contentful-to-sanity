export default {
  name: 'genericLandingPage',
  title: 'Generic Landing Page',
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
      name: 'h1Tag',
      title: 'H1 Tag',
      type: 'localeString'
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image'
    },
    {
      name: 'headerText',
      title: 'Header Text',
      type: 'localeRichText'
    },
    {
      name: 'combinedBody',
      title: 'Combined Body',
      type: 'localeRichText'
    },
    {
      name: 'footerText',
      title: 'Footer Text',
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
      name: 'casinos',
      title: 'Casinos',
      type: 'reference',
      to: [
        {
          type: 'casinoRanking'
        }
      ]
    },
    {
      name: 'gameProviderRanking',
      title: 'Game Provider Ranking',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'gameProvider'
            }
          ]
        }
      ]
    },
    {
      name: 'promotedSlots',
      title: 'Promoted Slots',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'game'
            }
          ]
        }
      ]
    },
    {
      name: 'bodyBreakerText',
      title: 'Body Breaker Text',
      type: 'localeRichText'
    },
    {
      name: 'headingFilters',
      title: 'Heading Filters',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'textTranslation'
            }
          ]
        }
      ]
    }
  ]
}
