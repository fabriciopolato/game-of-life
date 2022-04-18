import { createBoard } from "./createBoard.js";
import { evolveToNextGeneration } from "./evolveToNextGeneration.js";
import { render } from "./render.js";

let actualGeneration = createBoard(4, 4)
render(actualGeneration)

let nextGeneration = evolveToNextGeneration(actualGeneration)
render(nextGeneration)

evolveToNextGeneration(nextGeneration)
