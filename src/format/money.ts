import { MONEY_YUAN_TO_PENNY } from '../constant/money'
import { moneyToDisplay } from '../convert/money'
import { shortNumber, truncateNumber, } from '../util/number'
import { formatNumberWithComma } from './number'

/**
 * 格式化金额（元），保留 2 位小数
 *
 * @group Function
 * @category Format
 * @param value
 * @example
 * const amount = formatAmount(1000, '元'),
 * print(amount) // 输出：10元
 * @returns
 */
export function formatAmount(value: number, unit = '元') {
  return formatNumberWithComma(moneyToDisplay(value), 2) + unit
}

/**
 * 格式化金额（厘），保留 3 位小数
 *
 * @group Function
 * @category Format
 * @param value
 * @returns
 */
export function formatPenny(value: number, unit = '元') {
  return formatNumberWithComma(moneyToDisplay(value, MONEY_YUAN_TO_PENNY), 3) + unit
}

/**
 * 格式化金额（元），以较短的方式返回
 *
 * @group Function
 * @category Format
 * @param value
 * @returns
 */
export function formatAmountShortly(value: number, unit = '元') {
  return shortNumber(
    moneyToDisplay(value),
    function (value: number) {
      return truncateNumber(value, 2)
    }
  ) + unit
}