import { isInteger } from '../is/number'
import { divideNumber, truncateNumber } from '../util/number'
import { formatNumberWithComma } from './number'

/**
 * 格式化数量
 *
 * @param value
 * @returns
 */
export function formatCount(value: number, unit = '') {
  return formatNumberWithComma(value) + unit
}

/**
 * 格式化数量（以尽可能短的方式显示数量）
 *
 * @param value
 * @returns
 */
export function formatCountShortly(value: number, unit = '') {
  if (value >= 1000000000000) {
    const trillion = value / 1000000000000
    return truncateNumber(trillion, isInteger(trillion) ? 0 : 1) + '万亿' + unit
  }
  if (value >= 100000000) {
    const billion = divideNumber(value, 100000000)
    return truncateNumber(billion, isInteger(billion) ? 0 : 1) + '亿' + unit
  }
  if (value >= 10000) {
    const tenThousand = divideNumber(value, 10000)
    return truncateNumber(tenThousand, isInteger(tenThousand) ? 0 : 1) + '万' + unit
  }
  return value + unit
}