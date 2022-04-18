import { render } from "./render.js"

export const createBoard = (rows, cols) => {
  const matrix = []

  for (let row = 0; row < rows; row++) {
    const arrayOfCells = []

    for (let col = 0; col < cols; col++) {
      const cell = Math.random() > 0.5 ? 1 : 0
      arrayOfCells.push(cell)
    }

    matrix.push(arrayOfCells)
  }

  render(matrix)

  return matrix
}