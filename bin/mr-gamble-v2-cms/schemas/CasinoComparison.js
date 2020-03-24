export default {
  name: 'casinoComparison',
  title: 'Casino Comparison',
  type: 'document',
  preview: {
    select: {
      title: 'heading'
    }
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'bonusType',
      title: 'Bonus Type',
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
    },
    {
      name: 'isLiveCasino',
      title: 'Is Live Casino',
      type: 'boolean'
    },
    {
      name: 'isMobileFriendly',
      title: 'Is Mobile Friendly',
      type: 'boolean'
    },
    {
      name: 'isTaxExempt',
      title: 'Is Tax Exempt',
      type: 'boolean'
    },
    {
      name: 'isBonusForfeitable',
      title: 'Is Bonus Forfeitable',
      type: 'boolean'
    },
    {
      name: 'hasGamfication',
      title: 'Has Gamfication',
      type: 'boolean'
    },
    {
      name: 'hasSportsbook',
      title: 'Has Sportsbook',
      type: 'boolean'
    },
    {
      name: 'hasBingo',
      title: 'Has Bingo',
      type: 'boolean'
    },
    {
      name: 'hasLotto',
      title: 'Has Lotto',
      type: 'boolean'
    },
    {
      name: 'hasLiveChat',
      title: 'Has Live Chat',
      type: 'boolean'
    },
    {
      name: 'hasVipProgram',
      title: 'Has Vip Program',
      type: 'boolean'
    },
    {
      name: 'hasNoAccount',
      title: 'Has No Account',
      type: 'boolean'
    },
    {
      name: 'group',
      title: 'Group',
      type: 'reference',
      to: [
        {
          type: 'casinoGroup'
        }
      ]
    },
    {
      name: 'language',
      title: 'Language',
      type: 'reference',
      to: [
        {
          type: 'language'
        }
      ]
    },
    {
      name: 'minimumDeposit',
      title: 'Minimum Deposit',
      type: 'string'
    },
    {
      name: 'dateEstablishedYear',
      title: 'Date Established (year)',
      type: 'string'
    },
    {
      name: 'roulette',
      title: 'Roulette',
      type: 'boolean'
    },
    {
      name: 'keno',
      title: 'Keno',
      type: 'boolean'
    },
    {
      name: 'scratchcards',
      title: 'Scratchcards',
      type: 'boolean'
    },
    {
      name: 'videoPoker',
      title: 'Video Poker',
      type: 'boolean'
    },
    {
      name: 'blackjack',
      title: 'Blackjack',
      type: 'boolean'
    },
    {
      name: 'topSearches',
      title: 'Top Searches',
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
