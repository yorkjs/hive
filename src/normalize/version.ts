import { padStringStart } from '../util/string'

/**
 * 标准化版本号，方便后续进行比较
 *
 * @group Function
 * @category Normalize
 * @param version 版本号，比如 `1.2.3`，最多支持三段，每段的子版本号不超过 `9999`
 * @returns 标准化后的版本号，12 位长度
 * @example
 * normalizeVersion('1.0.10') > normalizeVersion('1.0.9') // true
 */
export function normalizeVersion(value: string) {
  const tokens = value.split('.')
  switch (tokens.length) {
    case 1:
      return padStringStart(tokens[0], 12)
    case 2:
      return padStringStart(tokens[0], 6) + padStringStart(tokens[1], 6)
    case 3:
      return padStringStart(tokens[0], 4) + padStringStart(tokens[1], 4) + padStringStart(tokens[2], 4)
  }
  return '000000000000'
}