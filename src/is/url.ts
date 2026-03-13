/**
 * 是否为 URL
 *
 * @group Function
 * @category Is
 * @param value 要校验的值
 * @returns 是否为 URL
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