import { SHELF_LIFE_DAY, SHELF_LIFE_MONTH, SHELF_LIFE_YEAR } from '../constant/shelfLife'

export function formatShelfLife(value: number) {
  if (value <= 0) {
    return ''
  }

  let result = ''

  const year = Math.floor(value / SHELF_LIFE_YEAR)
  if (year > 0) {
    result += `${year}年`
    value -= SHELF_LIFE_YEAR * year
  }

  const month = Math.floor(value / SHELF_LIFE_MONTH)
  if (month > 0) {
    result += `${month}个月`
    value -= SHELF_LIFE_MONTH * month
  }

  const day = Math.floor(value / SHELF_LIFE_DAY)
  if (day > 0) {
    result += `${day}天`
    value -= SHELF_LIFE_DAY * day
  }

  if (value > 0) {
    result += `${value}小时`
  }

  return result
}