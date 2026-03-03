/**
 * 是否为整数
 *
 * @param value 要校验的值
 * @returns 是否为整数
 */
export function isInteger(value: number) {
  return value % 1 === 0
}