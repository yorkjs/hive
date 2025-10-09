import {
  distanceToDisplay,
  distanceToBackend,
  calculateDistance,
} from '../../src/convert/distance'

test('distance_convert', () => {

  expect(distanceToDisplay(8000)).toBe(8)
  expect(distanceToDisplay(8800)).toBe(8.8)
  expect(distanceToDisplay(8880)).toBe(8.88)
  expect(distanceToDisplay(8888)).toBe(8.888)

  expect(distanceToBackend(8)).toBe(8000)
  expect(distanceToBackend(8.8)).toBe(8800)
  expect(distanceToBackend(8.88)).toBe(8880)
  expect(distanceToBackend(8.888)).toBe(8888)

  expect(calculateDistance(
    116.4074,   // 北京经度
    39.9042,    // 北京纬度
    121.4737,   // 上海经度
    31.2304     // 上海纬度
  )).toBe(1067310)

})
