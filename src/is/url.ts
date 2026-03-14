/**
 * 是否为 URL，仅支持 http、https 协议
 *
 * @group Function
 * @category Is
 * @param value 要校验的字符串
 * @returns 是否为 URL
 * @example
 * isUrl('http://www.baidu.com') // true
 * isUrl('https://www.baidu.com') // true
 * isUrl('www.baidu.com') // false
 */
export function isUrl(value: string) {
  try {
    const url = new URL(value)
    // 不用支持 ftp，太少见了
    return ['http:', 'https:'].includes(url.protocol)
  }
  catch {
    return false
  }
}