const isNumber = (text) => typeof text === 'number';

class Circuit {
  #wires;
  #gates;

  constructor(gates) {
    this.#wires = {};
    this.#gates = gates;
  }

  #addWire(wire) {
    this.#wires[wire.name] = wire;
  }

  #assign(wire, signal) {
    wire.signal = signal;
    this.#addWire(wire);
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

  #getWireSignal(wire) {
    if (!this.#wires[wire.name]) this.#addWire(wire);
    return this.#wires[wire.name].signal;
  }

  #extractIO({ inputs, output }) {
    const signals = inputs.map(input => {
      return isNumber(input) ? input : this.#getWireSignal(input);
    });

    return { signals, destination: output };
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
}

exports.Circuit = Circuit;