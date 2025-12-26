import {
  isEmpty
} from '../../src/is/empty'

test('isEmpty', () => {
  expect(isEmpty({})).toBe(true)
  expect(isEmpty([])).toBe(true)
  expect(isEmpty('')).toBe(true)
  expect(isEmpty('  ')).toBe(true)
  expect(isEmpty('      ')).toBe(true)
  expect(isEmpty(null)).toBe(true)
  expect(isEmpty(undefined)).toBe(true)
  expect(isEmpty(NaN)).toBe(true)
  expect(isEmpty(new Map())).toBe(true)
  expect(isEmpty(new Set())).toBe(true)
})

test('isNotEmpty', () => {
  expect(isEmpty({a: 1})).toBe(false)
  expect(isEmpty([1, 2, 3])).toBe(false)
  expect(isEmpty('a')).toBe(false)
  expect(isEmpty('a  ')).toBe(false)
  expect(isEmpty('a      ')).toBe(false)
  expect(isEmpty(0)).toBe(false)
  expect(isEmpty(1)).toBe(false)
  expect(isEmpty(true)).toBe(false)
  expect(isEmpty(false)).toBe(false)
  expect(isEmpty(new Map([['a', 1]]))).toBe(false)
  expect(isEmpty(new Set([1, 2, 3]))).toBe(false)
})