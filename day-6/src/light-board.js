const { Light } = require("./light");

const newArrayOf = (size) => new Array(size).fill();
const arrayOf1000Lights = () => newArrayOf(1000).map(() => new Light());

class LightBoard {
  #lightBoard;

  constructor() {
    this.#lightBoard = this.#generateGridOfLights();
  }

  #generateGridOfLights() {
    return newArrayOf(1000).map(arrayOf1000Lights);
  }

  turnOn({ x, y }) {
    const light = this.#lightBoard[x][y];
    light.setLit();
  }

  turnOff({ x, y }) {
    const light = this.#lightBoard[x][y];
    light.setUnlit();
  }

  toggle({ x, y }) {
    const light = this.#lightBoard[x][y];
    light.toggle();
  }

  isLitAt({ x, y }) {
    const light = this.#lightBoard[x][y];
    return light.isLit;
  }
}

exports.LightBoard = LightBoard;