/**
 * 是否为邮箱
 *
 * @group Function
 * @category Is
 * @param value 要校验的值
 * @returns 是否为邮箱
 */
export function isEmail(value: string) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
}