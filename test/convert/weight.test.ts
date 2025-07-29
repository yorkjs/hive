import {
  weightToG,
  weightToKG,
  weightGToBackend,
  weightKGToBackend,
} from '../../src/convert/weight'

test('rate_convert', () => {

  expect(weightToG(1)).toBe(0.001)
  expect(weightToG(10)).toBe(0.01)
  expect(weightToG(100)).toBe(0.1)
  expect(weightToG(1000)).toBe(1)
  expect(weightToG(10000)).toBe(10)

  expect(weightToKG(1)).toBe(0.000001)
  expect(weightToKG(10)).toBe(0.00001)
  expect(weightToKG(100)).toBe(0.0001)
  expect(weightToKG(1000)).toBe(0.001)
  expect(weightToKG(10000)).toBe(0.01)
  expect(weightToKG(100000)).toBe(0.1)
  expect(weightToKG(1000000)).toBe(1)
  expect(weightToKG(10000000)).toBe(10)


  expect(weightGToBackend(0.001)).toBe(1)
  expect(weightGToBackend(0.01)).toBe(10)
  expect(weightGToBackend(0.1)).toBe(100)
  expect(weightGToBackend(1)).toBe(1000)
  expect(weightGToBackend(10)).toBe(10000)

  expect(weightKGToBackend(0.001)).toBe(1000)
  expect(weightKGToBackend(0.01)).toBe(10000)
  expect(weightKGToBackend(0.1)).toBe(100000)
  expect(weightKGToBackend(1)).toBe(1000000)
  expect(weightKGToBackend(10)).toBe(10000000)

})
