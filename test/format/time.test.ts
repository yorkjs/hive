import {
  formatBusinessTimes,
  formatHourMinutes,
} from '../../src/format/time'

test('formatHourMinutes', () => {
  expect(formatHourMinutes(0)).toBe('00:00')
  expect(formatHourMinutes(1)).toBe('00:01')
  expect(formatHourMinutes(59)).toBe('00:59')
  expect(formatHourMinutes(60)).toBe('01:00')
  expect(formatHourMinutes(119)).toBe('01:59')
  expect(formatHourMinutes(120)).toBe('02:00')
  expect(formatHourMinutes(1439)).toBe('23:59')
  expect(formatHourMinutes(1440)).toBe('24:00')
  expect(formatHourMinutes(2881)).toBe('48:01')
})

test('formatBusinessTimes', () => {
  expect(formatBusinessTimes([])).toBe('')
  expect(formatBusinessTimes([0, 1440])).toBe('全天')
  expect(formatBusinessTimes([0, 1440, 1440, 2880])).toBe('全天、全天')
  expect(formatBusinessTimes([540, 960, 1200, 1560])).toBe('每日 09:00-16:00、每日 20:00-次日 02:00')
})