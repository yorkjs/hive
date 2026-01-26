import { SHELF_LIFE_DAY, SHELF_LIFE_MONTH, SHELF_LIFE_YEAR } from '../constant/shelfLife'

interface IShelfLife {
  years: number
  months: number
  days: number
  hours: number
}

export function normalizeShelfLife(value: number): IShelfLife {

  const result: IShelfLife = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
  }

  if (value <= 0) {
    return result
  }

  const years = Math.floor(value / SHELF_LIFE_YEAR)
  if (years > 0) {
    result.years = years
    value -= SHELF_LIFE_YEAR * years
  }

  const months = Math.floor(value / SHELF_LIFE_MONTH)
  if (months > 0) {
    result.months = months
    value -= SHELF_LIFE_MONTH * months
  }

  const days = Math.floor(value / SHELF_LIFE_DAY)
  if (days > 0) {
    result.days = days
    value -= SHELF_LIFE_DAY * days
  }

  if (value > 0) {
    result.hours = value
  }

  return result
}