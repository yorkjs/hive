/**
 * 是否为价格
 *
 * @param value
 * @returns
 */
export function isPrice(value: string) {
  return /^(?:[1-9]\d*|0)(?:\.\d{1,2})?$/.test(value)
}