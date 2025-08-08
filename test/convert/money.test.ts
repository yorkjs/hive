import {
  moneyToDisplay,
  moneyYuanToBackend,
  moneyTenThousandYuanToBackend,
} from '../../src/convert/money'

test('money_convert', () => {

  expect(moneyToDisplay(100)).toBe(1)
  expect(moneyYuanToBackend(1.01)).toBe(101)
  expect(moneyTenThousandYuanToBackend(1.01)).toBe(1010000)

})
