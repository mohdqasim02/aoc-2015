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

  #getBoardArea(start, end) {
    const { rowEnd, colEnd } = end;
    const { rowStart, colStart } = start;

    return this.#board.slice(rowStart, rowEnd + 1)
      .flatMap(lights => lights.slice(colStart, colEnd + 1));
  }

  setLightsOn(start, end) {
    const lights = this.#getBoardArea(start, end);
    lights.forEach(light => light.setLit());
  }

  setLightsOff(start, end) {
    const lights = this.#getBoardArea(start, end);
    lights.forEach(light => light.setUnlit());
  }

  toggleLights(start, end) {
    const lights = this.#getBoardArea(start, end);
    lights.forEach(light => light.toggle());
  }

  get board() {
    return this.#board.map(row => row.map(light => {
      return {
        isLit: light.isLit,
        brightness: light.brightness,
      };
    }));
  }
}

exports.LightBoard = LightBoard;