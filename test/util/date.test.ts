import {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfPrevDay,
  startOfNextDay,
  startOfPrevWeek,
  startOfNextWeek,
  startOfPrevMonth,
  startOfNextMonth,
} from '../../src/util/date'

import {
  formatDateTime,
} from '../../src/format/dateTime'

import { DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND } from '../../src/constant/dateTime'

test('date_day', () => {

  let date = new Date('2020-10-10 10:01:01')

  expect(formatDateTime(startOfDay(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-10-10 00:00:00')
  expect(formatDateTime(startOfPrevDay(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-10-09 00:00:00')
  expect(formatDateTime(startOfNextDay(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-10-11 00:00:00')
  expect(formatDateTime(endOfDay(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-10-10 23:59:59')

  date = new Date('2020-04-01 10:01:01')
  expect(formatDateTime(startOfPrevDay(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-03-31 00:00:00')
  expect(formatDateTime(startOfNextDay(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-04-02 00:00:00')

  date = new Date('2020-01-01 10:01:01')
  expect(formatDateTime(startOfPrevDay(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2019-12-31 00:00:00')
  expect(formatDateTime(startOfNextDay(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-01-02 00:00:00')

  date = new Date('2024-03-01 10:01:01')
  expect(formatDateTime(startOfPrevDay(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2024-02-29 00:00:00')
  expect(formatDateTime(startOfNextDay(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2024-03-02 00:00:00')

  date = new Date('2025-03-01 10:01:01')
  expect(formatDateTime(startOfPrevDay(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-02-28 00:00:00')
  expect(formatDateTime(startOfNextDay(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-03-02 00:00:00')

})

test('date_week', () => {

  let date = new Date('2025-07-27 10:01:01')

  expect(formatDateTime(startOfWeek(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-07-27 00:00:00')
  expect(formatDateTime(startOfPrevWeek(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-07-20 00:00:00')
  expect(formatDateTime(startOfNextWeek(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-08-03 00:00:00')
  expect(formatDateTime(endOfWeek(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-08-02 23:59:59')

  date = new Date('2025-07-29 10:01:01')

  expect(formatDateTime(startOfWeek(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-07-27 00:00:00')
  expect(formatDateTime(endOfWeek(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-08-02 23:59:59')

  date = new Date('2025-08-01 10:01:01')

  expect(formatDateTime(startOfWeek(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-07-27 00:00:00')
  expect(formatDateTime(endOfWeek(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-08-02 23:59:59')

  date = new Date('2025-08-02 10:01:01')

  expect(formatDateTime(startOfWeek(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-07-27 00:00:00')
  expect(formatDateTime(endOfWeek(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-08-02 23:59:59')

})

test('date_month', () => {

  let date = new Date('2025-02-10 10:01:01')

  expect(formatDateTime(startOfMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-02-01 00:00:00')
  expect(formatDateTime(startOfPrevMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-01-01 00:00:00')
  expect(formatDateTime(startOfNextMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-03-01 00:00:00')
  expect(formatDateTime(endOfMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-02-28 23:59:59')

  date = new Date('2025-06-29 10:01:01')

  expect(formatDateTime(startOfMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-06-01 00:00:00')
  expect(formatDateTime(startOfPrevMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-05-01 00:00:00')
  expect(formatDateTime(startOfNextMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-07-01 00:00:00')
  expect(formatDateTime(endOfMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-06-30 23:59:59')

  date = new Date('2025-07-29 10:01:01')

  expect(formatDateTime(startOfMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-07-01 00:00:00')
  expect(formatDateTime(startOfPrevMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-06-01 00:00:00')
  expect(formatDateTime(startOfNextMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-08-01 00:00:00')
  expect(formatDateTime(endOfMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-07-31 23:59:59')

  date = new Date('2025-12-19 10:01:01')

  expect(formatDateTime(startOfMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-12-01 00:00:00')
  expect(formatDateTime(startOfPrevMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-11-01 00:00:00')
  expect(formatDateTime(startOfNextMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2026-01-01 00:00:00')
  expect(formatDateTime(endOfMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-12-31 23:59:59')

  date = new Date('2025-04-19 10:01:01')

  expect(formatDateTime(startOfMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-04-01 00:00:00')
  expect(formatDateTime(startOfPrevMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-03-01 00:00:00')
  expect(formatDateTime(startOfNextMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-05-01 00:00:00')
  expect(formatDateTime(endOfMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-04-30 23:59:59')

  date = new Date('2025-01-19 10:01:01')

  expect(formatDateTime(startOfMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-01-01 00:00:00')
  expect(formatDateTime(startOfPrevMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2024-12-01 00:00:00')
  expect(formatDateTime(startOfNextMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-02-01 00:00:00')
  expect(formatDateTime(endOfMonth(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2025-01-31 23:59:59')

})