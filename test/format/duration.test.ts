import { MS_DAY, MS_HOUR, MS_MINUTE, MS_SECOND } from '../../src/constant/millisecond'

import {
  formatDuration,
} from '../../src/format/duration'

test('formatDuration', () => {

  expect(formatDuration(0)).toBe('')
  expect(formatDuration(MS_SECOND)).toBe('1秒')
  expect(formatDuration(MS_MINUTE)).toBe('1分钟')
  expect(formatDuration(MS_HOUR)).toBe('1小时')
  expect(formatDuration(MS_DAY)).toBe('1天')

})