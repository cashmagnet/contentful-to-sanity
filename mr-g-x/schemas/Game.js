export default {
  name: 'game',
  title: 'Game',
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
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image'
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image'
    },
    {
      name: 'seoMeta',
      title: 'SEO Meta',
      type: 'localeString'
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'localeString'
    },
    {
      name: 'headerContent',
      title: 'Header Content',
      type: 'localeRichText'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'localeRichText'
    },
    {
      name: 'footerContent',
      title: 'Footer Content',
      type: 'localeRichText'
    },
    {
      name: 'paylines',
      title: 'Paylines',
      type: 'number'
    },
    {
      name: 'reels',
      title: 'Reels',
      type: 'number'
    },
    {
      name: 'minimumCoinSize',
      title: 'Minimum Coin Size',
      type: 'number'
    },
    {
      name: 'maximumCoinSize',
      title: 'Maximum Coin Size',
      type: 'number'
    },
    {
      name: 'jackpot',
      title: 'Jackpot',
      type: 'number'
    },
    {
      name: 'rtp',
      title: 'RTP',
      type: 'number'
    },
    {
      name: 'bonusGame',
      title: 'Bonus Game',
      type: 'boolean'
    },
    {
      name: 'progressive',
      title: 'Progressive',
      type: 'boolean'
    },
    {
      name: 'wildSymbol',
      title: 'Wild Symbol',
      type: 'boolean'
    },
    {
      name: 'scatterSymbol',
      title: 'Scatter Symbol',
      type: 'boolean'
    },
    {
      name: 'autoplayOption',
      title: 'Autoplay Option',
      type: 'boolean'
    },
    {
      name: 'multipler',
      title: 'Multipler',
      type: 'boolean'
    },
    {
      name: 'freeSpin',
      title: 'Free Spin',
      type: 'boolean'
    },
    {
      name: 'gameProvider',
      title: 'Game Provider',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {
          type: 'gameProvider'
        }
      ]
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
      name: 'minCoinsPerLine',
      title: 'Min Coins Per Line',
      type: 'number'
    },
    {
      name: 'maxCoinsPerLine',
      title: 'Max Coins Per Line',
      type: 'number'
    },
    {
      name: 'virtualReality',
      title: 'Virtual Reality',
      type: 'boolean'
    },
    {
      name: 'has3d',
      title: 'Has 3D',
      type: 'boolean'
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'datetime'
    }
  ]
}
