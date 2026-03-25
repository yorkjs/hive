/**
 * 是否是标准商品条形码
 *
 * @group Function
 * @category Is
 * @param value 要校验的字符串
 * @returns 是否是标准商品条形码
 * @example
 * isStandardBarcode('6901234567890') // true
 */
export function isStandardBarcode(value: string) {
  // EAN 码：通常是69开头，13位数字
  // UPC 码：通常以0开头，12位数字
  const length = value.length
  if (length === 8 || length === 12 || length === 13 || length === 14) {
    return /^\d+$/.test(value)
  }
  return false
}

/**
 * 是否是自定义商品条形码
 *
 * @group Function
 * @category Is
 * @param value 要校验的字符串
 * @returns 是否是自定义商品条形码
 * @example
 * isCustomBarcode('6901234567890') // false
 */
export function isCustomBarcode(value: string) {
  // 自定义条码，规则为 大写字母开头跟 10-12 个数字
  if (/^[A-Z]\d{10,12}$/.test(value)) {
    return true
  }
  // 这里留给以后加其他规则
  return false
}