import { divideNumber } from '../util/calculator'

/**
 * 把单位为 分 的金额转成显示友好的格式
 *
 * @param value
 * @param maxDecimals
 * @returns
 */
export function formatMoney(value: number, maxDecimals = 2) {

  // 转成 元 为单位
  const newValue = divideNumber(value, 100)

  const parts = ('' + newValue).split('.')

  let list: string[] = [ ], end = parts[0].length - 1
  for (let i = end; i >= 0; i--) {
    if (i !== end && (end - i) % 3 === 0) {
      list.push(',')
    }
    list.push(parts[0].charAt(i))
  }

  let money = list.reverse().join('')
  let decimal = parts[1]
  if (decimal) {
    if (maxDecimals > 0) {
      decimal = decimal.padEnd(maxDecimals, '0')

      if (decimal.length > maxDecimals) {
        decimal = decimal.slice(0, maxDecimals)
      }
    }
  }
  else if (maxDecimals > 0) {
    decimal = ''.padEnd(maxDecimals, '0')
  }
  if (decimal) {
    money += '.' + decimal
  }

  return money

}