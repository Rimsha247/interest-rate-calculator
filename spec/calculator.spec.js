const { calculate } = require('../src/calculator');

describe('calculate', function () {
  it('returns simple interest for typical values', function () {
    expect(calculate(1000, 10, 5)).toBe(500);
  });

  it('handles decimal rates', function () {
    expect(calculate(1000, 10.25, 5)).toBeCloseTo(512.5, 2);
  });

  it('returns 0 when the rate is 0', function () {
    expect(calculate(1000, 0, 5)).toBe(0);
  });

  it('accepts numeric strings (as read from form inputs)', function () {
    expect(calculate('2000', '5', '2')).toBe(200);
  });

  it('rejects a principal of zero or less', function () {
    expect(function () { calculate(0, 5, 2); }).toThrowError('Principal must be greater than zero.');
    expect(function () { calculate(-100, 5, 2); }).toThrowError('Principal must be greater than zero.');
  });

  it('rejects a rate outside 0-20', function () {
    expect(function () { calculate(1000, -1, 2); }).toThrowError('Rate must be between 0 and 20.');
    expect(function () { calculate(1000, 21, 2); }).toThrowError('Rate must be between 0 and 20.');
  });

  it('rejects years of zero or less', function () {
    expect(function () { calculate(1000, 5, 0); }).toThrowError('Years must be greater than zero.');
  });

  it('rejects non-numeric input', function () {
    expect(function () { calculate('abc', 5, 2); }).toThrowError('Principal, rate and years must be numbers.');
    expect(function () { calculate('', 5, 2); }).toThrowError();
  });
});
