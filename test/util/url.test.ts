import {
  encodeUriComponent,
  decodeUriComponent,
  normalizeUrl,
  toProtocolRelativeUrl,
} from '../../src/index'

test('encodeUriComponent', () => {
  expect(encodeUriComponent(`key=123 啊啊+-*/_.!~()'`)).toBe(`key%3D123%20%E5%95%8A%E5%95%8A%2B-*%2F_.!~()'`)
})

test('decodeUriComponent', () => {
  expect(decodeUriComponent(`key%3D123%20%E5%95%8A%E5%95%8A%2B-*%2F_.!~()'`)).toBe(`key=123 啊啊+-*/_.!~()'`)
})

test('normalizeUrl', () => {
  expect(normalizeUrl('http://example.com')).toBe('http://example.com')
  expect(normalizeUrl('https://example.com')).toBe('https://example.com')
  expect(normalizeUrl('//example.com')).toBe('https://example.com')
  expect(normalizeUrl('example.com')).toBe('https://example.com')
})

test('toProtocolRelativeUrl', () => {
  expect(toProtocolRelativeUrl('http://example.com')).toBe('//example.com')
  expect(toProtocolRelativeUrl('https://example.com')).toBe('//example.com')
  expect(toProtocolRelativeUrl('//example.com')).toBe('//example.com')
  expect(toProtocolRelativeUrl('example.com')).toBe('//example.com')
})
