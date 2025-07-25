import {
  formatWeek,
} from '../../src/format/week'

test('formatWeek', () => {

  expect(formatWeek(new Date('2025-07-25 00:00:00').getTime())).toBe('07-20 ~ 07-26')

})