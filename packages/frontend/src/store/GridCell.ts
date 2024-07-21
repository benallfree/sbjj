import { z } from 'zod'
import { EntityStackItem } from './EntityStackItem'

export const GridCell = z.object({
  item: EntityStackItem.optional(),
})
export type GridCell = EntityStackItem
