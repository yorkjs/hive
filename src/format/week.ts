import { MS_DAY } from '../constant/millisecond'
import { formatDateShortly } from './date'

/**
 * 把时间戳格式化为 周开始 ~ 周结束 格式
 *
 * @param timestamp
 * @returns
 */
export function formatWeek(timestamp: number) {
  const date = new Date(timestamp)
  const offset = -1 * date.getDay()

  const startTimestamp = date.getTime() + offset * MS_DAY

  return formatDateShortly(startTimestamp) + ' ~ ' +  formatDateShortly(startTimestamp + 6 * MS_DAY)
}