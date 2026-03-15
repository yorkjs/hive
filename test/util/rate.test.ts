import {
  calculateRate,
  applyRateFloor,
  applyRateCeil,
  applyRateRound,
} from '../../src/index'

test('rate_util', () => {

  expect(calculateRate(10, 100)).toBe(1000)
  expect(calculateRate(5, 1)).toBe(50000)
  expect(calculateRate(5, 5)).toBe(10000)
  expect(calculateRate(5, 10)).toBe(5000)
  expect(calculateRate(5, 100)).toBe(500)
  expect(calculateRate(5, 1000)).toBe(50)
  expect(calculateRate(5, 10000)).toBe(5)

  expect(applyRateFloor(1000, 0)).toBe(0)
  expect(applyRateFloor(1000, 1000)).toBe(100)
  expect(applyRateFloor(1000, 10000)).toBe(1000)
  expect(applyRateFloor(1000, 245)).toBe(24)

  expect(applyRateCeil(1000, 0)).toBe(0)
  expect(applyRateCeil(1000, 1000)).toBe(100)
  expect(applyRateCeil(1000, 10000)).toBe(1000)
  expect(applyRateCeil(1000, 245)).toBe(25)

  expect(applyRateRound(1000, 0)).toBe(0)
  expect(applyRateRound(1000, 1000)).toBe(100)
  expect(applyRateRound(1000, 10000)).toBe(1000)
  expect(applyRateRound(1000, 245)).toBe(25)
  expect(applyRateRound(1000, 244)).toBe(24)

})
