import { z } from 'zod'

export const Row = z.number()
export type Row = z.infer<typeof Row>

export const Col = z.number()
export type Col = z.infer<typeof Col>

export const CellCoordKey = z.string()
export type CellCoordKey = z.infer<typeof CellCoordKey>
