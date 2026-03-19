import dayjs from 'dayjs'
import { DATE_MONTH_DATE, DATE_YEAR_MONTH_DATE } from '../constant/date'

/**
 * 把时间戳格式化为 2020-10-01 格式
 *
 * @group Function
 * @category Format
 * @param timestamp 毫秒时间戳
 * @param format 格式，默认值为 DATE_YEAR_MONTH_DATE
 * @returns
 */
export function formatDate(timestamp: number, format = DATE_YEAR_MONTH_DATE) {
  return dayjs(timestamp).format(format)
}

/**
 * 把时间戳格式化为 2020-10-01 至 2020-10-02 形式
 *
 * @group Function
 * @category Format
 * @param startTimestamp 开始时间的毫秒时间戳
 * @param endTimestamp 结束时间的毫秒时间戳
 * @returns
 */
export function formatDateRange(startTimestamp: number, endTimestamp: number) {
  return formatDate(startTimestamp) + ' 至 ' + formatDate(endTimestamp)
}

/**
 * 把同年份的时间戳格式化为 10-01 格式，不同年份的时间戳格式化成 2020-10-01 格式
 *
 * @group Function
 * @category Format
 * @param timestamp 毫秒时间戳
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