import {
  formatDate,
  formatDateShortly,
} from '../../src/format/date'

test('formatDate', () => {

  expect(formatDate(new Date('2020-10-01 00:00:00').getTime())).toBe('2020-10-01')
  expect(formatDateShortly(new Date('2025-10-01 00:00:00').getTime())).toBe('10-01')
  expect(formatDateShortly(new Date('2020-10-01 00:00:00').getTime())).toBe('2020-10-01')

})