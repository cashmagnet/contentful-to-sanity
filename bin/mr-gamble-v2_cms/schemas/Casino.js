export default {
  name: 'casino',
  title: 'Casino',
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
      name: 'minimumDeposit',
      title: 'Minimum Deposit',
      type: 'string'
    },
    {
      name: 'bonuses',
      title: 'Bonuses',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'casinoBonus'
            }
          ]
        }
      ]
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image'
    },
    {
      name: 'raffleInformation',
      title: 'Raffle Information',
      type: 'localeString'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'smallLogo',
      title: 'Small Logo',
      type: 'image'
    },
    {
      name: 'locale',
      title: 'Locale',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: ['en', 'fi', 'ca']
          }
        }
      ]
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string'
    },
    {
      name: 'gameProviders',
      title: 'Game Providers',
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
      name: 'depositMethods',
      title: 'Deposit Methods',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'paymentMethod'
            }
          ]
        }
      ]
    },
    {
      name: 'withdrawalMethods',
      title: 'Withdrawal Methods',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'paymentMethod'
            }
          ]
        }
      ]
    },
    {
      name: 'withdrawalTimes',
      title: 'Withdrawal Times',
      type: 'string'
    },
    {
      name: 'hasScratchcards',
      title: 'Has Scratchcards',
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
      type: 'localeBoolean'
    },
    {
      name: 'keno',
      title: 'Keno',
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
      name: 'roulette',
      title: 'Roulette',
      type: 'boolean'
    },
    {
      name: 'supportEmail',
      title: 'Support Email',
      type: 'string'
    },
    {
      name: 'telephoneNumber',
      title: 'Telephone Number',
      type: 'string'
    },
    {
      name: 'dateEstablished',
      title: 'Date Established',
      type: 'string'
    },
    {
      name: 'licences',
      title: 'Licences',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'licenceType'
            }
          ]
        }
      ]
    },
    {
      name: 'award',
      title: 'Award',
      type: 'localeString'
    },
    {
      name: 'isBonusForfeitable',
      title: 'Is Bonus Forfeitable',
      type: 'boolean'
    },
    {
      name: 'hasGamification',
      title: 'Has Gamification',
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
      name: 'hasNoAccount',
      title: 'Has No Account',
      validation: Rule => Rule.required(),
      type: 'boolean'
    },
    {
      name: 'hasLiveCasino',
      title: 'Has Live Casino',
      type: 'boolean'
    },
    {
      name: 'amountOfSlots',
      title: 'Amount Of Slots',
      type: 'number'
    },
    {
      name: 'hasLiveChat',
      title: 'Has Live Chat',
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
      name: 'hasVipProgram',
      title: 'Has Vip Program',
      type: 'boolean'
    },
    {
      name: 'languagesOffered',
      title: 'Languages Offered',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'language'
            }
          ]
        }
      ]
    },
    {
      name: 'bonusRating',
      title: 'Bonus Rating',
      type: 'number'
    },
    {
      name: 'usabilityRating',
      title: 'Usability Rating',
      type: 'number'
    },
    {
      name: 'gameVarietyRating',
      title: 'Game Variety Rating',
      type: 'number'
    },
    {
      name: 'customerServiceRating',
      title: 'Customer Service Rating',
      type: 'number'
    },
    {
      name: 'transferRating',
      title: 'Transfer Rating',
      type: 'number'
    },
    {
      name: 'mobileRating',
      title: 'Mobile Rating',
      type: 'number'
    },
    {
      name: 'casinoTerms',
      title: 'Casino Terms',
      type: 'localizedMarkdownText'
    },
    {
      name: 'affiliateLink',
      title: 'Affiliate Link',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'affiliateMask',
      title: 'Affiliate Mask',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'canClaimWithEWallet',
      title: 'Can Claim With EWallet',
      type: 'boolean'
    },
    {
      name: 'maxBet',
      title: 'Max Bet',
      type: 'string'
    },
    {
      name: 'casinoTermsLink',
      title: 'Casino Terms Link',
      type: 'localeString'
    },
    {
      name: 'extendedData',
      title: 'Extended Data',
      type: 'reference',
      to: [
        {
          type: 'extendedCasinoData'
        }
      ]
    }
  ]
}
