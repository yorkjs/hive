import { normalizeShelfLife } from '../normalize/shelfLife'

/**
 * 格式化有效期
 *
 * @group Function
 * @category Format
 * @param value 有效期，单位是小时
 * @returns 格式化后的字符串
 * @example
 * formatShelfLife(24) // 1天
 * formatShelfLife(48) // 2天
 * formatShelfLife(365 * 24) // 1年
 */
export function formatShelfLife(value: number) {
  const result: string[] = []

  const data = normalizeShelfLife(value)
  if (data.years > 0) {
    result.push(`${data.years}年`)
  }
  if (data.months > 0) {
    result.push(`${data.months}个月`)
  }
  if (data.days > 0) {
    result.push(`${data.days}天`)
  }
  if (data.hours > 0) {
    result.push(`${data.hours}小时`)
  }

  return result.join('')
}