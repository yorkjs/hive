import { isInteger } from '../is/number'
import { timesNumber, divideNumber } from '../util/number'

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
  return isInteger(result) ? Math.floor(result) : result
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

/**
 * 计算万分比，即 value1 / value2 得到一个万分比
 *
 * @group Function
 * @category Convert
 * @param value1 除数
 * @param value2 被除数
 * @returns 万分比比例
 */
export function calculateRate(value1: number, value2: number) {
  if (!value2) {
    return 0
  }
  // 如果小数部分为 0，返回整数部分
  return Math.floor(
    divideNumber(timesNumber(value1, 10000), value2)
  )
}

/**
 * 根据万分比比例计算数值
 *
 * @group Function
 * @category Convert
 * @param value - 原始数值
 * @param rate - 万分比比例
 * @returns 计算后的数值，仅返回整数部分
 */
export function applyRate(value: number, rate: number) {
	return Math.floor(
    divideNumber(
      timesNumber(value, rate),
      10000
    )
  )
}