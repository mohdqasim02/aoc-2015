class Gates {
  assign(wire, signal) {
    wire.signal = signal;
  }

  and(wire1, wire2) {
    return wire1.signal & wire2.signal;
  }

  or(wire1, wire2) {
    return wire1.signal | wire2.signal;
  }

  complement(wire) {
    return 65535 - wire.signal;
  }

  leftShift(wire, places) {
    return wire.signal << places;
  }

  rightShift(wire, places) {
    return wire.signal >> places;
  }
}

exports.Gates = Gates;