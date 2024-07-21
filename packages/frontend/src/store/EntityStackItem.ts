import { z } from 'zod'
import { CornamentSlug } from './CornamentSlug'
import { SeedSlug } from './SeedSlug'

export const EntityStackItem = z.object({
  seedSlug: SeedSlug,
  cornaments: z.array(CornamentSlug),
})
export type EntityStackItem = z.infer<typeof EntityStackItem>
