
/**
 * 标准化版本号，方便后续进行比较
 *
 * @param {string} version 如 '1.2.3'，最多支持三段，每段的子版本号不超过 9999
 * @returns 标准化后的版本号，12 位长度
 */
export function normalizeVersion(version: string) {
  const tokens = version && version.split('.')
  switch (tokens.length) {
    case 1:
      return tokens[0].padStart(12, '0')
    case 2:
      return tokens[0].padStart(6, '0') + tokens[1].padStart(6, '0')
    case 3:
      return tokens[0].padStart(4, '0') + tokens[1].padStart(4, '0') + tokens[2].padStart(4, '0')
  }
  return '000000000000'
}