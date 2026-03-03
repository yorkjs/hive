import { getStringLength } from '../util/string'

/**
 * 脱敏姓名
 *
 * @param name 姓名
 * @returns 脱敏后的姓名
 */
export function maskName(name: string) {
  const length = getStringLength(name)
  if (length <= 1) {
    return "***"
  }
  return "***" + name[length - 1]
}