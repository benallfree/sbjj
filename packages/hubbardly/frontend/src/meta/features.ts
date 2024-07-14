export type Feature = {
  title: string
  description: string
  link?: string
  isPremium?: boolean
  isStretch?: boolean
}

export type FeatureLookup = {
  [_: string]: Feature
}

export const FEATURES_MATRIX: FeatureLookup = {
  'pantry-items': {
    title: `Unlimited pantry items`,
    description: `Pantry items are ingredients you have on hand. You can add pantry items to your account and match them with personal and community recipes.`,
  },
  'personal-recipes': {
    title: `Unlimited personal recipes`,
    description: `Personal recipes are recipes you create and save for yourself with unlimited ingredients.`,
  },
  'match-recipes': {
    title: `Pantry matching`,
    description: `You can search and view public community recipes with up to 3 ingredients as a Free user and unlimited ingredients as a Blue user.`,
  },
  'discord-community': {
    title: `Discord community`,
    description: `Join our Discord community to chat with other users.`,
  },
  'create-communities': {
    title: `Create your own communities`,
    description: `Communities are groups of users who share recipes and pantry items. You can create your own community and invite others to join.`,
    isPremium: true,
  },
  'join-private-communities': {
    title: `Join private communities`,
    description: `Private communities require an invitation to join and only show recipes to members.`,
    isPremium: true,
  },
  'ingredient-trends': {
    title: `Research ingredient trends`,
    description: `Research ingredient trends and popularity while creating recipes.`,
    isPremium: true,
    isStretch: true,
  },
  'ai-assisted-recipes': {
    title: `AI-assisted recipe creation`,
    description: `Use AI to help create recipes.`,
    isPremium: true,
    isStretch: true,
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
    isStretch: true,
  },
  'comment-recipes': {
    title: `Comment on recipes`,
    description: `You can comment on recipes shared by other users.`,
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
    title: `Access public communities`,
    description: `Public communities are open to all users and show recipes to everyone.`,
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
    title: `Monetize communities`,
    description: `Participate in the streaming royalties program.`,
    isPremium: true,
    isStretch: true,
  },
}

export const FOUNDER_FEATURES: FeatureLookup = {
  'founders-badge': {
    title: `Founder's Badge on your profile`,
    description: `Show off your status as a founder with a special badge on your profile.`,
  },
  'private-founders-channel': {
    title: `Private Founder's channel Discord`,
    description: `Gain access to a private channel on our Discord server exclusively for founders.`,
  },
  'early-access': {
    title: `Early access to new features`,
    description: `Be among the first to try out and provide feedback on new features.`,
  },
  'feature-voting': {
    title: `Vote on new features`,
    description: `Have a say in the development of new features by participating in feature voting.`,
  },
  'founders-edition-mug': {
    title: `Commemorative Founder's Edition mug`,
    description: `Receive a special edition mug as a token of appreciation for being a founder.`,
  },
}
