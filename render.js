export const render = (matrix) => {
  const rows = matrix.length
  const prettierMatrix = []

  for (let i = 0; i < rows; i++) {
    const stringRow = matrix[i].join('')
    prettierMatrix.push(stringRow)
  }

  console.log(prettierMatrix)
}