import type { CellCoordKey, Col, Row } from '$store/RowCol_CellCoordKey'

export const cellKeyToCoord = (key: CellCoordKey): [Row, Col] =>
  key.split(/x/).map(Number) as [number, number]

export const coordToCellKey = (r: Row, c: Col): CellCoordKey => `${r}x${c}`
