import { type BaseFields } from './types'

export type UserFields = BaseFields & {
  email: string
  verified: boolean
  subscription: string
  notifyMaintenanceMode: boolean
}
