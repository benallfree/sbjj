import {
  faArrowAltCircleDown,
  faRotate,
  faServer,
} from '@fortawesome/free-solid-svg-icons'

export default {
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
  faq: [
    {
      title: `What's Hubbardly?`,
      content:
        'Hubbardly is a platform for home cooks to discover, cook, and enjoy recipes. You can build your pantry, share your recipes, and match with community recipes.',
    },
  ],
} as const
