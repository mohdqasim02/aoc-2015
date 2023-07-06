const { Light } = require("./light");

const newArrayOf = (size) => new Array(size).fill();
const arrayOf1000Lights = () => newArrayOf(1000).map(() => new Light());

class LightBoard {
  #board;

  constructor() {
    this.#board = this.#generateGridOfLights();
  }

  #generateGridOfLights() {
    return newArrayOf(1000).map(arrayOf1000Lights);
  }

  turnOn({ x, y }) {
    const light = this.#board[x][y];
    light.setLit();
  }

  turnOff({ x, y }) {
    const light = this.#board[x][y];
    light.setUnlit();
  }

  toggle({ x, y }) {
    const light = this.#board[x][y];
    light.toggle();
  }

  isLitAt({ x, y }) {
    const light = this.#board[x][y];
    return light.isLit;
  }

  get board() {
    return this.#board;
  }
}

exports.LightBoard = LightBoard;