import {
  formatDistance,
} from '../../src/format/distance'

test('formatDistance', () => {

  expect(formatDistance(8000)).toBe('8公里')
  expect(formatDistance(8800)).toBe('8.8公里')
  expect(formatDistance(8880)).toBe('8.88公里')
  expect(formatDistance(8888)).toBe('8.888公里')

})