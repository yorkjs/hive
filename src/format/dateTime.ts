import dayjs from 'dayjs'
import { DATE_TIME_MONTH_DATE_HOUR_MINUTE, DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE } from '../constant/dateTime'

/**
 * 把时间戳格式化为 2020-10-01 10:00 格式
 *
 * @param timestamp
 * @param format
 * @returns
 */
export function formatDateTime(timestamp: number, format = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE) {
  return dayjs(timestamp).format(format)
}

/**
 * 把同年份的时间戳格式化为 10-01 10:00 格式，不同年份的时间戳格式化成 2020-10-01 10:00 格式
 *
 * @param timestamp
 * @returns
 */
export function formatDateTimeShortly(timestamp: number) {
  const t1 = dayjs(timestamp)
  const t2 = dayjs(Date.now())

  if (t1.year() === t2.year()) {
    return t1.format(DATE_TIME_MONTH_DATE_HOUR_MINUTE)
  }
  return dayjs(timestamp).format(DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE)
}