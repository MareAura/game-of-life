# Game of Life Web App

App is available [here](https://mareaura.github.io/game-of-life/)

## Description

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. 
One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

The project is developed on **JavaScript** using the **React** library. 

## Rules

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively). 
Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## How to play

- Create any shape by clicking the cells on the field, so these cells will turn yellow and become alive;
- After pressing the Start button, generations begin to change automatically, but the speed can be adjusted using the corresponding slider;
- The game can be stopped at any time and the player can change the current configuration of the cells by clicking on them and making them alive or dead, after which the game can be started again;
- The Next button takes only one step in time;
- The Clear button resets the field.


## Running the project

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

* `npm install`

To Start Server:

* `npm start`

To Visit App:

* http://localhost:3000/