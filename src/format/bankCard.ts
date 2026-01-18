/**
 * 格式化银行卡号
 *
 * @param value
 * @param masked 是否脱敏显示
 * @returns
 */
export function formatBankCardNumber(value: string, masked = true) {

  const { length } = value

  // 每4位一组，最后一组如果不足 4 位，有多少显示多少
  const parts: string[] = []
  for (let i = 0; i < length; i += 4) {
    parts.push(value.substring(i, Math.min(i + 4, length)))
  }

  if (masked) {
    for (let i = 0, len = parts.length; i < len - 1; i++) {
      parts[i] = '****'
    }
  }

  return parts.join(' ')

}