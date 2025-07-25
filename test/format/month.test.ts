import {
  formatMonth,
} from '../../src/format/month'

test('formatMonth', () => {

  expect(formatMonth(new Date('2020-10-01 00:00:00').getTime())).toBe('2020-10')

})