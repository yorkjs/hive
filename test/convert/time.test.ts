import {
  timeFieldToTime,
  timeToTimeField,
  timeToTimestamp,
  timestampToTime,
  timeToMinuteSegment,
} from '../../src/convert/time'

test('time_convert', () => {

  const date = new Date()
  const timestamp = date.getTime()

  const timeField = timeToTimeField(date)
  const convertedTime = timeFieldToTime(timeField)
  expect(timeToTimestamp(convertedTime)).toBe(timestamp)

  expect(timeToTimestamp(date)).toBe(timestamp)
  expect(timestampToTime(timestamp).getTime()).toBe(timestamp)

  expect(timeToTimestamp(new Date('-'))).toBe(0)
  expect(timeToTimestamp(timestampToTime(0))).toBe(0)

  expect(timeToMinuteSegment(new Date('2025-05-05 00:00:00'))).toBe(0)
  expect(timeToMinuteSegment(new Date('2025-05-05 10:01:00'))).toBe(601)
  expect(timeToMinuteSegment(new Date('2025-05-05 23:59:59'))).toBe(1439)

})