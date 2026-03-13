/**
 * 是否为邮箱
 *
 * @group Function
 * @category Is
 * @param value 邮箱
 * @returns 是否为邮箱
 * @example
 * isEmail('test@example.com') // true
 */
export function isEmail(value: string) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
}