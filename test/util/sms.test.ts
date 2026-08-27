import {
  calculateSmsCount,
} from '../../src/index'


test('模板内容为空，应返回 0 个字符、0 条短信', () => {
  expect(calculateSmsCount('', '', 70)).toEqual([0, 0]);
});

test('正常计算短信条数', () => {
  expect(calculateSmsCount('', '你好', 70)).toEqual([2, 1]);
  expect(calculateSmsCount('', '你好'.repeat(35), 70)).toEqual([70, 1]);
  expect(calculateSmsCount('', '你好'.repeat(36), 70)).toEqual([72, 2]);
});

test('应该计算签名长度，并包含【】两个字符', () => {
  // 【测试】 = 4 个字符
  // 你好 = 2 个字符
  // 总计 = 6
  expect(calculateSmsCount('测试', '你好', 70)).toEqual([6, 1]);
});

test('字符数刚好达到单条短信上限', () => {
  expect(calculateSmsCount('', 'a'.repeat(70), 70)).toEqual([70, 1]);
});

test('超过单条短信上限后应增加短信条数', () => {
  expect(calculateSmsCount('', 'a'.repeat(71), 70)).toEqual([71, 2]);
  expect(calculateSmsCount('', 'a'.repeat(140), 70)).toEqual([140, 2]);
  expect(calculateSmsCount('', 'a'.repeat(141), 70)).toEqual([141, 3]);
});

test('perSmsCharCount 小于等于 0，应返回 0 条短信', () => {
  expect(calculateSmsCount('', '你好', 0)).toEqual([2, 0]);
  expect(calculateSmsCount('', '你好', -1)).toEqual([2, 0]);
});

test('应正确处理中文、英文混合内容', () => {
  expect(calculateSmsCount('', 'Hello你好123', 70)).toEqual([10, 1]);
});

test('应正确处理 Unicode 字符', () => {
  expect(calculateSmsCount('', '😀😀', 70)).toEqual([2, 1]);
});

test('支持自定义每条短信字符数', () => {
  expect(calculateSmsCount('', 'abcdefghij', 5)).toEqual([10, 2]);
  expect(calculateSmsCount('', 'abcdefghijk', 5)).toEqual([11, 3]);
});
