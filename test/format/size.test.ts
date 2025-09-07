import {
  formatSize,
} from '../../src/format/size'

test('formatSize', () => {

  expect(formatSize(500)).toBe('500B')
  expect(formatSize(1024)).toBe('1KB')
  expect(formatSize(1536)).toBe('1.50KB')
  expect(formatSize(8.0 * 1024)).toBe('8KB')
  expect(formatSize(1048576)).toBe('1MB')
  expect(formatSize(1572864)).toBe('1.50MB')
  expect(formatSize(1073741824)).toBe('1GB')

})