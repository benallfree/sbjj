import { APP_NAME, PRELAUNCH_NAME } from './constants'
import { FAQS } from './faq'
import { FEATURES_MATRIX } from './features'
import { LANDER } from './lander'
import { PLANS } from './plans'

export const meta = {
  publishDate: `7/12/2024`,
  name: APP_NAME,
  prelaunch: true,
  prelaunchLabel: PRELAUNCH_NAME,
  description: `Discover exclusive recipes from your favorite culinary creators.`,
  support: {
    discord: {
      url: `https://discord.gg/9X2T6Gcg5G`,
    },
  },
  pocketbase: {
    endpoint: `https://hubbardly.pockethost.io`,
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
      tagline: `Plans for aspiring cooks and seasoned chefs alike`,
      content: `${APP_NAME} is free to use, but you can unlock the full potential of the platform with our Pro plan. Get access to all community recipes and match with your pantry items.  Join our thriving community of makers, we are waiting for you in Discord!`,
    },
  },
  plans: PLANS,
  faqs: FAQS,
  features: FEATURES_MATRIX,
} as const

export type Meta = typeof meta
export type PlanSlug = keyof Meta[`plans`]
export type Plan = Meta[`plans`][PlanSlug]
