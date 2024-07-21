import splashImg from '../assets/img/splash.webp?enhanced'

export const meta = {
  APP_NAME: 'Cornage',
  PREMIUM_NAME: 'Huskers',
  FOUNDERS_NAME: "Kernel's Club",
  PRELAUNCH_NAME: 'Early Access',
  earlyAccessMessage:
    '#APP_NAME# is currently in #PRELAUNCH_NAME# mode. <b>We are building features as funds are raised.</b> All subscription plans will remain locked until the official launch. In the meantime, consider supporting the project by purchasing a #FOUNDERS_NAME# to get lifetime access. As soon as we reach funding (and maybe before!), features will be added.',
  seasons: {
    season1: {
      name: 'Season 1: The Huskening',
      defaultSeedSlug: 'yellow',
      baseSlug: 'base',
      seeds: {
        yellow: {
          name: 'Yellow',
          weight: 3299,
          yield: 10,
          points: 5,
        },
        blue: {
          name: 'Blue',
          weight: 3000,
          yield: 15,
          points: 10,
        },
        red: {
          name: 'Red',
          weight: 2000,
          yield: 20,
          points: 20,
        },
        violet: {
          name: 'Violet',
          weight: 1000,
          yield: 30,
          points: 50,
        },
        pride: {
          name: 'Pride',
          weight: 500,
          yield: 50,
          points: 100,
        },
        unicorn: {
          name: 'Unicorn',
          weight: 200,
          yield: 100,
          points: 250,
        },
        shiny: {
          name: 'Shiny',
          weight: 1,
          yield: 250,
          points: 10000,
        },
      },
      exchangeRate: 1000,
      cornaments: {
        sunglasses: {
          name: 'Sunglasses',
          price: 10,
        },
        mustache: {
          name: 'Mustache',
          price: 20,
        },
        'cowboy-hat': {
          name: 'Cowboy Hat',
          price: 50,
        },
        beard: {
          name: 'Beard',
          price: 50,
        },
        'corn-dog': {
          name: 'Corn Dog',
          price: 100,
        },
        'magic-wand': {
          name: 'Magic Wand',
          price: 100,
        },
        cigar: {
          name: 'Cigar',
          price: 100,
        },
        'jean-jacket': {
          name: 'Jean Jacket',
          price: 200,
        },
        earring: {
          name: 'Earring',
          price: 500,
        },
        crown: {
          name: 'Crown',
          price: 1000,
        },
        necklace: {
          name: 'Necklace',
          price: 200,
        },
        overalls: {
          name: 'Overalls',
          price: 100,
        },
        'clown-nose': {
          name: 'Clown Nose',
          price: 20,
        },
        scarf: {
          name: 'Scarf',
          price: 50,
        },
      },
    },
  },
  currentSeason: 'season1',
  repo: 'https://github.com/benallfree/sbjj',
  publishDate: '7/15/2024',
  name: '#APP_NAME#',
  prelaunch: true,
  prelaunchLabel: '#PRELAUNCH_NAME#',
  description: 'Plant, grow, win!',
  support: {
    discord: {
      url: 'https://discord.gg/8hPftRZhRN',
    },
  },
  pocketbase: {
    endpoint: 'https://cornage.pockethost.io',
  },
  gpdr: {
    cookie: {
      name: '#APP_NAME#-gpdr',
    },
    description:
      'We use cookies to improve your experience on our site. By using our site, you consent to our use of cookies.',
  },
  domain: 'cornage.app',
  pages: {
    lander: {
      hero: {
        title: 'Expand your corn empire and cornquer rivals live.',
        splashImg: splashImg,
        cta: {
          text: 'Dominate the #multiplayer# field. Earn #coins#. Give your corn a #fit#.',
          button: {
            text: 'Play Now',
            link: '/0x0',
          },
        },
      },
      features: {
        main: {
          left: {
            title: 'Communities',
            tagline: 'Discover, Join, and Cook with Specialized Communities',
            content:
              '#APP_NAME# connects you with hundreds of specialized communities, each focused on specific culinary goals such as paleo, Mediterranean, decadent desserts, and more. Join these communities to discover how to make thousands of recipes.',
            icon: '#fa-people-roof#',
            linkText: "See what's Cookin'",
            linkURL: '/pricing',
          },
          right: {
            title: 'Inspire Your Meals',
            tagline: 'Unlock Unexpected Recipes',
            content:
              '#PREMIUM_NAME# gives you premium access to ingredient trends, AI-assisted recipe creation, private communities, and more.',
            icon: '#fa-lightbulb#',
            linkText: 'Get Inspired',
            linkURL: '/pricing',
          },
        },
        sub: [
          {
            icon: '#fa-search#',
            title: 'Free Forever',
            content: 'Search, create and join public communities.',
          },
          {
            icon: '#fa-save#',
            title: 'Save Recipes',
            content: 'Save your own recipes for personal use.',
          },
          {
            icon: '#fa-users#',
            title: 'Create Communities',
            content: 'Create your own community and invite other moderators.',
          },
          {
            icon: '#fa-lock#',
            title: 'Community Privacy',
            content:
              'Set your community to public or private, auto-join or approval first.',
          },
          {
            icon: '#fa-star#',
            title: 'Recipe Ratings',
            content: 'Recipes have ratings and comments.',
          },
          {
            icon: '#fa-heart-circle-check#',
            title: 'Favorite Recipes',
            content: 'Favorite your best-loved recipes for easy access.',
          },
          {
            icon: '#fa-list-alt#',
            title: 'Meal Planning',
            content:
              'Add meals to your planning list and generate a shopping list for missing ingredients.',
          },
          {
            title: 'Monetize Your Community',
            content:
              '#PREMIUM_NAME# allows you to earn revenue from your community.',
            icon: '#fa-dollar-sign#',
          },
        ],
      },
    },
    pricing: {
      title: 'Pricing',
      tagline: 'Plans for aspiring growers and seasoned gardeners.',
      content:
        '#APP_NAME# is free to use, but you can unlock the full potential with #PREMIUM_NAME#.',
    },
  },
  plans: {
    free: {
      name: 'Free Forever',
      price: 'Free Forever',
      slug: 'free',
      summary:
        "You're on the basic Free plan. Upgrade to Blue to unlock all community recipes.",
      qtyMax: 0,
      description:
        'Free forever. Use #APP_NAME# to build your pantry and share your recipes with the world.',
      checkoutUrl: '',
      isPrelaunch: false,
      isPremium: false,
      isDefault: true,
      bonusFeatures: [],
    },
    monthly: {
      name: 'Blue Monthly',
      price: '19/mo',
      slug: 'pro-monthly',
      summary:
        "You're on the monthly Blue plan. Thank you for supporting #APP_NAME#!",
      isPrelaunch: false,
      description:
        'Unlock the full potential of #APP_NAME# with #PREMIUM_NAME#. You get a blue check mark and premium features for ultimate recipe creation and discovery.',
      checkoutUrl: '',
      qtyMax: 0,
      isPremium: true,
      isDefault: false,
      bonusFeatures: [],
    },
    annual: {
      name: 'Blue Annual',
      price: '199/yr',
      slug: 'pro-annual',
      checkoutUrl: '',
      summary:
        "You're on the annual Blue plan. Thank you for supporting #APP_NAME#!",
      isPrelaunch: false,
      description:
        'Unlock the full potential of #APP_NAME# with #PREMIUM_NAME#. You get a blue check mark and premium features for ultimate recipe creation and discovery.',
      qtyMax: 0,
      isPremium: true,
      isDefault: false,
      bonusFeatures: [],
    },
    founder: {
      name: '#FOUNDERS_NAME#',
      price: '299 once, use forever',
      slug: 'founder',
      checkoutUrl:
        'https://cornage.lemonsqueezy.com/buy/3dbf3220-e3f3-4cc5-aa5a-765a9e5bf306',
      summary: "What an absolute Chad! You're in #APP_NAME# for life!",
      description:
        'Super elite! #APP_NAME# for life. The #FOUNDERS_NAME# is our way of saying thanks for supporting #APP_NAME# in these early days. These are rare, so get them while they last!',
      qtyMax: 500,
      isPremium: true,
      isPrelaunch: true,
      isDefault: false,
      bonusFeatures: [
        {
          title: "Founder's Badge on your profile",
          description:
            'Show off your status as a founder with a special badge on your profile.',
        },
        {
          title: "Private Founder's Discord channel",
          description:
            'Gain access to a private channel on our Discord server exclusively for founders.',
        },
        {
          title: 'Early access to new features',
          description:
            'Be among the first to try out and provide feedback on new features.',
        },
        {
          title: 'Vote on new features',
          description:
            'Have a say in the development of new features by participating in feature voting.',
        },
        {
          title: 'Commemorative #FOUNDERS_NAME# mug',
          description:
            'Receive a special edition mug as a token of appreciation for being a founder.',
        },
      ],
    },
  },
  faqs: [
    {
      question: "What's #APP_NAME#?",
      answer:
        '#APP_NAME# is a platform for home cooks to discover, cook, and enjoy recipes. You can build your pantry, share your recipes, and match with community recipes.',
    },
    {
      question: 'What is #PRELAUNCH_NAME# Mode?',
      answer:
        '#APP_NAME# is in #PRELAUNCH_NAME# mode. All subscription plans are locked until the official launch. Founder tiers are available and need your early support. As each tier sells out, new features are unlocked. This is done to fund the development of the platform and to reward early supporters.',
    },
    {
      question: 'What is the #FOUNDERS_NAME#?',
      answer:
        'The #FOUNDERS_NAME# is a limited-time offer available during #PRELAUNCH_NAME# mode. #FOUNDERS_NAME# members receive a lifetime subscription to #APP_NAME#, a special badge, and other perks.',
    },
    {
      question: '#PRELAUNCH_NAME# mode: What are stretch goals?',
      answer:
        "Stretch goals are additional features that we will unlock as we reach certain funding milestones and depending on development feasibility. They aren't promised, but we'd really like to see them happen.",
    },
    {
      question: 'How do I monetize my community?',
      answer:
        'As a #PREMIUM_NAME# member, your community participates in the revenue share program. You earn a percentage of the revenue generated by your community based on usage and activity.',
    },
    {
      question: 'How does the affiliate program work?',
      answer:
        'The affiliate program is a way for you to earn money by referring others to #APP_NAME#. You will receive a unique link to share with your friends and followers. When someone signs up using your link, you will receive a commission on their subscription. Check out <a href="/affiliates" class="link">our affiliate page</a> for more information.',
    },
    {
      question: 'How do I get started?',
      answer:
        "Create an account. Choose a support tier and join in the funding of #APP_NAME# if you can. Otherwise, sit tight while we get organized and we'll send you updates. In the meantime, join our Discord community to meet other home cooks and share recipes.",
    },
    {
      question: 'How do I join the Discord community?',
      answer:
        'Join our Discord community by visiting <a href="/support" class="link">the support page</a>.',
    },
    {
      question: 'What is the blue check mark?',
      answer:
        'The blue check mark is a badge of honor. It signifies that you are a #PREMIUM_NAME# member and have access to all #APP_NAME# features.',
    },
    {
      question: "What's your refund policy?",
      answer:
        'Short version: We only want your money if you are happy. If you are not happy, we will refund your money. Long version: <a href="/cancel" class="link">our refund and cancellation policy</a>. We are selling limited #FOUNDERS_NAME# memberships while we are in #PRELAUNCH_NAME# mode. If you cancel your purchase, you will lose your place in line and may not get another chance to become a Founder later.  Also, if we decide to cancel the project for any reason, we will refund your money.',
    },
    {
      question: 'Post-launch: How do I share my recipes?',
      answer:
        'Once you have an account, you can create recipes and share them with the community.',
    },
    {
      question: 'Post-launch: How do I match with community recipes?',
      answer:
        'Add items to your pantry and #APP_NAME# will show you recipes that you can make with those items across the Community, including your own recipes.',
    },
    {
      question: 'Post-launch: How do I create recipes?',
      answer:
        'Once you have an account, you can create recipes by adding ingredients and instructions.',
    },
    {
      question: 'Post-launch: How do I get access to all community recipes?',
      answer:
        'Community recipes with three or fewer ingredients are available to all users. To get access to all community recipes, you need to subscribe to the Blue plan.',
    },
  ],
  features: [
    {
      title: 'Unlimited pantry items',
      description:
        'Pantry items are ingredients you have on hand. You can add pantry items to your account and match them with personal and community recipes.',
    },
    {
      title: 'Unlimited personal recipes',
      description:
        'Personal recipes are recipes you create and save for yourself with unlimited ingredients.',
    },
    {
      title: 'Pantry matching',
      description:
        'You can search and view public community recipes with up to 3 ingredients as a Free user and unlimited ingredients as a Blue user.',
    },
    {
      title: 'Discord community',
      description: 'Join our Discord community to chat with other users.',
    },
    {
      title: 'Create your own communities',
      description:
        'Communities are groups of users who share recipes and pantry items. You can create your own community and invite others to join.',
      isPremium: true,
    },
    {
      title: 'Join private communities',
      description:
        'Private communities require an invitation to join and only show recipes to members.',
      isPremium: true,
    },
    {
      title: 'Research ingredient trends',
      description:
        'Research ingredient trends and popularity while creating recipes.',
      isPremium: true,
      isStretch: true,
    },
    {
      title: 'AI-assisted recipe creation',
      description: 'Use AI to help create recipes.',
      isPremium: true,
      isStretch: true,
    },
    {
      title: 'Favorite recipes',
      description: 'You can favorite recipes shared by other users.',
      isStretch: true,
    },
    {
      title: 'Shopping list',
      description:
        'Add recipes to your meal plan and generate a shopping list for missing ingredients.',
      isStretch: true,
    },
    {
      title: 'Join communities',
      description:
        'Communities are groups of users who share recipes and pantry items. You can join an existing community to discover new recipes.',
      isPremium: true,
      isStretch: true,
    },
    {
      title: 'Rate recipes',
      description: 'You can rate recipes shared by other users.',
      isStretch: true,
    },
    {
      title: 'Comment on recipes',
      description: 'You can comment on recipes shared by other users.',
      isPremium: true,
      isStretch: true,
    },
    {
      title: 'Store integration',
      description:
        'You can connect your account to a grocery store and import your shopping list.',
      isPremium: true,
      isStretch: true,
    },
    {
      title: 'Sharable and social',
      description: 'Share your recipes on social media.',
    },
    {
      title: 'Recipe privacy',
      description: 'You can set your recipes to private or public.',
      isPremium: true,
      isStretch: true,
    },
    {
      title: 'Access public communities',
      description:
        'Public communities are open to all users and show recipes to everyone.',
    },
    {
      title: 'Private communities',
      description:
        'Private communities require an invitation to join and only show recipes to members.',
      isPremium: true,
      isStretch: true,
    },
    {
      title: 'Community moderators',
      description: 'Assign moderators to help manage your community.',
      isPremium: true,
      isStretch: true,
    },
    {
      title: 'Monetize communities',
      description: 'Participate in the streaming royalties program.',
      isPremium: true,
      isStretch: true,
    },
  ],
}
