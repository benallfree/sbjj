import { z } from 'zod'
import { EntityStackItem } from './EntityStackItem'

export const GridCell = z.object({
  item: EntityStackItem.extend({ user: z.string() }).optional(),
})
export type GridCell = z.infer<typeof GridCell>
