import { SIZE_GB, SIZE_KB, SIZE_MB } from '../constant/size'
import { hasDecimal, divideNumber, truncateNumber } from '../util/number'

/**
 * 格式化文件大小
 *
 * @group Function
 * @category Format
 * @param value 文件大小，单位是字节
 * @returns 格式化后的字符串
 * @example
 * formatSize(1024) // 1KB
 * formatSize(1024 * 1024) // 1MB
 * formatSize(1024 * 1024 * 1024) // 1GB
 */
export function formatSize(value: number) {
  if (value >= SIZE_GB) {
    const result = divideNumber(value, SIZE_GB)
    return `${truncateNumber(result, hasDecimal(result) ? 2 : 0)}GB`
  }
  else if (value >= SIZE_MB) {
    const result = divideNumber(value, SIZE_MB)
    return `${truncateNumber(result, hasDecimal(result) ? 2 : 0)}MB`
  }
  else if (value >= SIZE_KB) {
    const result = divideNumber(value, SIZE_KB)
    return `${truncateNumber(result, hasDecimal(result) ? 2 : 0)}KB`
  }
  return `${value}B`
}