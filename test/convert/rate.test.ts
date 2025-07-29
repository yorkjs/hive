import {
  rateToDisplay,
  rateToBackend,
  calculateRate,
} from '../../src/convert/rate'

test('rate_convert', () => {

  expect(rateToDisplay(1015)).toBe(10.15)
  expect(rateToBackend(10.15)).toBe(1015)
  expect(calculateRate(10, 100)).toBe(1000)
  expect(calculateRate(5, 1)).toBe(50000)
  expect(calculateRate(5, 5)).toBe(10000)
  expect(calculateRate(5, 10)).toBe(5000)
  expect(calculateRate(5, 100)).toBe(500)
  expect(calculateRate(5, 1000)).toBe(50)
  expect(calculateRate(5, 10000)).toBe(5)

})
