import {
  formatTime,
} from '../../src/index'

test('formatTime', () => {

  expect(formatTime(new Date('2020-10-01 01:02:03').getTime())).toBe('01:02:03')

})