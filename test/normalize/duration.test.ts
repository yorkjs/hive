import { MS_DAY, MS_HOUR, MS_MINUTE, MS_SECOND } from '../../src/constant/millisecond'
import {
  normalizeDuration,
} from '../../src/normalize/duration'

test('normalizeDuration', () => {

  let data = normalizeDuration(MS_SECOND)
  expect(data.days).toBe(0)
  expect(data.hours).toBe(0)
  expect(data.minutes).toBe(0)
  expect(data.seconds).toBe(1)

  data = normalizeDuration(MS_MINUTE)
  expect(data.days).toBe(0)
  expect(data.hours).toBe(0)
  expect(data.minutes).toBe(1)
  expect(data.seconds).toBe(0)

  data = normalizeDuration(MS_HOUR)
  expect(data.days).toBe(0)
  expect(data.hours).toBe(1)
  expect(data.minutes).toBe(0)
  expect(data.seconds).toBe(0)

  data = normalizeDuration(MS_DAY)
  expect(data.days).toBe(1)
  expect(data.hours).toBe(0)
  expect(data.minutes).toBe(0)
  expect(data.seconds).toBe(0)

  data = normalizeDuration(MS_DAY + 2 * MS_HOUR + 3 * MS_MINUTE + 4 * MS_SECOND)
  expect(data.days).toBe(1)
  expect(data.hours).toBe(2)
  expect(data.minutes).toBe(3)
  expect(data.seconds).toBe(4)

})
