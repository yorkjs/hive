import { normalizeShelfLife } from '../normalize/shelfLife'

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