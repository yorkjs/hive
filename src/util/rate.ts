import { timesNumber, divideNumber } from './number'

/**
 * 计算万分比
 *
 * value1 / value2 得到一个比例，然后转成万分比返回
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
 * 根据万分比计算数值
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