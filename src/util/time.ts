import { MS_HOUR, MS_DAY, MS_WEEK } from '../constant/millisecond'

/**
 * 获取某个小时开始时间
 *
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export function startOfHour(timestamp: number) {
  const date = new Date(timestamp)
  date.setMinutes(0, 0, 0)
  return date.getTime()
}

/**
 * 获取前一个小时开始时间
 *
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export function startOfPrevHour(timestamp: number) {
  return startOfHour(timestamp - MS_HOUR)
}

/**
 * 获取下个小时开始时间
 *
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export function startOfNextHour(timestamp: number) {
  return startOfHour(timestamp + MS_HOUR)
}

/**
 * 获取某个小时结束时间
 *
 * @param timestamp 毫秒时间戳
 * @returns 毫秒时间戳
 */
export function endOfHour(timestamp: number) {
  const date = new Date(timestamp)
  date.setMinutes(59, 59, 999)
  return date.getTime()
}

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

interface ITimeRangeOptimizer {
  isHour?: (hour: number) => void
  isDay?: (day: number) => void
  isWeek?: (week: number) => void
  isMonth?: (month: number) => void
  isRange: (start: number, end: number) => void
}

/**
* 优化时间范围，尽量归一到某个类型下，无法归一时，才用范围
*
* @param startTimestamp 开始毫秒时间戳
* @param endTimestamp 结束毫秒时间戳
* @param optimizer 优化器，优先走 day/week/month 分支
* @returns
*/
export function optimizeTimeRange(startTimestamp: number, endTimestamp: number, optimizer: ITimeRangeOptimizer) {

  const startHour = startOfHour(startTimestamp)
  const endHour = endOfHour(startTimestamp)

  const startDay = startOfDay(startTimestamp)
  const endDay = endOfDay(startTimestamp)

  const startWeek = startOfWeek(startTimestamp)
  const endWeek = endOfWeek(startTimestamp)

  const startMonth = startOfMonth(startTimestamp)
  const endMonth = endOfMonth(startTimestamp)

  if (startTimestamp === startHour && endTimestamp === endHour && optimizer.isHour) {
    optimizer.isHour(startTimestamp)
  }
  else if (startTimestamp === startDay && endTimestamp === endDay && optimizer.isDay) {
    optimizer.isDay(startTimestamp)
  }
  else if (startTimestamp === startWeek && endTimestamp == endWeek && optimizer.isWeek) {
    optimizer.isWeek(startTimestamp)
  }
  else if (startTimestamp === startMonth && endTimestamp == endMonth && optimizer.isMonth) {
    optimizer.isMonth(startTimestamp)
  }
  else {
    optimizer.isRange(startTimestamp, endTimestamp)
  }

}