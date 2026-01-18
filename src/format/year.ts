import dayjs from 'dayjs'
import { YEAR_DEFAULT } from '../constant/year'

/**
 * 把时间戳格式化为 2020 格式
 *
 * @param timestamp
 * @returns
 */
export function formatYear(timestamp: number) {
  return dayjs(timestamp).format(YEAR_DEFAULT)
}