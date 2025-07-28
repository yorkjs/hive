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