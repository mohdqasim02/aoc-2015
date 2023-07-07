class LightBoardController {
  #lightBoard;

  constructor(lightBoard) {
    this.#lightBoard = lightBoard;
  }

  setUpLights([command, start, end]) {
    const validCommands = {
      on: (start, end) => this.#lightBoard.setLightsOn(start, end),
      off: (start, end) => this.#lightBoard.setLightsOff(start, end),
      toggle: (start, end) => this.#lightBoard.toggleLights(start, end),
    };

    const commandToAction = validCommands[command];
    commandToAction(start, end);
  }

  execute(instructions, mode) {
    const actions = {
      setup: (instructions) => this.setUpLights(instructions),
      adjust: (instructions) => this.adjustLights(instructions),
    }
    const actionToPerform = actions[mode];

    instructions.forEach(actionToPerform);
  }

  countLitLights() {
    return this.#lightBoard.board.flat()
      .filter(light => light.isLit).length;
  }
}

exports.LightBoardController = LightBoardController;