import { hasDecimal, timesNumber, divideNumber } from '../util/number'

/**
 * 万分比 转换为 百分比
 *
 * @group Function
 * @category Convert
 * @param value 后端的比例值
 * @returns
 */
export function rateToDisplay(value: number) {
  const result = divideNumber(value, 100)
  // 如果小数部分为 0，返回整数部分
  return hasDecimal(result) ? result : Math.floor(result)
}

/**
 * 百分比 转换为 万分比
 *
 * @group Function
 * @category Convert
 * @param value 前端的比例值
 * @returns
 */
export function rateToBackend(value: number) {
  return Math.floor(timesNumber(value, 100))
}
