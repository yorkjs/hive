import { timesNumber, divideNumber } from './number'

/**
 * 计算万分比
 *
 * 通过 value1 除以 value2 得到一个比例，然后转成万分比
 *
 * > 万分比的意思是，10000 为 100%，需注意不含小数
 *
 * @group Function
 * @category Util
 * @param value1 除数
 * @param value2 被除数
 * @returns 万分比
 * @example
 * calculateRate(100, 100) // 10000
 * calculateRate(10, 100) // 1000
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
 * 根据万分比计算数值
 *
 * 通过 value 乘以 rate 得到一个数值
 *
 * @group Function
 * @category Util
 * @param value - 原始数值
 * @param rate - 万分比
 * @returns 计算后的数值，如果包含小数，仅返回整数部分
 * @example
 * applyRate(100, 1000) // 10，等价于百分比运算 100 * 0.1 = 10
 */
export function applyRate(value: number, rate: number) {
  return Math.floor(
    divideNumber(
      timesNumber(value, rate),
      10000
    )
  )
}