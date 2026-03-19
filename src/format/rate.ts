import { rateToDisplay } from '../convert/rate'

/**
 * 把万分比格式化为百分比
 *
 * @group Function
 * @category Format
 * @param value 万分比
 * @returns 格式化后的百分比字符串
 * @example
 * formatRatePercent(8000) // 80%
 * formatRatePercent(8800) // 88%
 */
export function formatRatePercent(value: number) {
  return rateToDisplay(value) + '%'
}
