import {
  startOfHour,
  endOfHour,
  startOfPrevHour,
  startOfNextHour,
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
  optimizeTimeRange,
} from '../../src/util/time'

import {
  formatDateTime,
} from '../../src/format/dateTime'

import { DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND } from '../../src/constant/dateTime'

test('time_hour', () => {

  let date = new Date('2020-10-10 10:01:01')

  expect(formatDateTime(startOfHour(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-10-10 10:00:00')
  expect(formatDateTime(startOfPrevHour(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-10-10 09:00:00')
  expect(formatDateTime(startOfNextHour(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-10-10 11:00:00')
  expect(formatDateTime(endOfHour(date.getTime()), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-10-10 10:59:59')

})

test('time_day', () => {

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

test('time_week', () => {

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

test('time_month', () => {

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


test('time_range_optimize', () => {

  let date = new Date('2025-02-10 10:01:01')

  // isHour

  let startTime = startOfDay(date.getTime())
  let endTime = endOfDay(date.getTime())
  let isHour = false
  let isDay = false
  let isWeek = false
  let isMonth = false
  let isRange = false

  optimizeTimeRange(
    startTime,
    endTime,
    {
      isHour(hour) {
        isHour = true
        expect(hour).toBe(startTime)
      },
      isDay(day) {
        isDay = true
      },
      isWeek(week) {
        isWeek = true
      },
      isMonth(month) {
        isMonth = true
      },
      isRange(start, end) {
        isRange = true
      }
    }
  )

  expect(isHour).toBe(true)
  expect(isDay).toBe(false)
  expect(isWeek).toBe(false)
  expect(isMonth).toBe(false)
  expect(isRange).toBe(false)

  // isHour 但是不传 isHour 函数

  startTime = startOfDay(date.getTime())
  endTime = endOfDay(date.getTime())
  isHour = false
  isDay = false
  isWeek = false
  isMonth = false
  isRange = false

  optimizeTimeRange(
    startTime,
    endTime,
    {
      isDay(day) {
        isDay = true
        expect(day).toBe(startTime)
      },
      isWeek(week) {
        isWeek = true
      },
      isMonth(month) {
        isMonth = true
      },
      isRange(start, end) {
        isRange = true
      }
    }
  )

  expect(isHour).toBe(false)
  expect(isDay).toBe(true)
  expect(isWeek).toBe(false)
  expect(isMonth).toBe(false)
  expect(isRange).toBe(false)

  // isDay 但是不传 isDay 函数

  startTime = startOfDay(date.getTime())
  endTime = endOfDay(date.getTime())
  isDay = false
  isWeek = false
  isMonth = false
  isRange = false

  optimizeTimeRange(
    startTime,
    endTime,
    {
      isWeek(week) {
        isWeek = true
      },
      isMonth(month) {
        isMonth = true
      },
      isRange(start, end) {
        isRange = true
        expect(start).toBe(startTime)
        expect(end).toBe(endTime)
      }
    }
  )

  expect(isDay).toBe(false)
  expect(isWeek).toBe(false)
  expect(isMonth).toBe(false)
  expect(isRange).toBe(true)

  // 截取日期中间的一段时间

  startTime = new Date('2025-10-10 10:00:00').getTime()
  endTime = new Date('2025-10-10 12:00:00').getTime()
  isHour = false
  isDay = false
  isWeek = false
  isMonth = false
  isRange = false

  optimizeTimeRange(
    startTime,
    endTime,
    {
      isDay(day) {
        isDay = true
      },
      isWeek(week) {
        isWeek = true
      },
      isMonth(month) {
        isMonth = true
      },
      isRange(start, end) {
        isRange = true
        expect(start).toBe(startTime)
        expect(end).toBe(endTime)
      }
    }
  )

  expect(isDay).toBe(false)
  expect(isWeek).toBe(false)
  expect(isMonth).toBe(false)
  expect(isRange).toBe(true)


  // 跨天

  startTime = startOfDay(new Date('2025-10-10 10:00:00').getTime())
  endTime = endOfDay(new Date('2025-10-12 12:00:00').getTime())
  isDay = false
  isWeek = false
  isMonth = false
  isRange = false

  optimizeTimeRange(
    startTime,
    endTime,
    {
      isDay(day) {
        isDay = true
      },
      isWeek(week) {
        isWeek = true
      },
      isMonth(month) {
        isMonth = true
      },
      isRange(start, end) {
        isRange = true
        expect(start).toBe(startTime)
        expect(end).toBe(endTime)
      }
    }
  )

  expect(isDay).toBe(false)
  expect(isWeek).toBe(false)
  expect(isMonth).toBe(false)
  expect(isRange).toBe(true)

  // isWeek

  startTime = startOfDay(new Date('2026-01-04 10:00:00').getTime())
  endTime = endOfDay(new Date('2026-01-10 12:00:00').getTime())
  isDay = false
  isWeek = false
  isMonth = false
  isRange = false

  optimizeTimeRange(
    startTime,
    endTime,
    {
      isDay(day) {
        isDay = true
      },
      isWeek(week) {
        isWeek = true
        expect(week).toBe(startTime)
      },
      isMonth(month) {
        isMonth = true
      },
      isRange(start, end) {
        isRange = true
      }
    }
  )

  expect(isDay).toBe(false)
  expect(isWeek).toBe(true)
  expect(isMonth).toBe(false)
  expect(isRange).toBe(false)


  // isMonth

  startTime = startOfDay(new Date('2026-01-01 10:00:00').getTime())
  endTime = endOfDay(new Date('2026-01-31 12:00:00').getTime())
  isDay = false
  isWeek = false
  isMonth = false
  isRange = false

  optimizeTimeRange(
    startTime,
    endTime,
    {
      isDay(day) {
        isDay = true
      },
      isWeek(week) {
        isWeek = true
      },
      isMonth(month) {
        isMonth = true
        expect(month).toBe(startTime)
      },
      isRange(start, end) {
        isRange = true
      }
    }
  )

  expect(isDay).toBe(false)
  expect(isWeek).toBe(false)
  expect(isMonth).toBe(true)
  expect(isRange).toBe(false)

})