class Light {
  #isLit;

  constructor() {
    this.#isLit = false;
  }

  turnOn() {
    this.#isLit = true;
  }

  get isLit() {
    return this.#isLit;
  }
}

exports.Light = Light;