import { MS_DAY, MS_HOUR, MS_MINUTE, MS_SECOND } from '../constant/millisecond'

interface IDuration {
  days: number
  hours: number
  minutes: number
  seconds: number
}

/**
 * 标准化时长
 *
 * @group Function
 * @category Normalize
 * @param value 时长，单位是毫秒
 * @returns 结构化的时长，包含天、小时、分钟、秒信息
 * @example
 * normalizeDuration(1000) // { days: 0, hours: 0, minutes: 0, seconds: 1 }
 */
export function normalizeDuration(value: number): IDuration {

  const result: IDuration = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  if (value <= 0) {
    return result
  }

  const seconds = Math.ceil(value / MS_SECOND)
  const minutes = Math.floor(value / MS_MINUTE)
  const hours = Math.floor(value / MS_HOUR)
  const days = Math.floor(value / MS_DAY)

  if (days > 0) {
    result.days = days
  }
  if (hours % 24 > 0) {
    result.hours = hours % 24
  }
  if (minutes % 60 > 0) {
    result.minutes = minutes % 60
  }
  if (seconds % 60 > 0) {
    result.seconds = seconds % 60
  }
  return result
}