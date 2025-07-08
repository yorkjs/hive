import {
  formatDate,
  formatDateShortly,
} from '../../src/format/date'

test('formatDate', () => {

  expect(formatDate(Date.now())).toBe('2025-07-08')
  expect(formatDateShortly(Date.now())).toBe('07-08')
  expect(formatDateShortly(new Date('2020-10-01 00:00:00').getTime())).toBe('2020-10-01')

})