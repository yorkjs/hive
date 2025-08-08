import { MS_DAY, MS_WEEK } from '../constant/millisecond'

/**
* 获取某天的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export function startOfDay(timestamp: number) {
  const date = new Date(timestamp)
  date.setHours(0, 0, 0, 0)
  return date.getTime()
}

/**
* 获取前一天的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export function startOfPrevDay(timestamp: number) {
  return startOfDay(timestamp - MS_DAY)
}

/**
* 获取前一天的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export function startOfNextDay(timestamp: number) {
  return startOfDay(timestamp + MS_DAY)
}

/**
* 获取某天的结束时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export function endOfDay(timestamp: number) {
  const date = new Date(timestamp)
  date.setHours(23, 59, 59, 999)
  return date.getTime()
}

/**
* 获取某周的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export function startOfWeek(timestamp: number) {
  const date = new Date(timestamp)
  const day = date.getDay()

  const offset = (day < 0 ? 7 : 0) + day
  date.setDate(date.getDate() - offset)
  date.setHours(0, 0, 0, 0)

  return date.getTime()
}

/**
* 获取前一周的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export function startOfPrevWeek(timestamp: number) {
  return startOfWeek(timestamp - MS_WEEK)
}

/**
* 获取后一周的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export function startOfNextWeek(timestamp: number) {
  return startOfWeek(timestamp + MS_WEEK)
}

/**
* 获取某周的结束时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export function endOfWeek(timestamp: number) {
  const date = new Date(timestamp)
  const day = date.getDay()

  const offset = (day < 0 ? -7 : 0) + 6 - day
  date.setDate(date.getDate() + offset)
  date.setHours(23, 59, 59, 999)

  return date.getTime()
}

/**
* 获取某月的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export function startOfMonth(timestamp: number) {
  const date = new Date(timestamp)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date.getTime()
}

/**
* 获取前一月的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export function startOfPrevMonth(timestamp: number) {
  const date = new Date(timestamp)
  date.setDate(0) // 改成上个月最后一天
  date.setDate(1) // 改成 1 号
  date.setHours(0, 0, 0, 0)
  return date.getTime()
}

/**
* 获取下一月的开始时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export function startOfNextMonth(timestamp: number) {
  const date = new Date(timestamp)
  date.setMonth(date.getMonth() + 2, 0) // 改成下个月最后一天
  date.setDate(1)                       // 改成 1 号
  date.setHours(0, 0, 0, 0)
  return date.getTime()
}

/**
* 获取某月的结束时间
*
* @param timestamp 毫秒时间戳
* @returns
*/
export function endOfMonth(timestamp: number) {
  const date = new Date(timestamp)
  date.setMonth(date.getMonth() + 1, 0)
  date.setHours(23, 59, 59, 999)
  return date.getTime()
}