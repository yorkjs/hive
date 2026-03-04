import {
  randomStringByLength,
  randomIntegerByLength,
  randomIntegerByRange,
  randomStringByCurrentTime,
} from '../../src/index'

test('randomStringByLength', () => {

  for (let i = 5; i < 100; i++) {
    expect(randomStringByLength(i).length).toBe(i)
    expect(randomStringByLength(i)).not.toBe(randomStringByLength(i))
  }

})

test('randomIntegerByLength', () => {

  for (let i = 2; i < 20; i++) {
    expect(randomIntegerByLength(i).toString().length).toBe(i)
    expect(randomIntegerByLength(i)).not.toBe(randomIntegerByLength(i))
  }

})

test('randomIntegerByRange', () => {
  for (let i = 2; i < 10; i++) {
    const min = Math.pow(10, i - 1)
    const max = Math.pow(10, i) - 1
    const random = randomIntegerByRange(min, max)
    expect(random >= min).toBe(true)
    expect(random < max).toBe(true)
  }
})

test('randomStringByCurrentTime', () => {
  expect(randomStringByCurrentTime(-1).length).toBe(17)
  expect(randomStringByCurrentTime(0).length).toBe(17)
  expect(randomStringByCurrentTime(3).length).toBe(20)
  expect(/^\d+$/.test(randomStringByCurrentTime(3))).toBe(true)
  expect(randomStringByCurrentTime(3).startsWith(`${new Date().getFullYear()}`)).toBe(true)
})

