class Gates {
  and(signal1, signal2) {
    return signal1 & signal2;
  }

  or(signal1, signal2) {
    return signal1 | signal2;
  }

  complement(signal) {
    return 65535 - signal;
  }

  leftShift(signal, bits) {
    return signal << bits;
  }

  rightShift(signal, bits) {
    return signal >> bits;
  }
}

exports.Gates = Gates;