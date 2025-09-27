import {
  formatDateTime,
  formatDateTimeRange,
  formatDateTimeShortly,
} from '../../src/format/dateTime'

test('formatDateTime', () => {

  expect(formatDateTime(new Date('2020-10-01 10:01:02').getTime())).toBe('2020-10-01 10:01')
  expect(formatDateTimeShortly(new Date('2025-10-01 10:01:02').getTime())).toBe('10-01 10:01')
  expect(formatDateTimeShortly(new Date('2020-10-01 10:01:02').getTime())).toBe('2020-10-01 10:01')


  expect(formatDateTimeRange(
    new Date('2020-10-01 10:01:02').getTime(),
    new Date('2020-10-01 10:03:02').getTime()
  )).toBe('2020-10-01 10:01 至 2020-10-01 10:03')

})