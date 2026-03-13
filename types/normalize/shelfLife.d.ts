interface IShelfLife {
    years: number;
    months: number;
    days: number;
    hours: number;
}
/**
 * 标准化有效期
 *
 * @group Function
 * @category Normalize
 * @param value 有效期，单位是小时
 * @returns 结构化的有效期，包含年、月、日、小时信息
 * @example
 * normalizeShelfLife(26) // { years: 0, months: 0, days: 1, hours: 2 }
 */
export declare function normalizeShelfLife(value: number): IShelfLife;
export {};
