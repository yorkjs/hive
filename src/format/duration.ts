import { normalizeDuration } from '../normalize/duration'

/**
 * 格式化时长
 *
 * @group Function
 * @category Format
 * @param value 时长，单位是毫秒
 * @returns 格式化后的字符串
 * @example
 * formatDuration(1000) // 1秒
 * formatDuration(60000) // 1分钟
 * formatDuration(3600000) // 1小时
 */
export function formatDuration(value: number) {

  const result: string[] = []

  const data = normalizeDuration(value)
  if (data.days > 0) {
    result.push(`${data.days}天`)
  }
  if (data.hours > 0) {
    result.push(`${data.hours}小时`)
  }
  if (data.minutes > 0) {
    result.push(`${data.minutes}分钟`)
  }
  if (data.seconds > 0) {
    result.push(`${data.seconds}秒`)
  }

  return result.join('')
}