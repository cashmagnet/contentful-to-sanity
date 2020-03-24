export default {
  name: 'extendedCasinoData',
  title: 'Extended Casino Data',
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
      name: 'singularTransactionWithdrawalLimit',
      title: 'Singular Transaction Withdrawal Limit',
      type: 'string'
    },
    {
      name: 'withdrawalLimits',
      title: 'Withdrawal Limits',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            layout: 'tags'
          }
        }
      ]
    },
    {
      name: 'withdrawalLimitsFrequency',
      title: 'Withdrawal Limits Frequency',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: ['day', 'week', 'month', 'year']
          }
        }
      ]
    },
    {
      name: 'responsibleGamingRating',
      title: 'Responsible Gaming Rating',
      type: 'number'
    },
    {
      name: 'raffleText',
      title: 'Raffle Text',
      type: 'localeString'
    },
    {
      name: 'enAffiliateLink',
      title: 'EN Affiliate Link',
      type: 'string'
    },
    {
      name: 'caAffiliateLink',
      title: 'CA Affiliate Link',
      type: 'string'
    },
    {
      name: 'banned',
      title: 'Banned',
      type: 'boolean'
    },
    {
      name: 'closed',
      title: 'Closed',
      type: 'boolean'
    },
    {
      name: 'hasOnlineTransactionHistory',
      title: 'Has Online Transaction History',
      type: 'boolean'
    },
    {
      name: 'hasSelfAssessmentTest',
      title: 'Has Self Assessment Test',
      type: 'boolean'
    },
    {
      name: 'realityCheckReminder',
      title: 'Reality Check Reminder',
      type: 'boolean'
    },
    {
      name: 'hasTimeOutPeriod',
      title: 'Has Time Out Period',
      type: 'boolean'
    },
    {
      name: 'hasFinancialLimits',
      title: 'Has Financial Limits',
      type: 'boolean'
    },
    {
      name: 'hasSelfExclusion',
      title: 'Has Self Exclusion',
      type: 'boolean'
    },
    {
      name: 'hasDirectLinkToHelpOrganisation',
      title: 'Has Direct Link To Help Organisation',
      type: 'boolean'
    },
    {
      name: 'hasBaccarat',
      title: 'Has Baccarat',
      type: 'boolean'
    },
    {
      name: 'hasCraps',
      title: 'Has Craps',
      type: 'boolean'
    }
  ]
}
