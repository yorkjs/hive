import {
  formatWeek,
} from '../../src/format/week'

test('formatWeek', () => {

  expect(formatWeek(new Date('2025-07-25 00:00:00').getTime())).toBe('2025-07-20 至 2025-07-26')
  expect(formatWeek(new Date(`2026-02-14 00:00:00`).getTime())).toBe('02-08 至 02-14')

})