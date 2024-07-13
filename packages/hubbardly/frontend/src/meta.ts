import splashImg from '$src/assets/img/splash.webp?enhanced'
import {
  faDollarSign,
  faHeartCircleCheck,
  faLightbulb,
  faListAlt,
  faLock,
  faPeopleRoof,
  faSave,
  faSearch,
  faStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

export const APP_NAME = `Hubbardly`

export const FEATURES_MATRIX = {
  'pantry-items': {
    title: `Unlimited pantry items`,
    description: `Pantry items are ingredients you have on hand. You can add pantry items to your account and match them with personal and community recipes.`,
  },
  'personal-recipes': {
    title: `Unlimited personal recipes`,
    description: `Personal recipes are recipes you create and save for yourself with unlimited ingredients.`,
  },
  'match-recipes': {
    title: `Match your pantry items with personal and community recipes`,
    description: `You can search and view public community recipes with up to 3 ingredients as a Free user and unlimited ingredients as a Pro user.`,
  },
  'discord-community': {
    title: `Discord community`,
    description: `Join our Discord community to chat with other users.`,
  },
  'favorite-recipes': {
    title: `Favorite recipes`,
    description: `You can favorite recipes shared by other users.`,
    isStretch: true,
  },
  'shopping-list': {
    title: `Shopping list`,
    description: `Add recipes to your meal plan and generate a shopping list for missing ingredients.`,
    isStretch: true,
  },
  'join-communities': {
    title: `Join communities`,
    description: `Communities are groups of users who share recipes and pantry items. You can join an existing community to discover new recipes.`,
    isPremium: true,
    isStretch: true,
  },
  'rate-recipes': {
    title: `Rate recipes`,
    description: `You can rate recipes shared by other users.`,
    isPremium: true,
    isStretch: true,
  },
  'comment-recipes': {
    title: `Comment on recipes`,
    description: `You can comment on recipes shared by other users.`,
    isPremium: true,
    isStretch: true,
  },
  'create-communities': {
    title: `Communities: create and manage`,
    description: `Communities are groups of users who share recipes and pantry items. You can create your own community and invite others to join, or you can join an existing community.`,
    isPremium: true,
    isStretch: true,
  },
  'store-integration': {
    title: `Store integration`,
    description: `You can connect your account to a grocery store and import your shopping list.`,
    isPremium: true,
    isStretch: true,
  },
  'social-sharing': {
    title: `Sharable and social`,
    description: `Share your recipes on social media.`,
  },
  'recipe-privacy': {
    title: `Recipe privacy`,
    description: `You can set your recipes to private or public.`,
    isPremium: true,
    isStretch: true,
  },
  'community-public': {
    title: `Communities: open`,
    description: `Public communities are open to all users and show recipes to everyone.`,
    isPremium: true,
    isStretch: true,
  },
  'private-community': {
    title: `Private communities`,
    description: `Private communities require an invitation to join and only show recipes to members.`,
    isPremium: true,
    isStretch: true,
  },
  'community-moderators': {
    title: `Community moderators`,
    description: `Assign moderators to help manage your community.`,
    isPremium: true,
    isStretch: true,
  },
  'community-premium': {
    title: `Premium communities`,
    description: `Create and join premium communities that require an additional subscription to access.`,
    isPremium: true,
    isStretch: true,
  },
} as const

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
  prelaunch: true,
  description: `Discover exclusive recipes from your favorite culinary creators.`,
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
  pages: {
    lander: {
      hero: {
        title: `Discover exclusive recipes from your favorite culinary creators`,
        splashImg,
        cta: {
          text: `Join #communities# with exclusive #recipes# or create your own community on Hubbardly `,
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
            content: `Hubbardly connects you with hundreds of specialized communities, each focused on specific culinary goals such as paleo, Mediterranean, decadent desserts, and more. Join these communities to discover how to make thousands of recipes.`,
            icon: faPeopleRoof,
            linkText: 'See what`s Cookin`',
            linkURL: `/kickstart`,
          },

          {
            title: `Inspire Your Meals`,
            tagline: `Unlock Unexpected Recipes from Your Pantry`,
            content: `Hubbardly helps you discover communities you love by matching what you already have in your pantry with recipes from top creators. Get inspired to cook with what you have while exploring new flavors from around the world.`,
            icon: faLightbulb,
            linkText: 'Get Inspired',
            linkURL: `/kickstart`,
          },
        ],
        sub: [
          {
            icon: faSearch,
            title: `Free Forever`,
            content: `Search, create and join public communities.`,
          },
          {
            icon: faSave,
            title: `Save Recipes`,
            content: `Save your own recipes for personal use.`,
          },
          {
            icon: faUsers,
            title: `Create Communities`,
            content: `Create your own community and invite other moderators.`,
          },
          {
            icon: faDollarSign,
            title: `Premium Communities`,
            content: `Create premium communities with paid access where you earn 80% of the revenue from members who join.`,
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
    pricing: {
      title: `Pricing`,
      tagline: `Plans for aspiring cooks and seasoned chefs alike`,
      content: `${APP_NAME} is free to use, but you can unlock the full potential of the platform with our Pro plan. Get access to all community recipes and match with your pantry items.  Join our thriving community of makers, we are waiting for you in Discord!`,
    },
  },
  plans: {
    free: {
      name: `Free Forever`,
      price: `Free Forever`,
      slug: `free`,
      summary: `You're on the basic Free plan. Upgrade to Pro to unlock all community recipes.`,
      qtyMax: 0,
      description: `Free forever. Use ${APP_NAME} to build your pantry and share your recipes with the world.`,
      checkoutUrl: ``,
      isPrelaunch: false,
      isPremium: true,
      isDefault: true,
      bonusFeatures: [],
    },
    [`pro-monthly`]: {
      name: `Pro`,
      price: `19/mo`,
      slug: `pro-monthly`,
      summary: `You're on the monthly Pro plan. Thank you for supporting ${APP_NAME}!`,
      isPrelaunch: false,
      description: `Unlock the full potential of ${APP_NAME} with our Pro plan. Get access to all community recipes and match with your pantry items.`,
      checkoutUrl: ``,
      qtyMax: 0,
      isPremium: true,
      isDefault: false,
      bonusFeatures: [],
    },
    [`pro-annual`]: {
      name: `Pro Annual`,
      price: `199/yr`,
      slug: `pro-annual`,
      checkoutUrl: ``,
      summary: `You're on the annual Pro plan. Thank you for supporting ${APP_NAME}!`,
      isPrelaunch: false,
      description: `Unlock the full potential of ${APP_NAME} with our Pro plan. Get access to all community recipes and match with your pantry items.`,
      qtyMax: 0,
      isPremium: true,
      isDefault: false,
      bonusFeatures: [],
    },
    founder: {
      name: `Founder's Edition`,
      price: `299 once, use forever`,
      slug: `founder`,
      checkoutUrl: `https://${APP_NAME}.lemonsqueezy.com/buy/3dbf3220-e3f3-4cc5-aa5a-765a9e5bf306`,
      summary: `What an absolute Chad! You're in ${APP_NAME} for life!`,
      description: `Super elite! ${APP_NAME} for life. The Founder's Edition is our way of saying thanks for supporting ${APP_NAME} in these early days. These are rare, so get them while they last!`,
      qtyMax: 500,
      isPremium: true,
      isPrelaunch: true,
      isDefault: false,
      bonusFeatures: FOUNDER_FEATURES,
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
export type PlanSlug = keyof Meta[`plans`]
export type Plan = Meta[`plans`][PlanSlug]
