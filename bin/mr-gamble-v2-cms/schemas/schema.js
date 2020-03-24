import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import CasinoReview from './CasinoReview'
import Casino from './Casino'
import PaymentMethod from './PaymentMethod'
import GameProvider from './GameProvider'
import Game from './Game'
import CasinoBonus from './CasinoBonus'
import BonusType from './BonusType'
import HomePage from './HomePage'
import BlogPost from './BlogPost'
import CasinoRanking from './CasinoRanking'
import GenericLandingPage from './GenericLandingPage'
import GenericContentPage from './GenericContentPage'
import LicenceType from './LicenceType'
import Footer from './Footer'
import CasinoComparison from './CasinoComparison'
import Language from './Language'
import CasinoGroup from './CasinoGroup'
import TextTranslation from './TextTranslation'
import Section from './Section'
import FoldedContent from './FoldedContent'
import KeyValuePair from './KeyValuePair'
import Seo from './Seo'
import Faq from './Faq'
import ExtendedCasinoData from './ExtendedCasinoData'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    CasinoReview,
    Casino,
    PaymentMethod,
    GameProvider,
    Game,
    CasinoBonus,
    BonusType,
    HomePage,
    BlogPost,
    CasinoRanking,
    GenericLandingPage,
    GenericContentPage,
    LicenceType,
    Footer,
    CasinoComparison,
    Language,
    CasinoGroup,
    TextTranslation,
    Section,
    FoldedContent,
    KeyValuePair,
    Seo,
    Faq,
    ExtendedCasinoData
  ])
})
