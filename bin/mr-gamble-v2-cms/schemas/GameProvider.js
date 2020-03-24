export default {
  name: 'gameProvider',
  title: 'Game Provider',
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
      name: 'freespinHeader',
      title: 'Freespin Header',
      type: 'localeRichText'
    },
    {
      name: 'freespinContent',
      title: 'Freespin Content',
      type: 'localeRichText'
    },
    {
      name: 'freespinFooter',
      title: 'Freespin Footer',
      type: 'localeRichText'
    },
    {
      name: 'freespinSeoTitle',
      title: 'Freespin SEO Title',
      type: 'localeString'
    },
    {
      name: 'freespinSeoMeta',
      title: 'Freespin SEO Meta',
      type: 'localeString'
    },
    {
      name: 'headerText',
      title: 'Header',
      type: 'localeRichText'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'localeRichText'
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'localeRichText'
    },
    {
      name: 'description',
      title: 'Description',
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
      name: 'bestBonuses',
      title: 'Best Bonuses',
      type: 'reference',
      to: [
        {
          type: 'casinoRanking'
        }
      ]
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image'
    },
    {
      name: 'largeIcon',
      title: 'Large Icon',
      type: 'image'
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
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string'
    },
    {
      name: 'headquarters',
      title: 'Headquarters',
      type: 'localeString'
    },
    {
      name: 'desktop',
      title: 'Desktop',
      type: 'boolean'
    },
    {
      name: 'mobile',
      title: 'Mobile',
      type: 'boolean'
    },
    {
      name: 'vr',
      title: 'VR',
      type: 'boolean'
    },
    {
      name: 'socialGames',
      title: 'Social Games',
      type: 'boolean'
    },
    {
      name: 'liveGames',
      title: 'Live Games',
      type: 'boolean'
    },
    {
      name: 'progressiveJackpots',
      title: 'Progressive Jackpots',
      type: 'boolean'
    },
    {
      name: 'slots',
      title: 'Slots',
      type: 'boolean'
    },
    {
      name: 'blackJack',
      title: 'BlackJack',
      type: 'boolean'
    },
    {
      name: 'roulette',
      title: 'Roulette',
      type: 'boolean'
    },
    {
      name: 'poker',
      title: 'Poker',
      type: 'boolean'
    },
    {
      name: 'videoPoker',
      title: 'Video Poker',
      type: 'boolean'
    },
    {
      name: 'craps',
      title: 'Craps',
      type: 'boolean'
    },
    {
      name: 'keno',
      title: 'Keno',
      type: 'boolean'
    },
    {
      name: 'bingo',
      title: 'Bingo',
      type: 'boolean'
    },
    {
      name: 'fixedOdds',
      title: 'Fixed Odds',
      type: 'boolean'
    },
    {
      name: 'baccarat',
      title: 'Baccarat',
      type: 'boolean'
    },
    {
      name: 'virtualSports',
      title: 'Virtual Sports',
      type: 'boolean'
    },
    {
      name: 'scratchcards',
      title: 'Scratchcards',
      type: 'boolean'
    },
    {
      name: 'others',
      title: 'Others',
      type: 'boolean'
    },
    {
      name: 'sameAsLink',
      title: 'Same As Link',
      type: 'string'
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
