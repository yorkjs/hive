import { truncateNumber } from '../util/number'

/**
 * 把数字的整数部分格式化为以千为段拆分，以逗号为分隔符
 *
 * @param value
 * @param decimals
 * @returns
 */
export function formatNumberWithComma(value: number, decimals = 0) {

  const newValue = decimals >= 0
    ? truncateNumber(value, decimals)
    : value.toString()

  let [integerPart, decimalPart] = newValue.split('.')

  // 格式化整数部分

  const list: string[] = [ ]
  const end = integerPart.length - 1
  for (let i = end; i >= 0; i--) {
    if (i !== end && (end - i) % 3 === 0) {
      list.push(',')
    }
    list.push(integerPart.charAt(i))
  }

  let result = list.reverse().join('')

  // 处理小数部分
  if (decimalPart) {
    if (decimals > 0) {
      decimalPart = decimalPart.padEnd(decimals, '0')
      if (decimalPart.length > decimals) {
        decimalPart = decimalPart.slice(0, decimals)
      }
      result += `.${decimalPart}`
    }
  }
  else if (decimals > 0) {
    result += `.${''.padEnd(decimals, '0')}`
  }

  return result

}