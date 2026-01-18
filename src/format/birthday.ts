import dayjs from 'dayjs'
import { DATE_MONTH_DATE_DOT } from '../constant/date'

/**
 * 把时间戳格式化为 10.01 格式
 *
 * @param timestamp
 * @returns
 */
export function formatBirthday(timestamp: number) {
  return dayjs(timestamp).format(DATE_MONTH_DATE_DOT)
}