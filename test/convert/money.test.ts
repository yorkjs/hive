import { MONEY_TEN_THOUSAND_YUAN, MONEY_YUAN } from '../../src/constant/money'
import {
  moneyToDisplay,
  moneyToBackend,
} from '../../src/convert/money'

test('money_convert', () => {

  expect(moneyToDisplay(100)).toBe(1)
  expect(moneyToDisplay(100, MONEY_YUAN)).toBe(1)
  expect(moneyToDisplay(1000000, MONEY_TEN_THOUSAND_YUAN)).toBe(1)
  expect(moneyToDisplay(1100000, MONEY_TEN_THOUSAND_YUAN)).toBe(1.1)

  expect(moneyToBackend(1.01)).toBe(101)
  expect(moneyToBackend(1.01, MONEY_YUAN)).toBe(101)
  expect(moneyToBackend(1.01, MONEY_TEN_THOUSAND_YUAN)).toBe(1010000)

})
