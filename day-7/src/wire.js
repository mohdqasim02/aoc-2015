class Wire {
  #name;
  #inputSignal;

  constructor(name, signal) {
    this.#name = name;
    this.#inputSignal = signal;
  }

  hasSignal() {
    return this.#inputSignal !== undefined;
  }

  set signal(signal) {
    this.#inputSignal = signal;
  }

  get name() {
    return this.#name;
  }

  get signal() {
    return this.#inputSignal;
  }
}

exports.Wire = Wire;