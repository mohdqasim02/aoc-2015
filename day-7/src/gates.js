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

  leftShift(signal, places) {
    return signal << places;
  }

  rightShift(signal, places) {
    return signal >> places;
  }
}

exports.Gates = Gates;