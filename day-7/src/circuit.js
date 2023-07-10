const isNumber = (text) => typeof text === 'number';

class Circuit {
  #wires;
  #gates;

  constructor(gates) {
    this.#wires = {};
    this.#gates = gates;
  }

  #assign(wire, signal) {
    wire.signal = signal;
    this.#wires[wire.name] = wire;
  }

  #connect(gate, signals, destination) {
    if (gate === "ASSIGN") {
      this.#assign(destination, signals[0]);
      return;
    }

    const validGates = {
      OR: (signals) => this.#gates.or(...signals),
      AND: (signals) => this.#gates.and(...signals),
      NOT: (signals) => this.#gates.complement(...signals),
      LEFTSHIFT: (signals) => this.#gates.leftShift(...signals),
      RIGHTSHIFT: (signals) => this.#gates.rightShift(...signals),
    }
    const gateToConnect = validGates[gate];
    const signal = gateToConnect(signals);

    this.#assign(destination, signal);
  }

  #extractIO({ inputs, output }) {
    const signals = inputs.map(input => isNumber(input) ? input : input.signal);
    const destination = output;

    return { signals, destination };
  }

  #areSignalsInvalid(signals) {
    return signals.includes(undefined) || signals.length === 0;
  }

  add(component) {
    const { signals, destination } = this.#extractIO(component);

    if (this.#areSignalsInvalid(signals)) return false;
    this.#connect(component.operation, signals, destination);
    return true;
  }

  get wires() {
    return this.#wires;
  }
}

exports.Circuit = Circuit;