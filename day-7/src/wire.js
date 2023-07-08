class Wire {
  #name;
  #inputSignal;

  constructor(name, inputSignal) {
    this.#name = name;
    this.#inputSignal = inputSignal;
  }

  get name() {
    return this.#name;
  }

  get signal() {
    return this.#inputSignal;
  }
}

exports.Wire = Wire;