import {
  faArrowAltCircleDown,
  faRotate,
  faServer,
} from '@fortawesome/free-solid-svg-icons'

export const meta = {
  name: 'Hubbardly',
  support: {
    discord: {
      url: 'https://discord.gg/9X2T6Gcg5G',
    },
  },
  pocketbase: {
    endpoint: 'https://hubbardly.pockethost.io',
  },
  gpdr: {
    cookie: { name: 'hubbardly-gpdr' },
    description:
      'We use cookies to improve your experience on our site. By using our site, you consent to our use of cookies.',
  },
  domain: 'hubbardly.com',
  hero: {
    title: 'Hubbardly',
    subtitle: 'From Pantry to Plate: Discover, Cook, Enjoy!',
    cta: {
      text: 'Transform your #pantry# into a #culinary adventure#!',
      link: '/signup',
    },
  },
  features: {
    main: [
      {
        title: 'Community',
        tagline: 'A thriving Discord community of home cooks',
        content:
          'Join our Discord community to share recipes, ask questions, and get inspired by other home cooks.',
        icon: faRotate,
        linkText: "See what's Cookin'",
        linkURL: 'https://discord.gg/yfv2S76dSN',
      },

      {
        title: 'Zero Config',
        tagline: 'Move Fast, Build Fast',
        content:
          'With PocketHost, batteries are included. You get a database, outgoing email, SSL, authentication, cloud functions, and high concurrency all in one stop.',
        icon: faArrowAltCircleDown,
        linkText: 'Read the Documentation',
        linkURL: '/pricing',
      },
    ],
    sub: [
      {
        icon: faServer,
        title: 'Database',
        content:
          'Your PocketHost instance is powered by its own internal SQLite instance. SQLite is more performant than mySQL or Postgres and is perfect for powering your next app.',
      },
    ],
  },
  plans: {
    title: 'Pricing',
    tagline: 'Plans for aspiring cooks and seasoned chefs alike',
    content:
      'Hubbardly is free to use, but you can unlock the full potential of the platform with our Pro plan. Get access to all community recipes and match with your pantry items.  Join our thriving community of makers, we are waiting for you in Discord!',
    presale:
      'Hubbardly is in Pre-Sale mode. All subscription plans are locked until the official launch. Founder tiers are available and need your early support. As each tier sells out, new features are unlocked.',
    tiers: [
      {
        name: 'Free',
        price: '0',
        slug: 'free',
        description:
          'Free forever. Use Hubbardly to build your pantry and share your recipes with the world.',
        checkoutUrl: '',
        features: [
          'Unlimited pantry items',
          'Unlimited recipes',
          'Unlimited matching with your recipes',
          'See community recipes with up to 3 ingredients',
        ],
        locked: true,
      },
      {
        name: 'Pro',
        price: '19/mo',
        slug: 'pro-monthly',
        description:
          'Unlock the full potential of Hubbardly with our Pro plan. Get access to all community recipes and match with your pantry items.',
        checkoutUrl: '',
        features: [
          'Everything in Free, plus...',
          'Match all community recipes with unlimited ingredients',
        ],
        locked: true,
      },
      {
        name: 'Pro Annual',
        price: '199/yr',
        slug: 'pro-annual',
        checkoutUrl: '',
        description:
          'Unlock the full potential of Hubbardly with our Pro plan. Get access to all community recipes and match with your pantry items.',
        features: [
          'Everything in Pro, plus...',
          'Save 20% with an annual subscription',
        ],
        locked: true,
      },
      {
        name: 'Founder',
        price: '299/lifetime',
        slug: 'founder',
        checkoutUrl: '',
        description:
          "Super elite! Hubbardly for life. The Founder's Edition is our way of saying thanks for supporting Hubbardly in these early days. These are rare, so get them while they last!",
        qtyMax: 100,
        features: [
          'Everything in Pro, plus...',
          "Founder's Badge on your profile",
          "Private Founder's channel in Discord",
          'Early access to new features',
          'Votes on new features',
          "Commemorative Founder's mug",
        ],
      },
      {
        name: 'Astounder',
        slug: 'astounder',
        price: '349/lifetime',
        checkoutUrl: '',
        description:
          "Meta elite! Missed the Founder's Edition? The Astounder Edition gives you another chance. ",
        qtyMax: 1000,
        features: [
          'Everything in Pro, plus...',
          'Early access to new features',
          'Votes on new features',
        ],
      },
      {
        name: 'Flounder',
        price: '499/lifetime',
        slug: 'flounder',
        checkoutUrl: '',
        description:
          "Tepid elite! You're really sleeping on this one, but there's still hope and a killer lifetime deal. ",
        qtyMax: 10000,
        features: [
          'Everything in Pro, plus...',
          'Votes on new features',
          'Sadness that you slept for so long',
        ],
      },
    ],
  },
  faqs: [
    {
      question: `What's Hubbardly?`,
      answer:
        'Hubbardly is a platform for home cooks to discover, cook, and enjoy recipes. You can build your pantry, share your recipes, and match with community recipes.',
    },
    {
      question: 'What is Presale Mode?',
      answer: `Hubbardly is in Presale mode. All subscription plans are locked until the official launch. Founder tiers are available and need your early support. As each tier sells out, new features are unlocked. This is done to fund the development of the platform and to reward early supporters.`,
    },
    {
      question: `How does the affiliate program work?`,
      answer:
        'The affiliate program is a way for you to earn money by referring others to Hubbardly. You will receive a unique link to share with your friends and followers. When someone signs up using your link, you will receive a commission on their subscription. Check out <a href="/affiliate" class="link">our affiliate page</a> for more information.',
    },
    {
      question: 'How do I get started?',
      answer: `Create an account. Choose a support tier and join in the funding of Hubbardly if you can. Otherwise, sit tight while we get organized and we'll send you updates. In the meantime, join our Discord community to meet other home cooks and share recipes.`,
    },
    {
      question: 'How do I join the Discord community?',
      answer:
        'Join our Discord community by visiting <a href="/support" class="link">the support page</a>.',
    },
    {
      question: `What's your refund policy?`,
      answer: `Short version: We only want your money if you are happy. If you are not happy, we will refund your money. Long version: <a href="/cancel" class="link">our refund and cancellation policy</a>. While we are in Presale mode, we are not offering refunds. However, if you really have a change of heart, of course we will refund your money. You'll lose your place in line though, and many not get another chance to become a Founder. Also, if we decide to cancel the project for any reason, we will refund your money.`,
    },
    {
      question: 'Post-launch: How do I share my recipes?',
      answer:
        'Once you have an account, you can create recipes and share them with the community.',
    },
    {
      question: 'Post-launch: How do I match with community recipes?',
      answer:
        'Add items to your pantry and Hubbardly will show you recipes that you can make with those items across the Community, including your own recipes.',
    },
    {
      question: `Post-launch: How do I create recipes?`,
      answer:
        'Once you have an account, you can create recipes by adding ingredients and instructions.',
    },
    {
      question: 'Post-launch: How do I get access to all community recipes?',
      answer:
        'Community recipes with three or fewer ingredients are available to all users. To get access to all community recipes, you need to subscribe to the Pro plan.',
    },
  ],
} as const

export type Meta = typeof meta
