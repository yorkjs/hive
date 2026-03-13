import { padStringStart } from '../util/string'

/**
 * 标准化版本号，方便后续进行比较
 *
 * @group Function
 * @category Normalize
 * @param {string} version 如 '1.2.3'，最多支持三段，每段的子版本号不超过 9999
 * @returns 标准化后的版本号，12 位长度
 */
export function normalizeVersion(version: string) {
  const tokens = version && version.split('.')
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