import {
  isLocationInChina
} from '../../src/index'

test('isLocationInChina', () => {

  expect(isLocationInChina(116.4074, 39.9042)).toBe(true)
  expect(isLocationInChina(121.4874, 31.2242)).toBe(true)
  expect(isLocationInChina(160.4874, 31.2242)).toBe(false)
  expect(isLocationInChina(121.4874, 80)).toBe(false)
  expect(isLocationInChina(0, 0)).toBe(false)
  expect(isLocationInChina(-120, -30)).toBe(false)

})
