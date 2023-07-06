class LightBoardController {
  #lightBoard;

  constructor(lightBoard) {
    this.#lightBoard = lightBoard;
  }

  #getBoardArea(start, end) {
    const { rowEnd, colEnd } = end;
    const { rowStart, colStart } = start;

    return this.#lightBoard.board.slice(rowStart, rowEnd + 1)
      .flatMap(lights => lights.slice(colStart, colEnd + 1));
  }

  isBoardAreaLit(start, end) {
    const boardArea = this.#getBoardArea(start, end);

    return boardArea.every(light => light.isLit);
  }

  isBoardAreaUnlit(start, end) {
    const boardArea = this.#getBoardArea(start, end);

    return boardArea.every(light => !light.isLit);
  }

  fudge([command, start, end]) {
    const validCommands = {
      on: (light) => light.setLit(),
      off: (light) => light.setUnlit(),
      toggle: (light) => light.toggle()
    };
    const boardArea = this.#getBoardArea(start, end);
    const commandToAction = validCommands[command];

    boardArea.forEach(commandToAction);
  }
}

exports.LightBoardController = LightBoardController;