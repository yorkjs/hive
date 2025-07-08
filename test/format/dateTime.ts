import {
  formatDateTime,
} from '../../src/format/dateTime'

test('formatDateTime', () => {

  expect(formatDateTime(new Date('2020-10-01 10:01:02').getTime())).toBe('2020-10-01 10:01:02')

})