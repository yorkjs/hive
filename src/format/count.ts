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