import { meta } from './meta'

export const translateAll = <T>(obj: T): T => {
  if (!(typeof obj === 'object')) {
    if (typeof obj === 'string') {
      return translate(obj) as T
    }
    return obj
  }
  for (const key in obj) {
    obj[key] = translateAll(obj[key])
  }
  return obj
}

export const translate = (s: string) => {
  const regex = /#(.*?)#/g
  const result = s.replace(regex, (match, token) => {
    if (token.startsWith('fa-')) {
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/${token.slice(3)}.svg`
    } else {
      if (!(token in meta)) return match
      const val = meta[token as keyof typeof meta]
      if (!(typeof val === 'string')) {
        throw new Error(`Meta token ${token} is not a string`)
      }
      return val
    }
  })
  return result
}
