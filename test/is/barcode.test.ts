import {
  isStandardBarcode,
  isCustomBarcode,
  isPayAuthCode,
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

test('isPayAuthCode', () => {

  expect(isPayAuthCode('133619858964803511')).toBe(true)
  expect(isPayAuthCode('283654147086344711')).toBe(true)
  expect(isPayAuthCode('C69241878121')).toBe(false)
  expect(isPayAuthCode('C692418781212')).toBe(false)

})