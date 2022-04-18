# Game of Life
## Exercise
Write some code that evolves generations through the
"game of life".
The input will be a game board of cells, either alive (1) or dead
(0).
The code should take this board and create a new board for the next
generation based on the following rules:
0) A cell has up to eight neighbors (top, topright, right, bottomright, bottom,
bottomleft, left, topleft) 1) Any live cell with fewer than two live neighbours
dies (under-population) 2) Any live cell with two or three live neighbours lives
on to the next generation (survival) 3) Any live cell with more than three live
neighbours dies (overcrowding) 4) Any dead cell with exactly three live
neighbours becomes a live cell (reproduction)

## Getting Started

<!-- PLACEHOLDER FOR PROJECT OVERVIEW -->

### Prerequisites

In order to run this project locally you will need to:

- Clone and install this repository

### Installation

1. Install NPM packages

```sh
npm install
```

2. Run the app

```sh
npm start
```
