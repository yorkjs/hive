/**
 * 脱敏邮箱
 *
 * @group Function
 * @category Mask
 * @param mobile 邮箱
 * @returns 脱敏后的邮箱
 */
export function maskEmail(email: string): string {
  const atIndex = email.indexOf('@')
  if (atIndex <= 0) {
    return email
  }

  const username = email.substring(0, atIndex)
  const domain = email.substring(atIndex)

  if (username.length <= 1) {
    return '***' + domain
  }

  return '***' + username[username.length - 1] + domain
}