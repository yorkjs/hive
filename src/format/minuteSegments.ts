import { padStringStart } from '../util/string'

function formatMinuteSegment(value: number): string {

  const hours = Math.floor(value / 60)
  const minutes = value % 60

  return `${padStringStart(hours.toString(), 2)}:${padStringStart(minutes.toString(), 2)}`

}

/**
 * 格式化分钟段
 *
 * @group Function
 * @category Format
 * @param value 分钟段范围为 [0, 2880] 可跨天, 0-1440 为当日，1440-2880 为次日
 * @param separator 分隔符，默认是 、
 * @returns 格式化后的字符串
 * @example
 * formatMinuteSegments([0, 1440]) // 全天
 */
export function formatMinuteSegments(value: number[], separator = '、'): string {
  const len = value.length
  if (len === 0 || len % 2 !== 0) {
    return ''
  }

  const timeRanges: string[] = []
  for (let i = 0; i < len; i += 2) {
    const start = value[i]
    const end = value[i + 1]
    const startTime = start % 1440
    const endTime = end % 1440

    // 判断是否是全天
    if (startTime === 0 && endTime === 0 && end > start) {
      timeRanges.push('全天')
      continue
    }

    let startTimeStr = formatMinuteSegment(startTime)
    if (start > 1440) {
      startTimeStr = `次日${startTimeStr}`
    }

    let endTimeStr = formatMinuteSegment(endTime)
    if (end > 1440) {
      endTimeStr = `次日${endTimeStr}`
    }

    timeRanges.push(`${startTimeStr}-${endTimeStr}`)
  }

  return timeRanges.join(separator)
}