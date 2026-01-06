import { DATE_YEAR_MONTH_DATE_SLASH, DATE_YEAR_MONTH_DATE_CHINESE } from '../../src/constant/date'
import {
  formatDate,
  formatDateRange,
  formatDateShortly,
} from '../../src/format/date'

test('formatDate', () => {

  expect(formatDate(new Date('2020-11-11 00:00:00').getTime())).toBe('2020-11-11')
  expect(formatDate(new Date('2020-10-01 00:00:00').getTime())).toBe('2020-10-01')
  expect(formatDate(new Date('2020-01-10 00:00:00').getTime())).toBe('2020-01-10')
  expect(formatDate(new Date('2020-01-01 00:00:00').getTime())).toBe('2020-01-01')

  expect(formatDate(new Date('2020-11-11 00:00:00').getTime(), DATE_YEAR_MONTH_DATE_SLASH)).toBe('2020/11/11')
  expect(formatDate(new Date('2020-10-01 00:00:00').getTime(), DATE_YEAR_MONTH_DATE_SLASH)).toBe('2020/10/01')
  expect(formatDate(new Date('2020-01-10 00:00:00').getTime(), DATE_YEAR_MONTH_DATE_SLASH)).toBe('2020/01/10')
  expect(formatDate(new Date('2020-01-01 00:00:00').getTime(), DATE_YEAR_MONTH_DATE_SLASH)).toBe('2020/01/01')

  expect(formatDate(new Date('2020-11-11 00:00:00').getTime(), DATE_YEAR_MONTH_DATE_CHINESE)).toBe('2020年11月11日')
  expect(formatDate(new Date('2020-10-01 00:00:00').getTime(), DATE_YEAR_MONTH_DATE_CHINESE)).toBe('2020年10月1日')
  expect(formatDate(new Date('2020-01-10 00:00:00').getTime(), DATE_YEAR_MONTH_DATE_CHINESE)).toBe('2020年1月10日')
  expect(formatDate(new Date('2020-01-01 00:00:00').getTime(), DATE_YEAR_MONTH_DATE_CHINESE)).toBe('2020年1月1日')


  expect(formatDateShortly(new Date('2026-10-01 00:00:00').getTime())).toBe('10-01')
  expect(formatDateShortly(new Date('2020-10-01 00:00:00').getTime())).toBe('2020-10-01')

  expect(formatDateRange(
    new Date('2020-10-01 10:01:02').getTime(),
    new Date('2020-10-02 10:03:02').getTime()
  )).toBe('2020-10-01 至 2020-10-02')

})