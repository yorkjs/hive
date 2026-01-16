import {
  formatCategory,
} from '../../src/format/category'

test('formatCategory', () => {

  expect(formatCategory({})).toBe('')
  expect(formatCategory({
    category1: {
      id: 0,
      name: '美食餐饮'
    }
  })).toBe('美食餐饮')
  expect(formatCategory({
    category1: {
      id: 0,
      name: '美食餐饮'
    },
    category2: {
      id: 0,
      name: '中餐'
    }
  })).toBe('美食餐饮/中餐')
  expect(formatCategory({
    category1: {
      id: 0,
      name: '美食餐饮'
    },
    category2: {
      id: 0,
      name: '中餐'
    },
    category3: {
      id: 0,
      name: '烤鸭'
    }
  })).toBe('美食餐饮/中餐/烤鸭')

})