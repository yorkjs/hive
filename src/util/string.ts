/**
 * 获取字符串长度
 *
 * 注意：中文算 1 个字符
 *
 * @param str 要截断的字符串
 * @returns 字符串长度
 */
export function getStringLength(str: string) {
  return str.length
}

/**
 * 移除字符串开头和结尾的空白符
 *
 * @param str 要截断的字符串
 * @returns 移除空白符后的字符串
 */
export function trimString(str: string) {
  return str.trim()
}

/**
 * 截取字符串
 *
 * @param str 要截断的字符串
 * @param start 开始索引
 * @param end 结束索引
 * @returns 截取后的字符串
 */
export function sliceString(str: string, start: number, end: number) {
  return str.slice(start, end)
}

/**
 * 截断字符串，最多显示 maxLength 个字符，超过部分用省略号表示
 *
 * @param str 要截断的字符串
 * @param maxLength 最大长度
 * @returns 截断后的字符串
 */
export function truncateString(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str
  }

  if (maxLength <= 3) {
    return str.slice(0, maxLength)
  }

  return str.slice(0, maxLength - 3) + '...'
}

/**
 * 渲染字符串模板
 *
 * @param str 字符串模板，例如：'你好，${name}'
 * @param data 数据对象，例如：{ name: '张三' }
 * @returns 渲染后的字符串，例如：'你好，张三'
 */
export function renderStringTemplate(str: string, data: Record<string, any>) {
  return str.replace(/\${(.*?)}/g, function (match: string, key: string) {
    // 去除变量名两端的空白
    const value = data[trimString(key)]
    // 如果找不到对应的值，返回原字符串
    return value !== undefined ? String(value) : match
  })
}

/**
 * 补全字符串开头，不足 length 个字符用 0 填充
 *
 * @param str 要补全的字符串
 * @param length 目标长度
 * @returns 补全后的字符串
 */
export function padStringStart(str: string, length: number) {
  return str.padStart(length, '0')
}

/**
 * 编码 URI 组件
 *
 * @param str 要编码的字符串
 * @returns 编码后的字符串
 */
export function encodeURIComponent(str: string) {
  return global.encodeURIComponent(str)
}

/**
 * 解码 URI 组件
 *
 * @param str 要解码的字符串
 * @returns 解码后的字符串
 */
export function decodeURIComponent(str: string) {
  return global.decodeURIComponent(str)
}