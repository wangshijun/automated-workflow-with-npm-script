const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  return NaN;
};

module.exports = { add  };
