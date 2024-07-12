import splashImg from '$src/assets/img/splash.webp?enhanced'
import {
  faHeartCircleCheck,
  faLightbulb,
  faListAlt,
  faLock,
  faPeopleRoof,
  faSave,
  faSearch,
  faSearchPlus,
  faStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

export const APP_NAME = `Hubbardly`

export const FREE_FEATURES = [
  `Unlimited pantry items`,
  `Unlimited personal recipes`,
  `Unlimited matching with your recipes`,
  `Search and view public community recipes with up to 3 ingredients`,
  `Search and preview public community recipes with more than 3 ingredients`,
]
export const PRO_FEATURES = [
  `Search and view public community recipes with unlimited ingredients`,
]
export const FOUNDER_FEATURES = [
  `Founder's Badge on your profile`,
  `Private Founder's channel in ${APP_NAME} Discord`,
  `Early access to new features`,
  `Vote on new features`,
  `Commemorative Founder's Edition mug`,
]

export const PRELAUNCH_NAME = `Kickstarter`

export const meta = {
  publishDate: `7/12/2024`,
  name: APP_NAME,
  prelaunch: false,
  description: `Discover hidden meals in your own pantry.`,
  support: {
    discord: {
      url: `https://discord.gg/9X2T6Gcg5G`,
    },
  },
  pocketbase: {
    endpoint: `https://${APP_NAME}.pockethost.io`,
  },
  gpdr: {
    cookie: { name: `${APP_NAME}-gpdr` },
    description: `We use cookies to improve your experience on our site. By using our site, you consent to our use of cookies.`,
  },
  domain: `${APP_NAME}.com`,
  lander: {
    hero: {
      title: `Discover hidden meals in your own pantry`,
      splashImg,
      cta: {
        text: `Hubbardly uses what you already have in your #pantry# to find delicious #recipes# you didn't know you had.`,
        button: {
          text: `Get Started`,
          link: `/signup`,
        },
      },
    },
    features: {
      main: [
        {
          title: `Communities`,
          tagline: `Discover, Join, and Cook with Specialized Communities`,
          content: `Hubbardly connects you with hundreds of specialized communities, each focused on specific culinary goals such as paleo, Mediterranean, decadent desserts, and more. Join these communities to discover how to make thousands of recipes using just the ingredients in your pantry.`,
          icon: faPeopleRoof,
          linkText: 'See what`s Cookin`',
          linkURL: `/kickstart`,
        },

        {
          title: `Inspire Your Meals`,
          tagline: `Unlock Unexpected Recipes from Your Pantry`,
          content: `Hubbardly's core feature transforms your pantry into a treasure trove of culinary possibilities. By matching your on-hand ingredients with thousands of recipes, Hubbardly inspires meals you may have never thought of. Discover new and exciting dishes using what you already have at home.`,
          icon: faLightbulb,
          linkText: 'Get Inspired',
          linkURL: `/kickstart`,
        },
      ],
      sub: [
        {
          icon: faSearch,
          title: `Free Forever`,
          content: `Search for recipes with up to 3 ingredients.`,
        },
        {
          icon: faSearchPlus,
          title: `Unlimited Searches`,
          content: `Premium users can search for recipes with unlimited ingredients.`,
        },
        {
          icon: faSave,
          title: `Save Recipes`,
          content: `Save your own recipes and always have them searchable.`,
        },
        {
          icon: faUsers,
          title: `Create Communities`,
          content: `Create your own community and invite other moderators.`,
        },
        {
          icon: faLock,
          title: `Community Privacy`,
          content: `Set your community to public or private, auto-join or approval first.`,
        },
        {
          icon: faStar,
          title: `Recipe Ratings`,
          content: `Recipes have ratings and comments.`,
        },
        {
          icon: faHeartCircleCheck,
          title: `Favorite Recipes`,
          content: `Favorite your best-loved recipes for easy access.`,
        },
        {
          icon: faListAlt,
          title: `Meal Planning`,
          content: `Add meals to your planning list and generate a shopping list for missing ingredients.`,
        },
      ],
    },
  },
  plans: {
    title: `Pricing`,
    tagline: `Plans for aspiring cooks and seasoned chefs alike`,
    content: `${APP_NAME} is free to use, but you can unlock the full potential of the platform with our Pro plan. Get access to all community recipes and match with your pantry items.  Join our thriving community of makers, we are waiting for you in Discord!`,
    tiers: {
      free: {
        name: `Free Forever`,
        price: `Free Forever`,
        slug: `free`,
        summary: `You're on the basic Free plan. Upgrade to Pro to unlock all community recipes.`,
        upgradable: true,
        qtyMax: 0,
        description: `Free forever. Use ${APP_NAME} to build your pantry and share your recipes with the world.`,
        checkoutUrl: ``,
        features: FREE_FEATURES,
        locked: true,
      },
      [`pro-monthly`]: {
        name: `Pro`,
        price: `19/mo`,
        slug: `pro-monthly`,
        summary: `You're on the monthly Pro plan. Thank you for supporting ${APP_NAME}!`,
        upgradable: true,
        description: `Unlock the full potential of ${APP_NAME} with our Pro plan. Get access to all community recipes and match with your pantry items.`,
        checkoutUrl: ``,
        features: [`Everything in Free, plus...`, ...PRO_FEATURES],
        locked: true,
        qtyMax: 0,
      },
      [`pro-annual`]: {
        name: `Pro Annual`,
        price: `199/yr`,
        slug: `pro-annual`,
        checkoutUrl: ``,
        summary: `You're on the annual Pro plan. Thank you for supporting ${APP_NAME}!`,
        upgradable: true,
        description: `Unlock the full potential of ${APP_NAME} with our Pro plan. Get access to all community recipes and match with your pantry items.`,
        features: [`Everything in Free, plus...`, ...PRO_FEATURES],
        locked: true,
        qtyMax: 0,
      },
      founder: {
        name: `Founder's Edition`,
        price: `299 once, use forever`,
        slug: `founder`,
        checkoutUrl: `https://${APP_NAME}.lemonsqueezy.com/buy/3dbf3220-e3f3-4cc5-aa5a-765a9e5bf306`,
        summary: `What an absolute Chad! You're a ${APP_NAME} Founder for life!`,
        upgradable: false,
        description: `Super elite! ${APP_NAME} for life. The Founder's Edition is our way of saying thanks for supporting ${APP_NAME} in these early days. These are rare, so get them while they last!`,
        qtyMax: 500,
        features: [`Everything in Pro, plus...`, ...FOUNDER_FEATURES],
        locked: false,
      },
      astounder: {
        name: `Astounder`,
        slug: `astounder`,
        price: `349 once, use forever`,
        checkoutUrl: ``,
        summary: `What an absolute Chad! The Astounder Edition is yours for life.`,
        upgradable: false,
        description: `Meta elite! Missed the Founder's Edition? The Astounder Edition gives you another chance. `,
        qtyMax: 5000,
        features: [
          `Everything in Pro, plus...`,
          `Early access to new features`,
          `Votes on new features`,
        ],
        locked: false,
      },
      flounder: {
        name: `Flounder`,
        price: `499 once, use forever`,
        slug: `flounder`,
        checkoutUrl: ``,
        summary: `What an absolute Chad! The Flounder Edition is yours for life.`,
        upgradable: false,
        description:
          'Tepid elite! You`re really sleeping on this one, but there`s still hope and a killer lifetime deal. ',
        qtyMax: 10000,
        features: [
          `Everything in Pro, plus...`,
          `Votes on new features`,
          `Sadness that you slept for so long`,
        ],
        locked: false,
      },
    },
  },
  faqs: [
    {
      question: `What's ${APP_NAME}?`,
      answer: `${APP_NAME} is a platform for home cooks to discover, cook, and enjoy recipes. You can build your pantry, share your recipes, and match with community recipes.`,
    },
    {
      question: `What is ${PRELAUNCH_NAME} Mode?`,
      answer: `${APP_NAME} is in ${PRELAUNCH_NAME} mode. All subscription plans are locked until the official launch. Founder tiers are available and need your early support. As each tier sells out, new features are unlocked. This is done to fund the development of the platform and to reward early supporters.`,
    },
    {
      question: `How does the affiliate program work?`,
      answer: `The affiliate program is a way for you to earn money by referring others to ${APP_NAME}. You will receive a unique link to share with your friends and followers. When someone signs up using your link, you will receive a commission on their subscription. Check out <a href="/affiliate" class="link">our affiliate page</a> for more information.`,
    },
    {
      question: `How do I get started?`,
      answer: `Create an account. Choose a support tier and join in the funding of ${APP_NAME} if you can. Otherwise, sit tight while we get organized and we'll send you updates. In the meantime, join our Discord community to meet other home cooks and share recipes.`,
    },
    {
      question: `How do I join the Discord community?`,
      answer: `Join our Discord community by visiting <a href="/support" class="link">the support page</a>.`,
    },
    {
      question: `What's your refund policy?`,
      answer: `Short version: We only want your money if you are happy. If you are not happy, we will refund your money. Long version: <a href="/cancel" class="link">our refund and cancellation policy</a>. While we are in ${PRELAUNCH_NAME} mode, we are not offering refunds. However, if you really have a change of heart, of course we will refund your money. You'll lose your place in line though, and many not get another chance to become a Founder. Also, if we decide to cancel the project for any reason, we will refund your money.`,
    },
    {
      question: `Post-launch: How do I share my recipes?`,
      answer: `Once you have an account, you can create recipes and share them with the community.`,
    },
    {
      question: `Post-launch: How do I match with community recipes?`,
      answer: `Add items to your pantry and ${APP_NAME} will show you recipes that you can make with those items across the Community, including your own recipes.`,
    },
    {
      question: `Post-launch: How do I create recipes?`,
      answer: `Once you have an account, you can create recipes by adding ingredients and instructions.`,
    },
    {
      question: `Post-launch: How do I get access to all community recipes?`,
      answer: `Community recipes with three or fewer ingredients are available to all users. To get access to all community recipes, you need to subscribe to the Pro plan.`,
    },
  ],
}

export type Meta = typeof meta
export type PricingTier = Meta[`plans`][`tiers`][`free`]
export type PlanSlugs = keyof Meta[`plans`][`tiers`]
