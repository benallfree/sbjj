export enum SubscriptionType {
  Legacy = 'legacy',
  Free = 'free',
  Premium = 'premium',
  Founder = 'founder',
  FounderAnnual = 'founder-annual',
  Flounder = 'flounder',
}

export const PLAN_NAMES = {
  [SubscriptionType.Legacy]: 'Legacy',
  [SubscriptionType.Free]: 'Hacker',
  [SubscriptionType.Premium]: `Pro`,
  [SubscriptionType.Founder]: `Founder's Edition`,
  [SubscriptionType.FounderAnnual]: `Founder's Edition (Annual)`,
  [SubscriptionType.Flounder]: `fLounder's Edition`,
} as const

export type RecordId = string
export type UserId = RecordId
export type InstanceId = RecordId
export type Semver = string
export type InternalInstanceId = RecordId
export type Subdomain = string
export type Port = number
export type IsoDate = string
export type ProcessId = number
export type Username = string
export type Password = string
export type CollectionName = string
export type Seconds = number
export type BaseFields = {
  id: RecordId
  created: IsoDate
  updated: IsoDate
}

export type UserFields = BaseFields & {
  email: string
  verified: boolean
  isLegacy: boolean
  subscription: SubscriptionType
  notifyMaintenanceMode: boolean
}
