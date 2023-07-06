class Light {
  #isLit;

  constructor() {
    this.#isLit = false;
  }

  setLit() {
    this.#isLit = true;
  }

  setUnlit() {
    this.#isLit = false;
  }

  toggle() {
    this.#isLit = !this.#isLit;
  }

  get isLit() {
    return this.#isLit;
  }
}

exports.Light = Light;