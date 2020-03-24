export default {
  preview: {
    prepare: values => {
      const getFirstText = block =>
        block.children && block.children[0] && block.children[0].text
      const block = values.title.find(getFirstText)
      return {title: block && getFirstText(block)}
    },
    select: {
      title: 'description'
    }
  },
  name: 'casinoBonus',
  title: 'Casino Bonus',
  type: 'document',
  fields: [
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
      name: 'bonusCode',
      title: 'Bonus Code',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'reference',
      to: [
        {
          type: 'bonusType'
        }
      ]
    },
    {
      name: 'minimumDeposit',
      title: 'Minimum Deposit',
      type: 'number'
    },
    {
      name: 'maximumBonusAmount',
      title: 'Maximum Bonus Amount',
      type: 'number'
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string'
    },
    {
      name: 'cashbackIsPerSpin',
      title: 'Cashback Is Per Spin',
      type: 'boolean'
    },
    {
      name: 'bonusValue',
      title: 'Bonus Value',
      type: 'number'
    },
    {
      name: 'freespinWagering',
      title: 'Freespin Wagering',
      type: 'number'
    },
    {
      name: 'freespinValue',
      title: 'Freespin Value',
      type: 'string'
    },
    {
      name: 'maxFreespinCashout',
      title: 'Max Freespin Cashout',
      type: 'string'
    },
    {
      name: 'isExclusive',
      title: 'Is Exclusive',
      type: 'boolean'
    },
    {
      name: 'isCashable',
      title: 'Is Cashable',
      type: 'boolean'
    },
    {
      name: 'bonusTerms',
      title: 'Bonus Terms',
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
      name: 'freespinsAmount',
      title: 'Freespins Amount',
      type: 'number'
    },
    {
      name: 'wageringRequirement',
      title: 'Wagering Requirement',
      type: 'string'
    },
    {
      name: 'wageringRequirementType',
      title: 'Wagering Requirement Type',
      type: 'string',
      options: {
        list: ['x(d+b)', 'xb', 'xd', 'x', 'No WR'],
        layout: 'radio'
      }
    },
    {
      name: 'minimumOdd',
      title: 'Minimum Odd',
      type: 'string'
    },
    {
      name: 'isSticky',
      title: 'Is Sticky',
      type: 'boolean'
    },
    {
      name: 'redirectLink',
      title: 'Redirect Link',
      type: 'string'
    },
    {
      name: 'redirectUrlMask',
      title: 'Redirect Url (Mask)',
      type: 'string'
    },
    {
      name: 'isNoDepositBonus',
      title: 'Is No Deposit Bonus',
      type: 'boolean'
    },
    {
      name: 'relatedGames',
      title: 'Related Games',
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
      name: 'expiryDate',
      title: 'Expiry Date',
      type: 'datetime'
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime'
    },
    {
      name: 'promotionText',
      title: 'Promotion Text',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'reference',
          to: [
            {
              type: 'section'
            },
            {
              type: 'foldedContent'
            },
            {
              type: 'faq'
            },
            {
              type: 'casinoComparison'
            }
          ]
        },
        {
          type: 'foldedContent'
        },
        {
          type: 'section'
        },
        {
          type: 'casinoComparison'
        },
        {
          type: 'faq'
        }
      ]
    },
    {
      name: 'maxBet',
      title: 'Max Bet',
      type: 'string'
    }
  ]
}
