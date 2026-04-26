import {
  formatBusinessTimes,
} from '../../src/format/businessTimes'

test('formatBusinessTimes', () => {
  expect(formatBusinessTimes([])).toBe('')
  expect(formatBusinessTimes([0])).toBe('')
  expect(formatBusinessTimes([0, 1440])).toBe('全天')
  expect(formatBusinessTimes([0, 1440, 1440, 2880])).toBe('全天、全天')
  expect(formatBusinessTimes([540, 960, 1200, 1560])).toBe('09:00-16:00、20:00-次日02:00')
})