import { keys } from '@s-libs/micro-dash'
import { APP_NAME, PRELAUNCH_NAME, PREMIUM_NAME } from './constants'
import { FAQS } from './faq'
import { FEATURES_MATRIX } from './features'
import { LANDER } from './lander'
import { PLANS } from './plans'
import { seasons } from './season1'
export * from './constants'

export const HIDE_LOGO_TEXT = true

export const meta = {
  seasons,
  currentSeason: seasons.season1,
  seedSlugs: keys(seasons.season1.seeds),
  cornamentSlugs: keys(seasons.season1.cornaments),
  repo: `https://github.com/benallfree/sbjj`,
  publishDate: `7/15/2024`,
  name: APP_NAME,
  prelaunch: true,
  prelaunchLabel: PRELAUNCH_NAME,
  description: `Plant, grow, win!`,
  support: {
    discord: {
      url: `https://discord.gg/8hPftRZhRN`,
    },
  },
  pocketbase: {
    endpoint: `https://cornage.pockethost.io`,
  },
  gpdr: {
    cookie: { name: `${APP_NAME}-gpdr` },
    description: `We use cookies to improve your experience on our site. By using our site, you consent to our use of cookies.`,
  },
  domain: `${APP_NAME}.com`,
  pages: {
    lander: LANDER,
    pricing: {
      title: `Pricing`,
      tagline: `Plans for aspiring growers and seasoned gardeners.`,
      content: `${APP_NAME} is free to use, but you can unlock the full potential with ${PREMIUM_NAME}.`,
    },
  },
  plans: PLANS,
  faqs: FAQS,
  features: FEATURES_MATRIX,
} as const

export type Meta = typeof meta
export type PlanSlug = keyof Meta[`plans`]
export type Plan = Meta[`plans`][PlanSlug]
