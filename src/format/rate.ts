import { rateToDisplay } from '../convert/rate'

/**
 * 把万分比格式化为百分比
 *
 * @param value
 * @returns
 */
export function formatRatePercent(value: number) {
  return rateToDisplay(value) + '%'
}
