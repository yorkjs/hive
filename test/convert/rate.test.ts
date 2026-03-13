import {
  rateToDisplay,
  rateToBackend,
} from '../../src/index'

test('rate_convert', () => {

  expect(rateToDisplay(1015)).toBe(10.15)
  expect(rateToBackend(10.15)).toBe(1015)

})
