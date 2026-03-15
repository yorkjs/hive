/**
 * 编码 URI 组件，内部使用原生 encodeURIComponent 实现
 *
 * > 设计此函数的目的是为了在 hive-dart、hive-go 中对齐相同的函数
 *
 * @group Function
 * @category Util
 * @param str 要编码的字符串
 * @returns 编码后的字符串
 */
export function encodeUriComponent(str: string) {
  return encodeURIComponent(str)
}

/**
 * 解码 URI 组件，内部使用原生 decodeURIComponent 实现
 *
 * > 设计此函数的目的是为了在 hive-dart、hive-go 中对齐相同的函数
 *
 * @group Function
 * @category Util
 * @param str 要解码的字符串
 * @returns 解码后的字符串
 */
export function decodeUriComponent(str: string) {
  return decodeURIComponent(str)
}

const httpProtocolPattern = /^https?:\/\//i

/**
 * 把 URL 转成 http 协议，优先使用 https 协议
 *
 * @group Function
 * @category Util
 * @param url 要标准化的 URL
 * @returns 加上 http 协议的 URL
 * @example
 * toHttpProtocolUrl('www.baidu.com') // 'https://www.baidu.com'
 * toHttpProtocolUrl('//www.baidu.com') // 'https://www.baidu.com'
 * toHttpProtocolUrl('http://www.baidu.com') // 'http://www.baidu.com'
 * toHttpProtocolUrl('https://www.baidu.com') // 'https://www.baidu.com'
 */
export function toHttpProtocolUrl(url: string) {
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
 * 将 URL 转换为相对协议（以 // 开头）
 *
 * @group Function
 * @category Util
 * @param url 要转换的 URL
 * @returns 协议相对路径
 * @example
 * toRelativeProtocolUrl('http://www.baidu.com') // '//www.baidu.com'
 * toRelativeProtocolUrl('https://www.baidu.com') // '//www.baidu.com'
 * toRelativeProtocolUrl('www.baidu.com') // '//www.baidu.com'
 */
export function toRelativeProtocolUrl(url: string) {
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