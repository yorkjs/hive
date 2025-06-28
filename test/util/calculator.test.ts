import calculator from '../../src/util/calculator'

test('calculator_plus', () => {

  expect(calculator.plus(1, 2)).toBe(3)
  expect(calculator.plus(1.1, 2.1)).toBe(3.2)
  expect(calculator.plus(1.12, 2.13)).toBe(3.25)
  expect(calculator.plus(1.121, 2.131)).toBe(3.252)
  expect(calculator.plus(1.121321, 2.3312213)).toBe(3.4525423)
  expect(calculator.plus(1, -2)).toBe(-1)
  expect(calculator.plus(-2, -3)).toBe(-5)

})

test('calculator_minus', () => {

  expect(calculator.minus(2, 1)).toBe(1)
  expect(calculator.minus(2.1, 1.1)).toBe(1)
  expect(calculator.minus(2.32, 1.04)).toBe(1.28)
  expect(calculator.minus(4.978672, 2.131231)).toBe(2.847441)
  expect(calculator.minus(3, -1)).toBe(4)
  expect(calculator.minus(-2, -3)).toBe(1)

})

test('calculator_times', () => {

  expect(calculator.times(2, 1)).toBe(2)
  expect(calculator.times(2, 3)).toBe(6)
  expect(calculator.times(2.1, 10)).toBe(21)
  expect(calculator.times(2.11, 10)).toBe(21.1)
  expect(calculator.times(2.111, 10)).toBe(21.11)
  expect(calculator.times(2.111, 100)).toBe(211.1)
  expect(calculator.times(2.111, 1000)).toBe(2111)
  expect(calculator.times(2.11728132706, 2)).toBe(4.23456265412)
  expect(calculator.times(10, 0.5)).toBe(5)
  expect(calculator.times(10, 0.2)).toBe(2)
  expect(calculator.times(3, -2)).toBe(-6)
  expect(calculator.times(-2, -3)).toBe(6)
  expect(calculator.times(-2.1, -3.2)).toBe(6.72)

})

test('calculator_divide', () => {

  expect(calculator.divide(4, 2)).toBe(2)
  expect(calculator.divide(6, 3)).toBe(2)
  expect(calculator.divide(2.2, 2)).toBe(1.1)
  expect(calculator.divide(4.234, 2)).toBe(2.117)
  expect(calculator.divide(4.234562, 2)).toBe(2.117281)
  expect(calculator.divide(4.23456265412, 2)).toBe(2.11728132706)
  expect(calculator.divide(50, 10)).toBe(5)
  expect(calculator.divide(50, 100)).toBe(0.5)
  expect(calculator.divide(50, 1000)).toBe(0.05)
  expect(calculator.divide(10, 0.5)).toBe(20)
  expect(calculator.divide(10, 0.2)).toBe(50)
  expect(calculator.divide(3, -2)).toBe(-1.5)
  expect(calculator.divide(-6, -3)).toBe(2)
  expect(calculator.divide(-4.4, -2.2)).toBe(2)

})