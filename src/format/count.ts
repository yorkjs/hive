import { shortNumber, } from '../util/number'
import { formatNumberWithComma } from './number'

/**
 * 格式化数量
 *
 * @group Function
 * @category Format
 * @param value
 * @returns
 */
export function formatCount(value: number, unit = '') {
  return formatNumberWithComma(value) + unit
}

/**
 * 格式化数量（以尽可能短的方式显示数量）
 *
 * @group Function
 * @category Format
 * @param value
 * @returns
 */
export function formatCountShortly(value: number, unit = '') {
  return shortNumber(
    value,
    function (value: number) {
      return value.toString()
    }
  ) + unit
}