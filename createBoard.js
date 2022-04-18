export const createBoard = (rows, cols) => {
  const matrix = []

  for (let row = 0; row < rows; row++) {
    const rowOfCells = []

    for (let col = 0; col < cols; col++) {
      const cell = Math.random() > 0.5 ? 1 : 0
      rowOfCells.push(cell)
    }

    matrix.push(rowOfCells)
  }

  return matrix
}