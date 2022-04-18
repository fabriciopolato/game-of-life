import { createBoard } from "./createBoard.js";
import { evolveToNextGeneration } from "./evolveToNextGeneration.js";

let actualGeneration = createBoard(8, 8)

let nextGeneration = evolveToNextGeneration(actualGeneration)
evolveToNextGeneration(nextGeneration)


