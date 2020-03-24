export default {
  name: 'paymentMethod',
  title: 'Payment Method',
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
      name: 'displayName',
      title: 'Display Name',
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
      name: 'seoTitleWithdrawal',
      title: 'SEO Title Withdrawal',
      type: 'localeString'
    },
    {
      name: 'seoMetaWithdrawal',
      title: 'SEO Meta Withdrawal',
      type: 'localeString'
    },
    {
      name: 'depositText',
      title: 'Deposit Text',
      type: 'localeRichText'
    },
    {
      name: 'depositTextHeader',
      title: 'Deposit Heading Pre Casinos',
      type: 'localeRichText'
    },
    {
      name: 'depositTextFooter',
      title: 'Deposit Text Footer',
      type: 'localeRichText'
    },
    {
      name: 'withdrawalText',
      title: 'Withdrawal Text',
      type: 'localeRichText'
    },
    {
      name: 'withdrawalTextHeader',
      title: 'Withdrawal Heading PreCasinos',
      type: 'localeRichText'
    },
    {
      name: 'wiithdrawalTextFooter',
      title: 'Wiithdrawal Text Footer',
      type: 'localeRichText'
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
      name: 'minimumWithdrawalTime',
      title: 'Minimum Withdrawal Time',
      type: 'number'
    },
    {
      name: 'maximumWithdrawalTime',
      title: 'Maximum Withdrawal Time',
      type: 'number'
    },
    {
      name: 'minimumDepositTime',
      title: 'Minimum Deposit Time',
      type: 'number'
    },
    {
      name: 'maximumDepositTime',
      title: 'Maximum Deposit Time',
      type: 'number'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'foundedDate',
      title: 'Founded Date',
      type: 'string'
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string'
    },
    {
      name: 'languages',
      title: 'Languages',
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
      name: 'instantProcessing',
      title: 'Instant Processing',
      type: 'boolean'
    },
    {
      name: 'freeOfCharge',
      title: 'Free Of Charge',
      type: 'boolean'
    },
    {
      name: 'worldwideService',
      title: 'Worldwide Service',
      type: 'boolean'
    },
    {
      name: 'disabledLocales',
      title: 'Disabled Locales',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: ['fi', 'en']
          }
        }
      ]
    }
  ]
}
