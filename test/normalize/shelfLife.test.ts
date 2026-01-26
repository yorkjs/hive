import {
  normalizeShelfLife,
} from '../../src/normalize/shelfLife'

test('normalizeShelfLife', () => {

  let data = normalizeShelfLife(10)
  expect(data.years).toBe(0)
  expect(data.months).toBe(0)
  expect(data.days).toBe(0)
  expect(data.hours).toBe(10)

  data = normalizeShelfLife(24)
  expect(data.years).toBe(0)
  expect(data.months).toBe(0)
  expect(data.days).toBe(1)
  expect(data.hours).toBe(0)

  data = normalizeShelfLife(24 * 30)
  expect(data.years).toBe(0)
  expect(data.months).toBe(1)
  expect(data.days).toBe(0)
  expect(data.hours).toBe(0)

  data = normalizeShelfLife(24 * 365)
  expect(data.years).toBe(1)
  expect(data.months).toBe(0)
  expect(data.days).toBe(0)
  expect(data.hours).toBe(0)

  data = normalizeShelfLife(24 * 365 + 24 * 31 + 1)
  expect(data.years).toBe(1)
  expect(data.months).toBe(1)
  expect(data.days).toBe(1)
  expect(data.hours).toBe(1)

})
