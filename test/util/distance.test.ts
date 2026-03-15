import {
  calculateDistance,
} from '../../src/index'

test('distance_util', () => {

  expect(calculateDistance(
    116.4074,   // 北京经度
    39.9042,    // 北京纬度
    121.4737,   // 上海经度
    31.2304     // 上海纬度
  )).toBe(1067310)

})
