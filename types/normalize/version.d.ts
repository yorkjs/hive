/**
 * 标准化版本号，方便后续进行比较
 *
 * @group Function
 * @category Normalize
 * @param version 版本号，比如 `1.2.3`，最多支持三段，每段的子版本号不超过 `9999`
 * @returns 标准化后的版本号，12 位长度
 * @example
 * normalizeVersion('1.0.10') > normalizeVersion('1.0.9') // true
 */
export declare function normalizeVersion(value: string): string;
