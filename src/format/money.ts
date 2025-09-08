import { moneyToDisplay } from '../convert/money'
import { formatNumberWithComma } from './number'

/**
 * 格式化金额，保留 2 位小数
 *
 * @param value
 * @returns
 */
export function formatAmount(value: number, unit = '元') {
  return formatNumberWithComma(moneyToDisplay(value), 2) + unit
}