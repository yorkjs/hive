import { MS_DAY, MS_HOUR, MS_MINUTE, MS_SECOND } from '../constant/millisecond'

interface IDuration {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function normalizeDuration(milliseconds: number): IDuration {

  const result: IDuration = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  if (milliseconds <= 0) {
    return result
  }

  const seconds = Math.ceil(milliseconds / MS_SECOND)
  const minutes = Math.floor(milliseconds / MS_MINUTE)
  const hours = Math.floor(milliseconds / MS_HOUR)
  const days = Math.floor(milliseconds / MS_DAY)

  if (days > 0) {
    result.days = days
  }
  if (hours % 24 > 0) {
    result.hours = hours % 24
  }
  if (minutes % 60 > 0) {
    result.minutes = minutes % 60
  }
  if (seconds % 60 > 0) {
    result.seconds = seconds % 60
  }
  return result
}