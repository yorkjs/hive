/**
 * 是否为对公账户号码
 *
 * @group Function
 * @category Is
 * @param value 要校验的字符串
 * @returns 是否为对公账户
 * @example
 * isCorporateAccountNumber('654654565464') // true
 * isCorporateAccountNumber('abcd123123') // false
 */
export declare function isCorporateAccountNumber(value: string): boolean;
