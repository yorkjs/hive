import { DATE_YEAR_MONTH_DATE, DATE_YEAR_MONTH_DATE_DOT, DATE_YEAR_MONTH_DATE_SLASH } from '../../src/constant/date'
import { DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_DOT, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_DOT, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH } from '../../src/constant/dateTime'
import {
  stringToTime,
  timeFieldToTime,
  timeToTimeField,
  timeToTimestamp,
  timestampToTime,
} from '../../src/convert/time'
import { formatDateTime } from '../../src/format/dateTime'

test('time_convert', () => {

  const date = new Date()
  const timestamp = date.getTime()

  const timeField = timeToTimeField(date)
  const convertedTime = timeFieldToTime(timeField)
  expect(timeToTimestamp(convertedTime)).toBe(timestamp)

  expect(timeToTimestamp(date)).toBe(timestamp)
  expect(timestampToTime(timestamp).getTime()).toBe(timestamp)

  expect(timeToTimestamp(new Date('-'))).toBe(0)
  expect(timeToTimestamp(timestampToTime(0))).toBe(0)


  let time = stringToTime('2020-10-01 10:00:00', DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)
  expect(formatDateTime((time as Date).getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-10-01 10:00:00')

  time = stringToTime('2020-10-01 10:00', DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE)
  expect(formatDateTime((time as Date).getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE)).toBe('2020-10-01 10:00')

  time = stringToTime('2020-10-01', DATE_YEAR_MONTH_DATE)
  expect(formatDateTime((time as Date).getTime(), DATE_YEAR_MONTH_DATE)).toBe('2020-10-01')

  time = stringToTime('2020.10.01 10:00:00', DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_DOT)
  expect(formatDateTime((time as Date).getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-10-01 10:00:00')

  time = stringToTime('2020.10.01 10:00', DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_DOT)
  expect(formatDateTime((time as Date).getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE)).toBe('2020-10-01 10:00')

  time = stringToTime('2020.10.01', DATE_YEAR_MONTH_DATE_DOT)
  expect(formatDateTime((time as Date).getTime(), DATE_YEAR_MONTH_DATE)).toBe('2020-10-01')

  time = stringToTime('2020/10/01 10:00:00', DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH)
  expect(formatDateTime((time as Date).getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND)).toBe('2020-10-01 10:00:00')

  time = stringToTime('2020/10/01 10:00', DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH)
  expect(formatDateTime((time as Date).getTime(), DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE)).toBe('2020-10-01 10:00')

  time = stringToTime('2020/10/01', DATE_YEAR_MONTH_DATE_SLASH)
  expect(formatDateTime((time as Date).getTime(), DATE_YEAR_MONTH_DATE)).toBe('2020-10-01')


})
