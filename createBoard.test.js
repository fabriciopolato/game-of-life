import { createBoard } from './createBoard.js';

it('returns a matrix with width and height based on the given columns and rows', () => {
  const rows = 8
  const cols = 8

  const matrix = createBoard(rows, cols)

  expect(matrix).toHaveLength(rows)

  matrix.forEach(row => {
    expect(row).toHaveLength(cols)
  })
})

it('has only 0 or 1 as cell value', () => {
  const rows = 8
  const cols = 8

  const matrix = createBoard(rows, cols)

  matrix.forEach(row => {
    row.forEach(cell => {
      expect(cell.toString()).toMatch(/^[01]$/)
    })
  })
})
