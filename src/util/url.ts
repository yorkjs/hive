/**
 * 编码 URI 组件
 *
 * @param str 要编码的字符串
 * @returns 编码后的字符串
 */
export function encodeUriComponent(str: string) {
  return encodeURIComponent(str)
}

/**
 * 解码 URI 组件
 *
 * @param str 要解码的字符串
 * @returns 解码后的字符串
 */
export function decodeUriComponent(str: string) {
  return decodeURIComponent(str)
}

const httpProtocolPattern = /^https?:\/\//i

/**
 * 标准化 URL：确保包含协议部分
 *
 * @param url 要标准化的 URL
 * @returns 标准化后的 URL
 */
export function normalizeUrl(url: string) {
  if (!url) {
    return ''
  }
  if (httpProtocolPattern.test(url)) {
    return url
  }
  if (url.startsWith('//')) {
    return `https:${url}`
  }
  return `https://${url}`
}

/**
 * 将 URL 转换为协议相对路径（以 // 开头）
 *
 * @param url 要转换的 URL
 * @returns 协议相对路径
 */
export function toProtocolRelativeUrl(url: string) {
  if (!url) {
    return ''
  }
  if (httpProtocolPattern.test(url)) {
    return url.replace(httpProtocolPattern, '//')
  }
  if (!url.startsWith('//')) {
    return `//${url}`
  }
  return url
}