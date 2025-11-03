import { MONEY_YUAN_TO_PENNY } from '../constant/money'
import { moneyToDisplay } from '../convert/money'
import { formatNumberWithComma } from './number'

/**
 * 格式化金额（元），保留 2 位小数
 *
 * @param value
 * @returns
 */
export function formatAmount(value: number, unit = '元') {
  return formatNumberWithComma(moneyToDisplay(value), 2) + unit
}

/**
 * 格式化金额（厘），保留 2 位小数
 *
 * @param value
 * @returns
 */
export function formatPenny(value: number, unit = '元') {
  return formatNumberWithComma(moneyToDisplay(value, MONEY_YUAN_TO_PENNY), 3) + unit
}