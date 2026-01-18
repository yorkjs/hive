import {
  formatBirthday,
} from '../../src/format/birthday'

test('formatBirthday', () => {

  expect(formatBirthday(new Date('2020-10-01 00:00:00').getTime())).toBe('10.01')

})