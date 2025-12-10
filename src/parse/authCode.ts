import { AUTH_CODE_ALIPAY, AUTH_CODE_WECHAT } from "../constant/authCode"

/// 解析付款码
export function parseAuthCode(value: string) {
  // 微信    133619858964803511
  // 支付宝  283654147086344711
  const length = value.length
  if (length == 18 || length == 19 || length == 20) {
    if (value.startsWith('1')) {
      return AUTH_CODE_WECHAT
    }
    else if (value.startsWith('2')) {
      return AUTH_CODE_ALIPAY
    }
  }
  return -1
}