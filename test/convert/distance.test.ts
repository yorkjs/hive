import {
  distanceToDisplay,
  distanceToBackend,
} from '../../src/index'

test('distance_convert', () => {

  expect(distanceToDisplay(8000)).toBe(8)
  expect(distanceToDisplay(8800)).toBe(8.8)
  expect(distanceToDisplay(8880)).toBe(8.88)
  expect(distanceToDisplay(8888)).toBe(8.888)

  expect(distanceToBackend(8)).toBe(8000)
  expect(distanceToBackend(8.8)).toBe(8800)
  expect(distanceToBackend(8.88)).toBe(8880)
  expect(distanceToBackend(8.888)).toBe(8888)

})
