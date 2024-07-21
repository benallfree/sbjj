import { z } from 'zod'
import { CornamentSlug } from './CornamentSlug'
import { RecordBase } from './RecordBase'

export const UserCornamentBag = z.object({})
export type UserCornamentBag = z.infer<typeof UserCornamentBag>

export const UserSettings = z.object({
  cornaments: z.record(CornamentSlug, UserCornamentBag),
})
export type UserSettings = z.infer<typeof UserSettings>

export const UserModel = RecordBase.extend({
  id: z.string(),
  email: z.string(),
  subscription: z.string(),
  settings: UserSettings,
  verified: z.boolean(),
})
export type UserModel = z.infer<typeof UserModel>
