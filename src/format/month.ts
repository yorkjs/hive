import dayjs from 'dayjs'
import { DATE_YEAR_MONTH } from '../constant/date'

/**
 * 把时间戳格式化为 2020-10 格式
 *
 * @param timestamp
 * @returns
 */
export function formatMonth(timestamp: number) {
  return dayjs(timestamp).format(DATE_YEAR_MONTH)
}