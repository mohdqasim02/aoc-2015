const { Light } = require("./light");

const createGridOfLights = (rows, columns) => {
  return new Array(rows).fill().map(_ => new Array(columns)
    .fill().map(_ => new Light()));
};

class LightBoard {
  #board;

  constructor(grid) {
    this.#board = grid;
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

  brightenLights(start, end) {
    const lights = this.#getBoardArea(start, end);
    lights.forEach(light => light.incrementBrightness());
  }

  darkenLights(start, end) {
    const lights = this.#getBoardArea(start, end);
    lights.forEach(light => light.decrementBrightness());
  }

  brightenLightsTwice(start, end) {
    const lights = this.#getBoardArea(start, end);
    lights.forEach(light => light.increaseBrightnessByTwo());
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

module.exports = { LightBoard, createGridOfLights };