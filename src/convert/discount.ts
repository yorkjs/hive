import { hasDecimal, divideNumber, timesNumber, truncateNumber } from '../util/number'

/**
 * 万分比 转换为 折扣，最多保留 1 位小数
 *
 * @group Function
 * @category Convert
 * @param value 后端的比例值
 * @returns
 */
export function discountToDisplay(value: number) {
  const result = divideNumber(value, 1000)
  // 如果小数部分为 0，返回整数部分
  // 如果有小数，保留 1 位小数
  return hasDecimal(result)
    ? +truncateNumber(result, 1)
    : Math.floor(result)
}

/**
 * 折扣 转换为 万分比
 *
 * @group Function
 * @category Convert
 * @param value 前端的比例值
 * @returns
 */
export function discountToBackend(value: number) {
  return Math.floor(
    timesNumber(
      hasDecimal(value)
        ? +truncateNumber(value, 1)
        : value,
      1000
    )
  )
}