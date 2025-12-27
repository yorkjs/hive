export function formatHourMinutes(value: number): string {

  const hours = Math.floor(value / 60)
  const minutes = value % 60

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`

}

// 营业时间时段范围为 [0, 2880] 可跨天, 0-1440 为当天，1440-2880 为次日
export function formatBusinessTimes(businessTimes: number[]): string {
  const len = businessTimes.length
  if (len === 0 || len % 2 !== 0) {
    return ''
  }

  const timeRanges: string[] = []
  for (let i = 0; i < len; i += 2) {
    const start = businessTimes[i]
    const end = businessTimes[i + 1]
    const startTime = start % 1440
    const endTime = end % 1440

    // 判断是否是全天
    if (startTime === 0 && endTime === 0 && end > start) {
      timeRanges.push('全天')
      continue
    }

    let startTimeStr = formatHourMinutes(startTime)
    if (start > 1440) {
      startTimeStr = `次日${startTimeStr}`
    }

    let endTimeStr = formatHourMinutes(endTime)
    if (end > 1440) {
      endTimeStr = `次日${endTimeStr}`
    }

    timeRanges.push(`${startTimeStr}-${endTimeStr}`)
  }

  return timeRanges.join('、')
}