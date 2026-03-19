/**
 * 格式化文件大小
 *
 * @group Function
 * @category Format
 * @param value 文件大小，单位是字节
 * @returns 格式化后的字符串
 * @example
 * formatSize(1024) // 1KB
 * formatSize(1024 * 1024) // 1MB
 * formatSize(1024 * 1024 * 1024) // 1GB
 */
export declare function formatSize(value: number): string;
