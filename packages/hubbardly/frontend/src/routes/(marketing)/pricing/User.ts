import type { Meta } from '$src/meta'
import { type BaseFields } from './types'

export type UserFields = BaseFields & {
  email: string
  verified: boolean
  subscription: keyof Meta['plans']['tiers']
  notifyMaintenanceMode: boolean
}
