import {
  calculateRate,
  applyRate,
} from '../../src/index'

test('rate_convert', () => {

  expect(calculateRate(10, 100)).toBe(1000)
  expect(calculateRate(5, 1)).toBe(50000)
  expect(calculateRate(5, 5)).toBe(10000)
  expect(calculateRate(5, 10)).toBe(5000)
  expect(calculateRate(5, 100)).toBe(500)
  expect(calculateRate(5, 1000)).toBe(50)
  expect(calculateRate(5, 10000)).toBe(5)
  expect(applyRate(1000, 0)).toBe(0)
  expect(applyRate(1000, 1000)).toBe(100)
  expect(applyRate(1000, 10000)).toBe(1000)
  expect(applyRate(1000, 245)).toBe(24)

})
