import dayjs from 'dayjs'
import { DATE_YEAR_MONTH_DATE_HOUR_MINUTE } from '../constant/dateTime'

/**
 * 把时间戳格式化为 2020-10-01 10:00:00 格式
 *
 * @param timestamp
 * @param format 默认是 年月日 时分秒 格式
 * @returns
 */
export function formatDateTime(timestamp: number, format = DATE_YEAR_MONTH_DATE_HOUR_MINUTE) {
  return dayjs(timestamp).format(format)
}
