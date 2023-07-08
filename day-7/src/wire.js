class Wire {
  #name;
  #inputSignal;

  constructor(name) {
    this.#name = name;
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