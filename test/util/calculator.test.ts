import { minusNumber, plusNumber, timesNumber, divideNumber } from '../../src/util/calculator'

test('calculator_plus', () => {

  expect(plusNumber(1, 2)).toBe(3)
  expect(plusNumber(1.1, 2.1)).toBe(3.2)
  expect(plusNumber(1.12, 2.13)).toBe(3.25)
  expect(plusNumber(1.121, 2.131)).toBe(3.252)
  expect(plusNumber(1.121321, 2.3312213)).toBe(3.4525423)
  expect(plusNumber(1, -2)).toBe(-1)
  expect(plusNumber(-2, -3)).toBe(-5)

})

test('calculator_minus', () => {

  expect(minusNumber(2, 1)).toBe(1)
  expect(minusNumber(2.1, 1.1)).toBe(1)
  expect(minusNumber(2.32, 1.04)).toBe(1.28)
  expect(minusNumber(4.978672, 2.131231)).toBe(2.847441)
  expect(minusNumber(3, -1)).toBe(4)
  expect(minusNumber(-2, -3)).toBe(1)

})

test('calculator_times', () => {

  expect(timesNumber(2, 1)).toBe(2)
  expect(timesNumber(2, 3)).toBe(6)
  expect(timesNumber(2.1, 10)).toBe(21)
  expect(timesNumber(2.11, 10)).toBe(21.1)
  expect(timesNumber(2.111, 10)).toBe(21.11)
  expect(timesNumber(2.111, 100)).toBe(211.1)
  expect(timesNumber(2.111, 1000)).toBe(2111)
  expect(timesNumber(2.11728132706, 2)).toBe(4.23456265412)
  expect(timesNumber(10, 0.5)).toBe(5)
  expect(timesNumber(10, 0.2)).toBe(2)
  expect(timesNumber(3, -2)).toBe(-6)
  expect(timesNumber(-2, -3)).toBe(6)
  expect(timesNumber(-2.1, -3.2)).toBe(6.72)

})

test('calculator_divide', () => {

  expect(divideNumber(4, 2)).toBe(2)
  expect(divideNumber(6, 3)).toBe(2)
  expect(divideNumber(2.2, 2)).toBe(1.1)
  expect(divideNumber(4.234, 2)).toBe(2.117)
  expect(divideNumber(4.234562, 2)).toBe(2.117281)
  expect(divideNumber(4.23456265412, 2)).toBe(2.11728132706)
  expect(divideNumber(50, 10)).toBe(5)
  expect(divideNumber(50, 100)).toBe(0.5)
  expect(divideNumber(50, 1000)).toBe(0.05)
  expect(divideNumber(10, 0.5)).toBe(20)
  expect(divideNumber(10, 0.2)).toBe(50)
  expect(divideNumber(201, 100)).toBe(2.01)
  expect(divideNumber(3, -2)).toBe(-1.5)
  expect(divideNumber(-6, -3)).toBe(2)
  expect(divideNumber(-4.4, -2.2)).toBe(2)

})