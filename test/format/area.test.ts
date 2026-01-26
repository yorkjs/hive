import {
  formatArea,
  formatCity,
} from '../../src/format/area'

test('formatArea', () => {

  expect(formatArea({
    country: {
      id: 0,
      name: '中国'
    },
    province: {
      id: 0,
      name: '北京市'
    },
    city: {
      id: 0,
      name: '市辖区'
    },
    district: {
      id: 0,
      name: '海淀区'
    }
  })).toBe('北京 海淀区')

  expect(formatArea({
    country: {
      id: 0,
      name: '中国'
    },
    province: {
      id: 0,
      name: '北京市'
    },
    city: {
      id: 0,
      name: '市辖区'
    },
    district: {
      id: 0,
      name: '海淀区'
    }
  }, { simplify: false })).toBe('北京市海淀区')

  expect(formatArea({
    country: {
      id: 0,
      name: '中国'
    },
    province: {
      id: 0,
      name: '河南省'
    },
    city: {
      id: 0,
      name: '郑州市'
    },
    district: {
      id: 0,
      name: '管城回族区'
    }
  })).toBe('河南 郑州 管城回族区')

  expect(formatArea({
    country: {
      id: 0,
      name: '中国'
    },
    province: {
      id: 0,
      name: '河南省'
    },
    city: {
      id: 0,
      name: '郑州市'
    },
    district: {
      id: 0,
      name: '管城回族区'
    },
    address: '测试地址'
  })).toBe('河南 郑州 管城回族区 测试地址')

  expect(formatArea({
    country: {
      id: 0,
      name: '中国'
    },
    province: {
      id: 0,
      name: '河南省'
    },
    city: {
      id: 0,
      name: '郑州市'
    },
    district: {
      id: 0,
      name: '管城回族区'
    }
  }, { simplify: false })).toBe('河南省郑州市管城回族区')

  expect(formatArea({
    country: {
      id: 0,
      name: '中国'
    },
    province: {
      id: 0,
      name: '河南省'
    },
    city: {
      id: 0,
      name: '郑州市'
    },
    district: {
      id: 0,
      name: '管城回族区'
    },
    address: '测试地址',
  }, { simplify: false })).toBe('河南省郑州市管城回族区测试地址')

  expect(formatArea({
    country: {
      id: 0,
      name: '中国香港'
    },
  })).toBe('中国香港')

  expect(formatArea({
    country: {
      id: 0,
      name: '中国澳门'
    },
  })).toBe('中国澳门')

  expect(formatArea({
    country: {
      id: 0,
      name: '中国台湾'
    },
  })).toBe('中国台湾')


  expect(formatCity("中国台湾")).toBe("台湾");

})