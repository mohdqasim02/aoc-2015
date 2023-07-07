class Light {
  #isLit;
  #brightness;

  constructor() {
    this.#isLit = false;
    this.#brightness = 0;
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

  incrementBrightness() {
    this.#brightness += 1;
  }

  decrementBrightness() {
    this.#brightness -= this.#brightness > 0 ? 1 : 0;
  }

  increaseBrightnessByTwo() {
    this.#brightness += 2;
  }

  get isLit() {
    return this.#isLit;
  }

  get brightness() {
    return this.#brightness;
  }
}

exports.Light = Light;