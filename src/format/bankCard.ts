

/**
 * 格式化银行卡号
 *
 * @param value
 * @returns
 */
export function formatBankCardNumber(value: string) {

  const { length } = value

  // 每4位一组，最后一组如果不足 4 位，有多少显示多少
  const parts: string[] = []
  for (let i = 0; i < length; i += 4) {
    parts.push(value.substring(i, Math.min(i + 4, length)))
  }

  return parts.join(' ')

}