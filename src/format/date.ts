import dayjs from 'dayjs'
import { DATE_MONTH_DATE, DATE_YEAR_MONTH_DATE } from '../constant/date'

/**
 * 把时间戳格式化为 2020-10-01 格式
 *
 * @param timestamp
 * @returns
 */
export function formatDate(timestamp: number) {
  return dayjs(timestamp).format(DATE_YEAR_MONTH_DATE)
}

/**
 * 把时间戳格式化为 2020-10-01 至 2020-10-02 形式
 *
 * @param timestamp
 * @returns
 */
export function formatDateRange(startTimestamp: number, endTimestamp: number) {
  return formatDate(startTimestamp) + ' 至 ' + formatDate(endTimestamp)
}

/**
 * 把同年份的时间戳格式化为 10-01 格式，不同年份的时间戳格式化成 2020-10-01 格式
 *
 * @param timestamp
 * @returns
 */
export function formatDateShortly(timestamp: number) {
  const t1 = dayjs(timestamp)
  const t2 = dayjs(Date.now())

  if (t1.year() === t2.year()) {
    return t1.format(DATE_MONTH_DATE)
  }
  return dayjs(timestamp).format(DATE_YEAR_MONTH_DATE)
}