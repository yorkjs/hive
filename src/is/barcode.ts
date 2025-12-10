/**
 * value 是否是标准商品条形码
 *
 * @param value 条形码文本
 * @returns
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
 * value 是否是自定义商品条形码
 *
 * @param value 条形码文本
 * @returns
 */
export function isCustomBarcode(value: string) {
  // 自定义条码，规则为 大写字母开头跟 10-12 个数字
  if (/^[A-Z]\d{10,12}$/.test(value)) {
    return true
  }
  // 这里留给以后加其他规则
  return false
}