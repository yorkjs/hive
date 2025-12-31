import { DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH } from '../../src/constant/dateTime'
import {
  formatDateTime,
  formatDateTimeRange,
  formatDateTimeShortly,
} from '../../src/format/dateTime'

test('formatDateTime', () => {

  expect(formatDateTime(new Date('2020-11-11 10:01:02').getTime())).toBe('2020-11-11 10:01')
  expect(formatDateTime(new Date('2020-10-01 01:01:02').getTime())).toBe('2020-10-01 01:01')
  expect(formatDateTime(new Date('2020-01-10 10:10:02').getTime())).toBe('2020-01-10 10:10')
  expect(formatDateTime(new Date('2020-01-01 10:10:02').getTime())).toBe('2020-01-01 10:10')

  expect(formatDateTime(new Date('2020-11-11 10:01:02').getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH)).toBe('2020/11/11 10:01')
  expect(formatDateTime(new Date('2020-10-01 01:01:02').getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH)).toBe('2020/10/01 01:01')
  expect(formatDateTime(new Date('2020-01-10 10:10:02').getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH)).toBe('2020/01/10 10:10')
  expect(formatDateTime(new Date('2020-01-01 10:10:02').getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH)).toBe('2020/01/01 10:10')

  expect(formatDateTime(new Date('2020-11-11 10:01:02').getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE)).toBe('2020年11月11日 10:01')
  expect(formatDateTime(new Date('2020-10-01 01:01:02').getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE)).toBe('2020年10月1日 01:01')
  expect(formatDateTime(new Date('2020-01-10 10:10:02').getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE)).toBe('2020年1月10日 10:10')
  expect(formatDateTime(new Date('2020-01-01 10:10:02').getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE)).toBe('2020年1月1日 10:10')

  expect(formatDateTimeShortly(new Date('2025-10-01 10:01:02').getTime())).toBe('10-01 10:01')
  expect(formatDateTimeShortly(new Date('2020-10-01 10:01:02').getTime())).toBe('2020-10-01 10:01')


  expect(formatDateTimeRange(
    new Date('2020-10-01 10:01:02').getTime(),
    new Date('2020-10-01 10:03:02').getTime()
  )).toBe('2020-10-01 10:01 至 2020-10-01 10:03')

})