import { SHELF_LIFE_DAY, SHELF_LIFE_MONTH, SHELF_LIFE_YEAR } from '../../src/constant/shelfLife';
import {
  formatShelfLife,
} from '../../src/format/shelfLife'

test('formatShelfLife', () => {

  expect(formatShelfLife(5)).toBe('5小时')
  expect(formatShelfLife(24)).toBe('1天')
  expect(formatShelfLife(30)).toBe('1天6小时')
  expect(formatShelfLife(SHELF_LIFE_MONTH)).toBe('1个月')
  expect(formatShelfLife(35 * SHELF_LIFE_DAY)).toBe('1个月5天')
  expect(formatShelfLife(365 * SHELF_LIFE_DAY)).toBe('1年')
  expect(formatShelfLife(SHELF_LIFE_YEAR + 6 * SHELF_LIFE_MONTH)).toBe('1年6个月')

})