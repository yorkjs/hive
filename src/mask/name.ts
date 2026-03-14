import { getStringLength } from '../util/string'

/**
 * 脱敏姓名
 *
 * @group Function
 * @category Mask
 * @param name 姓名
 * @returns 脱敏后的姓名
 * @example
 * maskName('张三') // '***三'
 */
export function maskName(name: string) {
  const length = getStringLength(name)
  if (length <= 1) {
    return "***"
  }
  return "***" + name[length - 1]
}