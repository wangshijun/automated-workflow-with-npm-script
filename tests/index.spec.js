const expect = require('chai').expect;
const { add } = require('../index');

describe('hello-npm-script', () => {
  describe('#add', () => {
    it('should return sum when param are numbers', () => {
      expect(add(0, 1)).to.equal(1);
      expect(add(0, 2)).to.equal(2);
      expect(add(-1, 1)).to.equal(0);
    });

    it('should return NaN when param invalid', () => {
      expect(isNaN(add(0, undefined))).to.equal(true);
      expect(isNaN(add(null, undefined))).to.equal(true);
      expect(isNaN(add({}, undefined))).to.equal(true);
    })
  });
});

