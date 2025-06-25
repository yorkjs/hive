import {
  moneyToDisplay,
  moneyToBackend,
} from '../../src/convert/money'

test('money_convert', () => {

  expect(moneyToDisplay(100)).toBe(1)
  expect(moneyToBackend(1.01)).toBe(101)

})
