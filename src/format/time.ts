import { isEmpty } from "../is/empty"
import { chunk } from "../util/array"

export function formatHourMinutes(value: number): string {

  const hours = Math.floor(value / 60)
  const minutes = value % 60

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`

}

// 营业时间时段范围为 [0, 2880] 可跨天, 0-1440 为当天，1440-2880 为次日
export function formatBusinessTimes(businessTimes: number[]): string {
  if (isEmpty(businessTimes)) {
    return ''
  }

  const timeRanges = chunk(businessTimes, 2).map(item => {
    const startTime = item[0] % 1440
    const endTime = item[1] % 1440

    // 判断是否是全天
    if (startTime === 0 && endTime === 0 && item[1] > item[0]) {
      return '全天'
    }

    let startTimeStr = formatHourMinutes(startTime)
    if (item[0] > 1440) {
      startTimeStr = `次日 ${startTimeStr}`
    }
    else {
      startTimeStr = `每日 ${startTimeStr}`
    }

    let endTimeStr = formatHourMinutes(endTime)
    if (item[1] > 1440) {
      endTimeStr = `次日 ${endTimeStr}`
    }

    return `${startTimeStr}-${endTimeStr}`
  })

  return timeRanges.join('、')
}