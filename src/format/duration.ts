import { normalizeDuration } from '../normalize/duration'

export function formatDuration(milliseconds: number) {
  
  const result: string[] = []

  const data = normalizeDuration(milliseconds)
  if (data.days > 0) {
    result.push(`${data.days}天`)
  }
  if (data.hours > 0) {
    result.push(`${data.hours}小时`)
  }
  if (data.minutes > 0) {
    result.push(`${data.minutes}分钟`)
  }
  if (data.seconds > 0) {
    result.push(`${data.seconds}秒`)
  }

  return result.join('')
}