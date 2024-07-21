import { meta as metaData } from './meta'
import { translateAll } from './translate'

export type Meta = typeof metaData
export const meta = translateAll(metaData)
