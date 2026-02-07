/**
 * 是否为 URL
 *
 * @param value
 * @returns
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