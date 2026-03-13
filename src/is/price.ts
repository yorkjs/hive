/**
 * 是否为价格
 *
 * @group Function
 * @category Is
 * @param value 要校验的值
 * @returns 是否为价格
 */
export function isPrice(value: string) {
  return /^(?:[1-9]\d*|0)(?:\.\d{1,2})?$/.test(value)
}