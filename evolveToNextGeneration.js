export const evolveToNextGeneration = (actualGeneration) => {
  const numberOfRows = actualGeneration.length
  const numberOfCols = actualGeneration[0].length

  const nextGeneration = []

  for (let row = 0; row < numberOfRows; row++) {
    const newRow = []

    for (let col = 0; col < numberOfCols; col++) {
      const actualRow = actualGeneration[row]
      const cell = actualRow[col]
      let newCell = cell

      let topRow = actualGeneration[row - 1]
      if (!topRow) {
        topRow = actualGeneration[numberOfRows - 1]
      }

      let bottomRow = actualGeneration[row + 1]
      if (!bottomRow) {
        bottomRow = actualGeneration[0]
      }

      let left = col - 1
      if (!left) {
        left = numberOfCols - 1
      }

      let right = col + 1
      if (!right) {
        right = 0
      }

      const topNeighbour = topRow[col]
      const bottomNeighbour = bottomRow[col]
      const leftNeighbour = actualRow[left]
      const rightNeighbour = actualRow[right]

      const topLeftNeighbour = topRow[left]
      const topRightNeighbour = topRow[right]
      const bottomLeftNeighbour = bottomRow[left]
      const bottomRightNeighbour = bottomRow[right]

      const neighbours = [
        topNeighbour,
        bottomNeighbour,
        leftNeighbour,
        rightNeighbour,
        topLeftNeighbour,
        topRightNeighbour,
        bottomLeftNeighbour,
        bottomRightNeighbour,
      ]

      const liveNeighbours = neighbours.filter(elem => elem === 1).length

      // #1 rule: Any live cell with fewer than two live neighbours dies (under-population)
      const hasUnderPopulation = liveNeighbours < 2
      if (hasUnderPopulation) {
        newCell = 0
      }

      // #2 rule: Any live cell with two or three live neighbours lives on to the next generation (survival)
      // const hasSurvived = liveNeighbours === 2 || liveNeighbours === 3
      // if (cell === 1 && hasSurvived) {
      //   newCell = 1
      // }

      // #3 rule: Any live cell with more than three live neighbours dies (overcrowding)
      const isOvercrowded = liveNeighbours > 3
      if (isOvercrowded) {
        newCell = 0
      }

      // #4 rule: Any dead cell with exactly three live neighbours becomes a live cell (reproduction)
      const hasReproduction = liveNeighbours === 3
      if (hasReproduction) {
        newCell = 1
      }

      newRow.push(newCell)
    }

    nextGeneration.push(newRow)
  }

  return nextGeneration
}