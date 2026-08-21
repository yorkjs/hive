import {
  formatMinuteSegments,
} from '../../src/format/minuteSegments'

test('formatMinuteSegments', () => {
  expect(formatMinuteSegments([])).toBe('')
  expect(formatMinuteSegments([0])).toBe('')
  expect(formatMinuteSegments([0, 1440])).toBe('全天')
  expect(formatMinuteSegments([0, 1440, 1440, 2880])).toBe('全天、全天')
  expect(formatMinuteSegments([540, 960, 1200, 1560])).toBe('09:00-16:00、20:00-次日02:00')
  expect(formatMinuteSegments([540, 960, 1200, 1560], '+')).toBe('09:00-16:00+20:00-次日02:00')
})