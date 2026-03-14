/**
 * 是否为价格
 *
 * @group Function
 * @category Is
 * @param value 要校验的字符串
 * @returns 是否为价格
 * @example
 * isPrice('10.05') // true
 */
export function isPrice(value: string) {
  return /^(?:[1-9]\d*|0)(?:\.\d{1,2})?$/.test(value)
}