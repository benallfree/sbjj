import { APP_NAME, PRELAUNCH_NAME, PREMIUM_NAME } from './constants'
import { FAQS } from './faq'
import { FEATURES_MATRIX } from './features'
import { LANDER } from './lander'
import { PLANS } from './plans'
export * from './constants'

export const meta = {
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
    endpoint: `https://rootrivals.pockethost.io`,
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
