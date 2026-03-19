import { MS_DAY } from '../constant/millisecond'
import { formatDateShortly } from './date'

/**
 * 把时间戳格式化为 周开始 ~ 周结束 格式
 *
 * @group Function
 * @category Format
 * @param value 毫秒时间戳
 * @returns
 */
export function formatWeek(value: number) {
  const date = new Date(value)
  const offset = -1 * date.getDay()
  const startTimestamp = value + offset * MS_DAY
  return `${formatDateShortly(startTimestamp)} 至 ${formatDateShortly(startTimestamp + 6 * MS_DAY)}`
}