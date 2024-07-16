import type { PlanSlug } from '$src/meta'
import { type BaseFields } from './BaseFields'

export type UserFields = BaseFields & {
  email: string
  verified: boolean
  subscription: PlanSlug
  notifyMaintenanceMode: boolean
}
