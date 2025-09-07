import {
  formatRatePercent,
} from '../../src/format/rate'

test('formatRatePercent', () => {

  expect(formatRatePercent(1000)).toBe('10%')
  expect(formatRatePercent(1234)).toBe('12.34%')

})