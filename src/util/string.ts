/**
 * 获取字符串字符数量
 *
 * 注意：中文和英文都算 1 个字符
 *
 * @param str 目标字符串
 * @returns 字符串字符数量
 */
export function getStringLength(str: string) {
  return str.length
}

/**
 * 获取字符串宽度，此函数常用于排版辅助计算
 *
 * 注意：中文算 2 个单位，英文数字算 1 个单位
 *
 * @param str 目标字符串
 * @returns 字符串宽度
 */
export function getStringWidth(str: string) {
  if (!str) {
    return 0
  }

  // 匹配所有宽字符（中文字符、全角标点等）
  const wideCharRegex = /[^\x00-\xff]|[｡-ﾟ]/g
  const wideMatches = str.match(wideCharRegex)

  // 宽字符数量
  const wideCount = wideMatches ? wideMatches.length : 0
  // 窄字符数量
  const narrowCount = str.length - wideCount

  return wideCount * 2 + narrowCount
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
 * 判断字符串是否包含特殊字符
 *
 * @param str 目标字符串
 * @returns 是否包含特殊字符
 */
export function hasSpecialCharacters(str: string) {
  if (!str) {
    return false
  }

  // 正则表达式说明：
  // ^ 表示取反
  // \u4e00-\u9fa5 匹配所有中文字符
  // a-zA-Z 匹配所有英文字母
  // 0-9 匹配所有数字
  // 后面的字符是允许的常见标点符号
  const allowedPattern = /[^a-zA-Z0-9\u4e00-\u9fa5 ，。！？；：""''()（）\[\]【】、·.,!?;:\-_']/gu;

  return allowedPattern.test(str)
}

/**
 * 移除字符串中的特殊字符
 *
 * @param str 目标字符串
 * @returns 清理后的字符串
 */
export function removeSpecialCharacters(str: string) {
  if (!str) {
    return ''
  }

  const allowedPattern = /[^a-zA-Z0-9\u4e00-\u9fa5 ，。！？；：""''()（）\[\]【】、·.,!?;:\-_']/gu;
  return trimString(str.replace(allowedPattern, ''))
}