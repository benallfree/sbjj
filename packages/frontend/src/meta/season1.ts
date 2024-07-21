const seasons = {
  season1: {
    name: `Season 1: The Huskening`,
    defaultSeedSlug: 'yellow',
    baseSlug: `base`,
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
  pick() {
    const { seeds } = seasons.season1
    type SeedKey = keyof typeof seeds
    const seedArray = Object.keys(seeds).map((key) => ({
      key,
      ...seeds[key as SeedKey],
    }))
    const totalWeight = seedArray.reduce((sum, seed) => sum + seed.weight, 0)

    // Generate a random number between 0 and totalWeight
    const randomNumber = Math.random() * totalWeight

    let cumulativeWeight = 0
    for (const seed of seedArray) {
      cumulativeWeight += seed.weight
      if (randomNumber < cumulativeWeight) {
        return seed.key
      }
    }

    // In case something goes wrong, return 'yellow'
    return 'yellow'
  },
}

export { seasons }
