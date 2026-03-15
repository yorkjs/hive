import { timesNumber, divideNumber, hasDecimal } from '../util/number'

/**
 * 米 转换为 千米
 *
 * @group Function
 * @category Convert
 * @param value 后端的比例值
 * @returns
 */
export function distanceToDisplay(value: number) {
  const result = divideNumber(value, 1000)
  // 如果小数部分为 0，返回整数部分
  return hasDecimal(result) ? result : Math.floor(result)
}

/**
 * 千米 转换为 米
 *
 * @group Function
 * @category Convert
 * @param value 前端的比例值
 * @returns
 */
export function distanceToBackend(value: number) {
  return Math.floor(timesNumber(value, 1000))
}
