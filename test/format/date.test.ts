import {
  formatDate,
  formatDateRange,
  formatDateShortly,
} from '../../src/format/date'

test('formatDate', () => {

  expect(formatDate(new Date('2020-10-01 00:00:00').getTime())).toBe('2020-10-01')
  expect(formatDateShortly(new Date('2025-10-01 00:00:00').getTime())).toBe('10-01')
  expect(formatDateShortly(new Date('2020-10-01 00:00:00').getTime())).toBe('2020-10-01')

  expect(formatDateRange(
    new Date('2020-10-01 10:01:02').getTime(),
    new Date('2020-10-02 10:03:02').getTime()
  )).toBe('2020-10-01 至 2020-10-02')

})