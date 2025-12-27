/**
 * 是否为邮箱
 *
 * @param value
 * @returns
 */
export function isEmail(value: string) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
}