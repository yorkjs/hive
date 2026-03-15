import { MONEY_YUAN_TO_PENNY } from '../constant/money'
import { moneyToDisplay } from '../convert/money'
import { shortNumber } from '../util/internal'
import { truncateNumber } from '../util/number'
import { formatNumberWithComma } from './number'

/**
 * 格式化金额（元），保留 2 位小数
 *
 * @group Function
 * @category Format
 * @param value 单位是分的金额
 * @returns 格式化后的字符串
 * @example
 * formatAmount(1000) // 10.00元
 * formatAmount(1000, '') // 10.00
 */
export function formatAmount(value: number, unit = '元') {
  return formatNumberWithComma(moneyToDisplay(value), 2) + unit
}

/**
 * 格式化金额（厘），保留 3 位小数
 *
 * @group Function
 * @category Format
 * @param value 单位是厘的金额
 * @returns 格式化后的字符串
 * @example
 * formatPenny(10000) // 10.000元
 * formatPenny(10000, '') // 10.000
 */
export function formatPenny(value: number, unit = '元') {
  return formatNumberWithComma(moneyToDisplay(value, MONEY_YUAN_TO_PENNY), 3) + unit
}

/**
 * 格式化金额（元），以较短的方式返回
 *
 * @group Function
 * @category Format
 * @param value 单位是分的金额
 * @returns 格式化后的字符串
 * @example
 * formatAmountShortly(10000000) // 10万元
 * formatAmountShortly(10000000, '') // 10万
 */
export function formatAmountShortly(value: number, unit = '元') {
  return shortNumber(
    moneyToDisplay(value),
    function (value: number) {
      return truncateNumber(value, 2)
    }
  ) + unit
}