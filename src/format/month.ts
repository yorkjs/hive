import dayjs from 'dayjs'
import { MONTH_DEFAULT } from '../constant/month'

/**
 * 把时间戳格式化为 2020-10 格式
 *
 * @param timestamp
 * @returns
 */
export function formatMonth(timestamp: number) {
  return dayjs(timestamp).format(MONTH_DEFAULT)
}