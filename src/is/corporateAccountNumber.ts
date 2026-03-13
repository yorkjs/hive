/**
 * 是否为对公账户号码
 *
 * @group Function
 * @category Is
 * @param value 对公账户号码
 * @returns 是否为对公账户
 * @example
 * isCorporateAccountNumber('654654565464') // true
 * isCorporateAccountNumber('abcd123123') // false
 */
export function isCorporateAccountNumber(value: string) {
  return /^\d{9,22}$/.test(value)
}