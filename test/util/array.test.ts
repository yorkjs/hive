import {
  chunk,
  filter,
  findIndex,
  findLastIndex,
  indexOf,
  lastIndexOf,
} from '../../src/util/array'

test('filter', () => {

  expect(filter([1, 2, 3], item => item === 2)).toEqual([2])
  expect(filter([1, 2, 3], item => item === 4)).toEqual([])

})

test('findIndex', () => {

  expect(findIndex([1, 2, 3], item => item === 2)).toBe(1)
  expect(findIndex([1, 2, 3], item => item === 4)).toBe(-1)

})

test('findLastIndex', () => {

  expect(findLastIndex([1, 2, 3], item => item === 2)).toBe(1)
  expect(findLastIndex([1, 2, 3], item => item === 4)).toBe(-1)

})

test('indexOf', () => {

  expect(indexOf([1, 2, 3], 2)).toBe(1)
  expect(indexOf([1, 2, 3], 2, 1)).toBe(1)
  expect(indexOf([1, 2, 3], 2, 2)).toBe(-1)
  expect(indexOf([1, 2, 3], 4)).toBe(-1)

})

test('lastIndexOf', () => {

  expect(lastIndexOf([1, 2, 3], 2)).toBe(1)
  expect(lastIndexOf([1, 2, 3], 2, 1)).toBe(1)
  expect(lastIndexOf([1, 2, 3], 2, 0)).toBe(-1)
  expect(lastIndexOf([1, 2, 3], 4)).toBe(-1)

})

test('chunk', () => {
  expect(chunk([], 2)).toEqual([])
  expect(chunk([1], 2)).toEqual([[1]])
  expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]])
  expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]])
  expect(chunk([1, 2, 3, 4, 5, 6], 4)).toEqual([[1, 2, 3, 4], [5, 6]])
  expect(chunk([1, 2, 3, 4, 5, 6], 7)).toEqual([[1, 2, 3, 4, 5, 6]])

})