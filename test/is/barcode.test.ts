import {
  isStandardBarcode,
  isCustomBarcode,
} from '../../src/is/barcode'

test('isStandardBarcode', () => {

  expect(isStandardBarcode('6924187812697')).toBe(true)
  expect(isStandardBarcode('C6924187812697')).toBe(false)

})

test('isCustomBarcode', () => {

  expect(isCustomBarcode('6924187812697')).toBe(false)
  expect(isCustomBarcode('C6924187812')).toBe(true)
  expect(isCustomBarcode('C69241878121')).toBe(true)
  expect(isCustomBarcode('C692418781212')).toBe(true)

})