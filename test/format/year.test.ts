import {
  formatYear,
} from '../../src/format/year'

test('formatYear', () => {

  expect(formatYear(new Date('2020-10-01 00:00:00').getTime())).toBe('2020')

})