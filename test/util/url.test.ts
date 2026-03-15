import {
  encodeUriComponent,
  decodeUriComponent,
  toHttpProtocolUrl,
  toRelativeProtocolUrl,
} from '../../src/index'

test('encodeUriComponent', () => {
  expect(encodeUriComponent(`key=123 啊啊+-*/_.!~()'`)).toBe(`key%3D123%20%E5%95%8A%E5%95%8A%2B-*%2F_.!~()'`)
})

test('decodeUriComponent', () => {
  expect(decodeUriComponent(`key%3D123%20%E5%95%8A%E5%95%8A%2B-*%2F_.!~()'`)).toBe(`key=123 啊啊+-*/_.!~()'`)
})

test('toHttpProtocolUrl', () => {
  expect(toHttpProtocolUrl('http://example.com')).toBe('http://example.com')
  expect(toHttpProtocolUrl('https://example.com')).toBe('https://example.com')
  expect(toHttpProtocolUrl('//example.com')).toBe('https://example.com')
  expect(toHttpProtocolUrl('example.com')).toBe('https://example.com')
})

test('toRelativeProtocolUrl', () => {
  expect(toRelativeProtocolUrl('http://example.com')).toBe('//example.com')
  expect(toRelativeProtocolUrl('https://example.com')).toBe('//example.com')
  expect(toRelativeProtocolUrl('//example.com')).toBe('//example.com')
  expect(toRelativeProtocolUrl('example.com')).toBe('//example.com')
})
