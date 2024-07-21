import { z } from 'zod'

export const RecordBase = z.object({
  id: z.string(),
  created: z.date(),
  updated: z.date(),
})
export type RecordBase = z.infer<typeof RecordBase>
