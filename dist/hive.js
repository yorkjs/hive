/**
 * hive.js v0.5.3
 * (c) 2025-2026 yorkjs team
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('number-precision'), require('dayjs')) :
  typeof define === 'function' && define.amd ? define(['exports', 'number-precision', 'dayjs'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Hive = {}, global.NP, global.Dayjs));
})(this, (function (exports, NP, dayjs) { 'use strict';

  function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var NP__namespace = /*#__PURE__*/_interopNamespace(NP);
  var dayjs__default = /*#__PURE__*/_interopDefault(dayjs);

  /**
   * 微信付款码
   * @type {number}
   * @group Constant
   * @category AuthCode
   */
  var AUTH_CODE_WECHAT = 1;
  /**
   * 支付宝付款码
   * @type {number}
   * @group Constant
   * @category AuthCode
   */
  var AUTH_CODE_ALIPAY = 2;

  /**
   * 中文版年
   * @type {String}
   * @group Constant
   * @category Year
   */
  var YEAR_DEFAULT = 'YYYY';
  /**
   * 中文版年
   * @type {String}
   * @group Constant
   * @category Year
   */
  var YEAR_CHINESE = 'YYYY年';

  /**
   * 月份，包含年月
   *
   * @type {string}
   * @group Constant
   * @category Month
   * @example
   * 示例：2020-10
   */
  var MONTH_DEFAULT = 'YYYY-MM';
  /**
   * 月份，只有月
   *
   * @type {string}
   * @group Constant
   * @category Month
   * @example
   * 示例：10
   */
  var MONTH_ONLY = 'MM';
  /**
   * 月份，中文版年月
   *
   * @type {string}
   * @group Constant
   * @category Month
   * @example
   * 示例：2020年10月
   */
  var MONTH_CHINESE = 'YYYY年M月';
  /**
   * 月份，中文版只有月
   *
   * @type {string}
   * @group Constant
   * @category Month
   * @example
   * 示例：10月
   */
  var MONTH_ONLY_CHINESE = 'M月';

  /**
   * 年月日（连字符）
   * @type {string}
   * @category Date
   * @group Constant
   * @remarks -DD'
   */
  var DATE_YEAR_MONTH_DATE = 'YYYY-MM-DD';
  /**
   * 月日（连字符）
   * @type {string}
   * @category Date
   * @group Constant
   * @remarks 示例：10-01
   */
  var DATE_MONTH_DATE = 'MM-DD';
  /**
   * 年月日（斜杠）
   * @type {string}
   * @category Date
   * @group Constant
   * @remarks /DD'
   */
  var DATE_YEAR_MONTH_DATE_SLASH = 'YYYY/MM/DD';
  /**
   * 月日（斜杠）
   * @type {string}
   * @category Date
   * @group Constant
   * @remarks 示例：10/01
   */
  var DATE_MONTH_DATE_SLASH = 'MM/DD';
  /**
   * 年月日（点号）
   * @type {string}
   * @category Date
   * @group Constant
   * @remarks .DD'
   */
  var DATE_YEAR_MONTH_DATE_DOT = 'YYYY.MM.DD';
  /**
   * 月日（点号）
   * @type {string}
   * @category Date
   * @group Constant
   * @remarks 示例：10.01
   */
  var DATE_MONTH_DATE_DOT = 'MM.DD';
  /**
   * 年月日（中文）
   * @type {string}
   * @category Date
   * @group Constant
   * @remarks 示例：2020年10月1日
   */
  var DATE_YEAR_MONTH_DATE_CHINESE = 'YYYY年M月D日';
  /**
   * 月日（中文）
   * @type {string}
   * @category Date
   * @group Constant
   * @remarks 示例：10月1日
   */
  var DATE_MONTH_DATE_CHINESE = 'M月D日';

  /**
   * 年月日 时分秒
   * @type {string}
   * @group Constant
   * @category DateTime
   * @remarks 示例：2020-10-01 10:00:00
   */
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND = 'YYYY-MM-DD HH:mm:ss';
  /**
   * 年月日 时分
   * @type {string}
   * @group Constant
   * @category DateTime
   * @remarks 示例：2020-10-01 10:00
   */
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE = 'YYYY-MM-DD HH:mm';
  /**
   * 月日 时分
   * @type {string}
   * @group Constant
   * @category DateTime
   * @remarks 示例：10-01 10:00
   */
  var DATE_TIME_MONTH_DATE_HOUR_MINUTE = 'MM-DD HH:mm';
  /**
   * 年月日 时分秒
   * @type {string}
   * @group Constant
   * @category DateTime
   * @remarks 示例：2020/10/01 10:00:00
   */
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH = 'YYYY/MM/DD HH:mm:ss';
  /**
   * 年月日 时分
   * @type {string}
   * @group Constant
   * @category DateTime
   * @remarks 示例：2020/10/01 10:00
   */
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH = 'YYYY/MM/DD HH:mm';
  /**
   * 月日 时分
   * @type {string}
   * @group Constant
   * @category DateTime
   * @remarks 示例：10/01 10:00
   */
  var DATE_TIME_MONTH_DATE_HOUR_MINUTE_SLASH = 'MM/DD HH:mm';
  /**
   * 年月日 时分秒
   * @type {string}
   * @group Constant
   * @category DateTime
   * @remarks 示例：2020.10.01 10:00:00
   */
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_DOT = 'YYYY.MM.DD HH:mm:ss';
  /**
   * 年月日 时分
   * @type {string}
   * @group Constant
   * @category DateTime
   * @remarks 示例：2020.10.01 10:00
   */
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_DOT = 'YYYY.MM.DD HH:mm';
  /**
   * 月日 时分
   * @type {string}
   * @group Constant
   * @category DateTime
   * @remarks 示例：10.01 10:00
   */
  var DATE_TIME_MONTH_DATE_HOUR_MINUTE_DOT = 'MM.DD HH:mm';
  /**
   * 年月日 时分秒
   * @type {string}
   * @group Constant
   * @category DateTime
   * @remarks 示例：2020/10/01 10:00:00
   */
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_CHINESE = 'YYYY年M月D日 HH:mm:ss';
  /**
   * 年月日 时分
   * @type {string}
   * @group Constant
   * @category DateTime
   * @remarks 示例：2020/10/01 10:00
   */
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE = 'YYYY年M月D日 HH:mm';
  /**
   * 月日 时分
   * @type {string}
   * @group Constant
   * @category DateTime
   * @remarks 示例：10/01 10:00
   */
  var DATE_TIME_MONTH_DATE_HOUR_MINUTE_CHINESE = 'M月D日 HH:mm';

  /**
   * 时分秒
   * @type {string}
   * @group Constant
   * @category Time
   * @remarks 示例：10:00:00
   */
  var TIME_DEFAULT = 'HH:mm:ss';
  /**
   * 时分
   * @type {string}
   * @group Constant
   * @category Time
   * @remarks 示例：10:00
   */
  var TIME_HOUR_MINUTE = 'HH:mm';

  /**
   * 毫秒数：秒
   * @type {number}
   * @group Constant
   * @category Millisecond
   * @default 1000
   */
  var MS_SECOND = 1000;
  /**
   * 毫秒数：分钟
   * @type {number}
   * @group Constant
   * @category Millisecond
   * @default 60 * MS_SECOND
   */
  var MS_MINUTE = 60 * MS_SECOND;
  /**
   * 毫秒数：小时
   * @type {number}
   * @group Constant
   * @category Millisecond
   * @default 60 * MS_MINUTE
   */
  var MS_HOUR = 60 * MS_MINUTE;
  /**
   * 毫秒数：天
   * @type {number}
   * @group Constant
   * @category Millisecond
   * @default 24 * MS_HOUR
   */
  var MS_DAY = 24 * MS_HOUR;
  /**
   * 毫秒数：周
   * @type {number}
   * @group Constant
   * @category Millisecond
   * @default 7 * MS_DAY
   */
  var MS_WEEK = 7 * MS_DAY;
  /**
   * 毫秒数：年
   * @type {number}
   * @group Constant
   * @category Millisecond
   * @default 365 * MS_DAY
   */
  var MS_YEAR = 365 * MS_DAY;

  /**
   * 元 转 分
   * @type {number}
   * @group Constant
   * @category Money
   * @default 100
   */
  var MONEY_YUAN_TO_CENT = 100;
  /**
   * 万元 转 分
   * @type {number}
   * @group Constant
   * @category Money
   * @default 10000 * MONEY_YUAN_TO_CENT
   */
  var MONEY_TEN_THOUSAND_YUAN_TO_CENT = 10000 * MONEY_YUAN_TO_CENT;
  /**
   * 元 转 厘
   * @type {number}
   * @group Constant
   * @category Money
   * @default 1000
   */
  var MONEY_YUAN_TO_PENNY = 1000;
  /**
   * 一元
   * @type {number}
   * @group Constant
   * @category Money
   * @default 100
   */
  var AMOUNT_ONE_YUAN = 100;
  /**
   * 一万元
   * @type {number}
   * @group Constant
   * @category Money
   * @default 10000 * AMOUNT_ONE_YUAN
   */
  var AMOUNT_TEN_THOUSAND_YUAN = 10000 * AMOUNT_ONE_YUAN;

  /**
   * 手机号类型
   *
   * @type {number}
   * @group Constant
   * @category PhoneNumber
   */
  var PHONE_NUMBER_MOBILE = 1;
  /**
   * 手机号类型
   *
   * @type {number}
   * @group Constant
   * @category PhoneNumber
   */
  var PHONE_NUMBER_LANDLINE = 2;
  /**
   * 手机号类型
   *
   * @type {number}
   * @group Constant
   * @category PhoneNumber
   */
  var PHONE_NUMBER_400 = 3;

  /**
   * 随机字符，包含所有数字
   *
   * @type {string}
   * @group Constant
   * @category RandomCharset
   */
  var RANDOM_CHARSET_NUMERIC = '0123456789';
  /**
   * 随机字符，仅含大写字母
   *
   * @type {string}
   * @group Constant
   * @category RandomCharset
   */
  var RANDOM_CHARSET_ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  /**
   * 随机字符，仅含小写字母
   *
   * @type {string}
   * @group Constant
   * @category RandomCharset
   */
  var RANDOM_CHARSET_ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz';
  /**
   * 随机字符，所有所有字母和数字
   *
   * @type {string}
   * @group Constant
   * @category RandomCharset
   */
  var RANDOM_CHARSET_ALPHA_NUMERIC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  /**
   * 保质期(日)
   * @type {number}
   * @group Constant
   * @category ShelfLife
   * @default 24
   */
  var SHELF_LIFE_DAY = 24;
  /**
   * 保质期：月
   * @type {number}
   * @group Constant
   * @category ShelfLife
   * @default 30 * SHELF_LIFE_DAY
   */
  var SHELF_LIFE_MONTH = 30 * SHELF_LIFE_DAY;
  /**
   * 保质期：年
   * @type {number}
   * @group Constant
   * @category ShelfLife
   * @default 365 * SHELF_LIFE_DAY
   */
  var SHELF_LIFE_YEAR = 365 * SHELF_LIFE_DAY;

  /**
   * 体积（单位： KB）
   * @type {number}
   * @group Constant
   * @category Size
   * @default 1024
   */
  var SIZE_KB = 1024;
  /**
   * 体积（单位： MB）
   * @type {number}
   * @group Constant
   * @category Size
   * @default 1024 * SIZE_KB
   */
  var SIZE_MB = 1024 * SIZE_KB;
  /**
   * 体积（单位： GB）
   * @type {number}
   * @group Constant
   * @category Size
   * @default 1024 * SIZE_MB
   */
  var SIZE_GB = 1024 * SIZE_MB;

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = true,
        o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = true, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  /**
  * 精确加法
  *
  * > 设计此函数的目的是为了解决浮点数四则运算的精度问题，如果参与运算的两个数值是整数，可不用此函数
  *
  * @group Function
  * @category Util
  * @param value1 第一个数值
  * @param value2 第二个数值
  * @returns 相加的结果
  * @example
  * plusNumber(3, 1) // 4
  */
  function plusNumber(value1, value2) {
    return NP__namespace.plus(value1, value2);
  }
  /**
  * 精确减法
  *
  * > 设计此函数的目的是为了解决浮点数四则运算的精度问题，如果参与运算的两个数值是整数，可不用此函数
  *
  * @group Function
  * @category Util
  * @param value1 第一个数值
  * @param value2 第二个数值
  * @returns 相减的结果
  * @example
  * minusNumber(3, 1) // 2
  */
  function minusNumber(value1, value2) {
    return NP__namespace.minus(value1, value2);
  }
  /**
   * 精确乘法
   *
   * > 设计此函数的目的是为了解决浮点数四则运算的精度问题，如果参与运算的两个数值是整数，可不用此函数
   *
   * @group Function
   * @category Util
   * @param value1 第一个数值
   * @param value2 第二个数值
   * @returns 相乘结果
   * @example
   * timesNumber(3, 2) // 6
   */
  function timesNumber(value1, value2) {
    return NP__namespace.times(value1, value2);
  }
  /**
  * 精确除法
  *
  * > 设计此函数的目的是为了解决浮点数四则运算的精度问题，如果参与运算的两个数值是整数，可不用此函数
  *
  * @group Function
  * @category Util
  * @param value1 被除数
  * @param value2 除数
  * @returns 相除的结果
  * @example
  * divideNumber(6, 2) // 3
  */
  function divideNumber(value1, value2) {
    if (value2 === 0) {
      throw new Error('Divisor cannot be zero');
    }
    return NP__namespace.divide(value1, value2);
  }
  /**
   * 截断数字
   *
   * > 解决 1.983.toFixed(1) 为 2.0 的问题
   *
   * @group Function
   * @category Util
   * @param value 需要截断的数字
   * @param decimals 截断的小数位数
   * @returns 截断后的数字字符串
   * @example
   * truncateNumber(1.983, 1) // 1.9
   */
  function truncateNumber(value) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var _value$toString$split = value.toString().split('.'),
      _value$toString$split2 = _slicedToArray(_value$toString$split, 2),
      integerPart = _value$toString$split2[0],
      decimalPart = _value$toString$split2[1];
    if (decimals === 0) {
      return integerPart;
    }
    if (!decimalPart) {
      return "".concat(integerPart, ".").concat(''.padEnd(decimals, '0'));
    }
    var truncatedDecimal = decimalPart.length > decimals ? decimalPart.substring(0, decimals) : decimalPart.padEnd(decimals, '0');
    return "".concat(integerPart, ".").concat(truncatedDecimal);
  }
  /**
   * 内部使用原生 parseInt 函数解析字符串中的整数
   *
   * > 设计此函数的目的是为了在 hive-dart、hive-go 中对齐相同的函数
   *
   * @group Function
   * @category Util
   * @param value 要解析的字符串
   * @param radix 进制
   * @returns 解析后的整数，解析失败返回 null
   */
  function parseInteger(value, radix) {
    var result = parseInt(value, radix);
    return isNaN(result) ? null : result;
  }
  /**
   * 内部使用原生 parseFloat 函数解析字符串中的浮点数
   *
   * > 设计此函数的目的是为了在 hive-dart、hive-go 中对齐相同的函数
   *
   * @group Function
   * @category Util
   * @param value 要解析的字符串
   * @returns 解析后的浮点数，解析失败返回 null
   */
  function parseNumber(value) {
    var result = parseFloat(value);
    return isNaN(result) ? null : result;
  }
  /**
   * 数字是否包含小数部分
   *
   * @group Function
   * @category Util
   * @param value 要校验的值
   * @returns 是否包含小数
   * @example
   * hasDecimal(1) // false
   * hasDecimal(1.0) // false
   * hasDecimal(1.5) // true
   */
  function hasDecimal(value) {
    // 先排除无效数字，它们既不是整数也没有小数
    if (!Number.isFinite(value)) {
      return false;
    }
    return value % 1 !== 0;
  }

  /**
   * 万分比 转换为 折扣，最多保留 1 位小数
   *
   * @group Function
   * @category Convert
   * @param value 后端的比例值
   * @returns
   */
  function discountToDisplay(value) {
    var result = divideNumber(value, 1000);
    // 如果小数部分为 0，返回整数部分
    // 如果有小数，保留 1 位小数
    return hasDecimal(result) ? +truncateNumber(result, 1) : Math.floor(result);
  }
  /**
   * 折扣 转换为 万分比
   *
   * @group Function
   * @category Convert
   * @param value 前端的比例值
   * @returns
   */
  function discountToBackend(value) {
    return Math.floor(timesNumber(hasDecimal(value) ? +truncateNumber(value, 1) : value, 1000));
  }

  /**
   * 米 转换为 千米
   *
   * @group Function
   * @category Convert
   * @param value 后端的比例值
   * @returns
   */
  function distanceToDisplay(value) {
    var result = divideNumber(value, 1000);
    // 如果小数部分为 0，返回整数部分
    return hasDecimal(result) ? result : Math.floor(result);
  }
  /**
   * 千米 转换为 米
   *
   * @group Function
   * @category Convert
   * @param value 前端的比例值
   * @returns
   */
  function distanceToBackend(value) {
    return Math.floor(timesNumber(value, 1000));
  }

  /**
   * 把金额转换为前端显示所用的格式
   *
   * @group Function
   * @category Convert
   * @param value 后端的金额值，单位是分
   * @returns
   */
  function moneyToDisplay(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MONEY_YUAN_TO_CENT;
    return divideNumber(value, unit);
  }
  /**
   * 把金额转换为后端接口所用的格式
   *
   * @group Function
   * @category Convert
   * @param value 前端的金额值
   * @returns
   */
  function moneyToBackend(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MONEY_YUAN_TO_CENT;
    return Math.floor(timesNumber(value, unit));
  }

  /**
   * 万分比 转换为 百分比
   *
   * @group Function
   * @category Convert
   * @param value 后端的比例值
   * @returns
   */
  function rateToDisplay(value) {
    var result = divideNumber(value, 100);
    // 如果小数部分为 0，返回整数部分
    return hasDecimal(result) ? result : Math.floor(result);
  }
  /**
   * 百分比 转换为 万分比
   *
   * @group Function
   * @category Convert
   * @param value 前端的比例值
   * @returns
   */
  function rateToBackend(value) {
    return Math.floor(timesNumber(value, 100));
  }

  /**
   * 时间对象转成结构化的对象
   *
   * @group Function
   * @category Convert
   * @param t 时间对象
   * @returns 结构化的对象
   */
  function timeToTimeField(t) {
    return {
      year: t.getFullYear(),
      month: t.getMonth() + 1,
      date: t.getDate(),
      hour: t.getHours(),
      minute: t.getMinutes(),
      second: t.getSeconds(),
      millisecond: t.getMilliseconds()
    };
  }
  /**
   * 结构化的对象转成时间对象
   *
   * @group Function
   * @category Convert
   * @param t 结构化的对象
   * @returns 时间对象
   */
  function timeFieldToTime(t) {
    return new Date(t.year, t.month - 1, t.date, t.hour, t.minute, t.second, t.millisecond);
  }
  /**
   * 时间对象转成时间戳
   *
   * @group Function
   * @category Convert
   * @param time 时间对象
   * @returns 时间戳
   */
  function timeToTimestamp(t) {
    var timestamp = t.getTime();
    return isNaN(timestamp) ? 0 : timestamp;
  }
  /**
   * 时间戳转成时间对象
   *
   * @group Function
   * @category Convert
   * @param timestamp 时间戳
   * @returns 时间对象
   */
  function timestampToTime(timestamp) {
    return new Date(timestamp);
  }

  /**
   * 毫克 转换为 克
   *
   * @group Function
   * @category Convert
   * @param value 后端的重量值，单位毫克
   * @returns
   */
  function weightToG(value) {
    return divideNumber(value, 1000);
  }
  /**
   * 毫克 转换为 千克
   *
   * @group Function
   * @category Convert
   * @param value 后端的重量值，单位毫克
   * @returns
   */
  function weightToKG(value) {
    return divideNumber(value, 1000000);
  }
  /**
   * 克 转为后端使用的 毫克
   *
   * @group Function
   * @category Convert
   * @param value 前端的重量值，单位是克
   * @returns
   */
  function weightGToBackend(value) {
    return Math.floor(timesNumber(value, 1000));
  }
  /**
   * 千克 转为后端使用的 毫克
   *
   * @group Function
   * @category Convert
   * @param value 前端的重量值，单位是千克
   * @returns
   */
  function weightKGToBackend(value) {
    return Math.floor(timesNumber(value, 1000000));
  }

  var provinceMap = {
    '北京市': '北京',
    '上海市': '上海',
    '天津市': '天津',
    '重庆市': '重庆'
  };
  var cityMap = {
    '省直辖县级行政区划': '省直辖',
    '自治区直辖县级行政区划': '省直辖',
    // 云南
    '楚雄彝族自治州': '楚雄',
    '红河哈尼族彝族自治州': '红河',
    '文山壮族苗族自治州': '文山',
    '西双版纳傣族自治州': '西双版纳',
    '大理白族自治州': '大理',
    '德宏傣族景颇族自治州': '德宏',
    '怒江傈僳族自治州': '怒江',
    '迪庆藏族自治州': '迪庆',
    // 湖北
    '恩施土家族苗族自治州': '恩施',
    // 湖南
    '湘西土家族苗族自治州': '湘西',
    // 甘肃
    '临夏回族自治州': '临夏',
    '甘南藏族自治州': '甘南',
    // 内蒙古
    '兴安盟': '兴安',
    '锡林郭勒盟': '锡林郭勒',
    '阿拉善盟': '阿拉善',
    // 青海
    '海北藏族自治州': '海北',
    '黄南藏族自治州': '黄南',
    '海南藏族自治州': '海南州',
    '果洛藏族自治州': '果洛',
    '玉树藏族自治州': '玉树',
    '海西蒙古族藏族自治州': '海西',
    // 吉林
    '延边朝鲜族自治州': '延边',
    // 四川
    '阿坝藏族羌族自治州': '阿坝',
    '甘孜藏族自治州': '甘孜',
    '凉山彝族自治州': '凉山',
    // 新疆
    '昌吉回族自治州': '昌吉',
    '博尔塔拉蒙古自治州': '博尔塔拉',
    '巴音郭楞蒙古自治州': '巴音郭楞',
    '阿克苏地区': '阿克苏',
    '克孜勒苏柯尔克孜自治州': '克孜勒苏柯尔克孜',
    '喀什地区': '喀什',
    '和田地区': '和田',
    '伊犁哈萨克自治州': '伊犁',
    '塔城地区': '塔城',
    '阿勒泰地区': '阿勒泰',
    // 贵州
    '黔西南布依族苗族自治州': '黔西南',
    '黔东南苗族侗族自治州': '黔东南',
    '黔南布依族苗族自治州': '黔南'
  };
  /**
   * 格式化地区
   *
   * @group Function
   * @category Format
   * @param value 地区对象
   * @param options 配置项
   * @returns 格式化后的字符串
   */
  function formatArea(area) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      simplify: true
    };
    var country = area.country,
      province = area.province,
      city = area.city,
      district = area.district,
      address = area.address;
    var list = [];
    var prevItem = '';
    var appendItem = function appendItem(item) {
      list.push(item);
      prevItem = item;
    };
    var isChina = false;
    var isSimplify = options.simplify;
    var separator = isSimplify ? ' ' : '';
    if (country) {
      var item = country.name;
      appendItem(item);
      if (item === '中国') {
        isChina = true;
      }
    }
    if (province) {
      appendItem(isSimplify ? formatProvince(province.name) : province.name);
    }
    if (city) {
      var _item = isSimplify ? formatCity(city.name) : city.name;
      if (_item && _item !== '市辖区' && _item !== '县' && _item !== '省直辖' && _item !== prevItem) {
        appendItem(_item);
      }
    }
    if (district) {
      var _item2 = isSimplify ? formatDistrict(district.name) : district.name;
      if (_item2) {
        appendItem(_item2);
      }
    }
    if (address) {
      appendItem(address);
    }
    if (list.length > 1 && isChina) {
      // 删掉中国
      list.shift();
    }
    return list.join(separator);
  }
  function formatProvince(name) {
    if (provinceMap[name]) {
      return provinceMap[name];
    }
    if (name.endsWith('省') || name.endsWith('州')) {
      return name.slice(0, -1);
    }
    if (name.startsWith('新疆') || name.startsWith('西藏') || name.startsWith('宁夏') || name.startsWith('广西') || name.startsWith('香港') || name.startsWith('澳门')) {
      return name.slice(0, 2);
    }
    if (name.startsWith('内蒙古')) {
      return name.slice(0, 3);
    }
    return name;
  }
  function formatCity(name) {
    // 有时候会把港澳台放到城市这级显示
    if (name.startsWith('中国')) {
      name = name.substring(2);
    }
    if (cityMap[name]) {
      return cityMap[name];
    }
    if (name.endsWith('市')) {
      return name.slice(0, -1);
    }
    if (name.endsWith('地区')) {
      return name.slice(0, -2);
    }
    if (name.endsWith('自治州')) {
      return name.slice(0, -3);
    }
    return name;
  }
  function formatDistrict(name) {
    if (name === '市辖区') {
      return '';
    }
    // 不要处理区，会影响有效信息展示
    return name;
  }

  /**
   * 格式化银行卡号
   *
   * @group Function
   * @category Format
   * @param value 银行卡号
   * @param masked 是否脱敏显示，默认脱敏
   * @returns 格式化后的字符串
   * @example
   * formatBankCardNumber('1111222233334444') // **** **** **** 4444
   * formatBankCardNumber('1111222233334444', false) // 1111 2222 3333 4444
   */
  function formatBankCardNumber(value) {
    var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var length = value.length;
    // 每 4 位一组，最后一组如果不足 4 位，有多少显示多少
    var parts = [];
    for (var i = 0; i < length; i += 4) {
      parts.push(value.substring(i, Math.min(i + 4, length)));
    }
    if (masked) {
      for (var _i = 0, len = parts.length; _i < len - 1; _i++) {
        parts[_i] = '****';
      }
    }
    return parts.join(' ');
  }

  /**
   * 把生日时间戳格式化为 `月.日` 格式，如 10.01
   *
   * @group Function
   * @category Format
   * @param value 生日毫秒时间戳
   * @param format 格式，默认是 DATE_MONTH_DATE_DOT
   * @returns 格式化后的字符串
   * @example
   * formatBirthday(1773469396771) // 03.14
   */
  function formatBirthday(value) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DATE_MONTH_DATE_DOT;
    return dayjs__default.default(value).format(format);
  }

  // 此文件的函数仅在内部使用，不对外暴露
  /**
   * 以较短的方式返回数字，避免 UI 层显示不下所有数字
   *
   * @param value
   * @param decimals
   * @returns
   */
  function shortNumber(value, formatUnshort) {
    if (value >= 1000000000000) {
      var trillion = divideNumber(value, 1000000000000);
      return truncateNumber(trillion, hasDecimal(trillion) ? 1 : 0) + '万亿';
    }
    if (value >= 100000000) {
      var billion = divideNumber(value, 100000000);
      return truncateNumber(billion, hasDecimal(billion) ? 1 : 0) + '亿';
    }
    if (value >= 10000) {
      var tenThousand = divideNumber(value, 10000);
      return truncateNumber(tenThousand, hasDecimal(tenThousand) ? 1 : 0) + '万';
    }
    return formatUnshort(value);
  }

  /**
   * 把数字的整数部分格式化为以千为段拆分，以逗号为分隔符
   *
   * @group Function
   * @category Format
   * @param value
   * @param decimals
   * @returns
   */
  function formatNumberWithComma(value) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var isNegative = value < 0;
    // 先转成正数，避免 - 号影响格式化流程
    if (isNegative) {
      value *= -1;
    }
    var newValue = decimals >= 0 ? truncateNumber(value, decimals) : value.toString();
    var _newValue$split = newValue.split('.'),
      _newValue$split2 = _slicedToArray(_newValue$split, 2),
      integerPart = _newValue$split2[0],
      decimalPart = _newValue$split2[1];
    // 格式化整数部分
    var list = [];
    var end = integerPart.length - 1;
    for (var i = end; i >= 0; i--) {
      if (i !== end && (end - i) % 3 === 0) {
        list.push(',');
      }
      list.push(integerPart.charAt(i));
    }
    var result = list.reverse().join('');
    // 处理小数部分
    if (decimalPart) {
      if (decimals > 0) {
        decimalPart = decimalPart.padEnd(decimals, '0');
        if (decimalPart.length > decimals) {
          decimalPart = decimalPart.slice(0, decimals);
        }
        result += ".".concat(decimalPart);
      }
    } else if (decimals > 0) {
      result += ".".concat(''.padEnd(decimals, '0'));
    }
    return isNegative ? '-' + result : result;
  }

  /**
   * 格式化数量
   *
   * @group Function
   * @category Format
   * @param value
   * @returns
   * @example
   * formatCount(1000) // 1,000
   * formatCount(1000, '个') // 1,000个
   */
  function formatCount(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return formatNumberWithComma(value) + unit;
  }
  /**
   * 格式化数量（以尽可能短的方式显示数量）
   *
   * @group Function
   * @category Format
   * @param value
   * @returns
   * @example
   * formatCountShortly(100000) // 10万
   * formatCountShortly(100000, '个') // 10万个
   */
  function formatCountShortly(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return shortNumber(value, function (value) {
      return value.toString();
    }) + unit;
  }

  /**
   * 格式化类目
   *
   * @group Function
   * @category Format
   * @param value 类目
   * @returns 格式化后的字符串
   * @example
   * formatCategory({ category1: { name: '手机' }, category2: { name: '手机通讯' }, category3: { name: '手机通讯' } }) // 手机/手机通讯/手机通讯
   */
  function formatCategory(category) {
    var list = [];
    if (category.category1) {
      list.push(category.category1.name);
    }
    if (category.category2) {
      list.push(category.category2.name);
    }
    if (category.category3) {
      list.push(category.category3.name);
    }
    return list.join('/');
  }

  /**
   * 把万分比格式化为常见的折扣显示格式
   *
   * @group Function
   * @category Format
   * @param value 万分比
   * @returns
   * @example
   * formatDiscount(8000) // 8折
   * formatDiscount(8800) // 8.8折
   */
  function formatDiscount(value) {
    return discountToDisplay(value) + '折';
  }

  /**
   * 把距离格式化为公里（公里比千米更符合国内用户认知）
   *
   * @group Function
   * @category Format
   * @param distance 距离，单位是米
   * @returns
   * @example
   * formatDistance(1000) // 1公里
   * formatDistance(10000) // 10公里
   */
  function formatDistance(distance) {
    return distanceToDisplay(distance) + '公里';
  }

  /**
   * 标准化时长
   *
   * @group Function
   * @category Normalize
   * @param value 时长，单位是毫秒
   * @returns 结构化的时长，包含天、小时、分钟、秒信息
   * @example
   * normalizeDuration(1000) // { days: 0, hours: 0, minutes: 0, seconds: 1 }
   */
  function normalizeDuration(value) {
    var result = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    if (value <= 0) {
      return result;
    }
    var seconds = Math.ceil(value / MS_SECOND);
    var minutes = Math.floor(value / MS_MINUTE);
    var hours = Math.floor(value / MS_HOUR);
    var days = Math.floor(value / MS_DAY);
    if (days > 0) {
      result.days = days;
    }
    if (hours % 24 > 0) {
      result.hours = hours % 24;
    }
    if (minutes % 60 > 0) {
      result.minutes = minutes % 60;
    }
    if (seconds % 60 > 0) {
      result.seconds = seconds % 60;
    }
    return result;
  }

  /**
   * 格式化时长
   *
   * @group Function
   * @category Format
   * @param value 时长，单位是毫秒
   * @returns 格式化后的字符串
   * @example
   * formatDuration(1000) // 1秒
   * formatDuration(60000) // 1分钟
   * formatDuration(3600000) // 1小时
   */
  function formatDuration(value) {
    var result = [];
    var data = normalizeDuration(value);
    if (data.days > 0) {
      result.push("".concat(data.days, "\u5929"));
    }
    if (data.hours > 0) {
      result.push("".concat(data.hours, "\u5C0F\u65F6"));
    }
    if (data.minutes > 0) {
      result.push("".concat(data.minutes, "\u5206\u949F"));
    }
    if (data.seconds > 0) {
      result.push("".concat(data.seconds, "\u79D2"));
    }
    return result.join('');
  }

  /**
   * 把时间戳格式化为 2020-10-01 格式
   *
   * @group Function
   * @category Format
   * @param timestamp 毫秒时间戳
   * @param format 格式，默认值为 DATE_YEAR_MONTH_DATE
   * @returns
   */
  function formatDate(timestamp) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DATE_YEAR_MONTH_DATE;
    return dayjs__default.default(timestamp).format(format);
  }
  /**
   * 把时间戳格式化为 2020-10-01 至 2020-10-02 形式
   *
   * @group Function
   * @category Format
   * @param startTimestamp 开始时间的毫秒时间戳
   * @param endTimestamp 结束时间的毫秒时间戳
   * @returns
   */
  function formatDateRange(startTimestamp, endTimestamp) {
    return formatDate(startTimestamp) + ' 至 ' + formatDate(endTimestamp);
  }
  /**
   * 把同年份的时间戳格式化为 10-01 格式，不同年份的时间戳格式化成 2020-10-01 格式
   *
   * @group Function
   * @category Format
   * @param timestamp 毫秒时间戳
   * @returns
   */
  function formatDateShortly(timestamp) {
    var t1 = dayjs__default.default(timestamp);
    var t2 = dayjs__default.default(Date.now());
    if (t1.year() === t2.year()) {
      return t1.format(DATE_MONTH_DATE);
    }
    return dayjs__default.default(timestamp).format(DATE_YEAR_MONTH_DATE);
  }

  /**
   * 把时间戳格式化为 2020-10-01 10:00 格式
   *
   * @group Function
   * @category Format
   * @param timestamp 毫秒时间戳
   * @param format 格式，默认值为 DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE
   * @returns
   */
  function formatDateTime(timestamp) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE;
    return dayjs__default.default(timestamp).format(format);
  }
  /**
   * 把时间戳格式化为 2020-10-01 00:00 至 2020-10-02 00:00 形式
   *
   * @group Function
   * @category Format
   * @param startTimestamp 开始时间的毫秒时间戳
   * @param endTimestamp 结束时间的毫秒时间戳
   * @returns
   */
  function formatDateTimeRange(startTimestamp, endTimestamp) {
    return formatDateTime(startTimestamp) + ' 至 ' + formatDateTime(endTimestamp);
  }
  /**
   * 把同年份的时间戳格式化为 10-01 10:00 格式，不同年份的时间戳格式化成 2020-10-01 10:00 格式
   *
   * @group Function
   * @category Format
   * @param timestamp 毫秒时间戳
   * @returns
   */
  function formatDateTimeShortly(timestamp) {
    var t1 = dayjs__default.default(timestamp);
    var t2 = dayjs__default.default(Date.now());
    if (t1.year() === t2.year()) {
      return t1.format(DATE_TIME_MONTH_DATE_HOUR_MINUTE);
    }
    return dayjs__default.default(timestamp).format(DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE);
  }

  /**
   * 把时间戳格式化为 周开始 ~ 周结束 格式
   *
   * @group Function
   * @category Format
   * @param value 毫秒时间戳
   * @returns
   */
  function formatWeek(value) {
    var date = new Date(value);
    var offset = -1 * date.getDay();
    var startTimestamp = value + offset * MS_DAY;
    return "".concat(formatDateShortly(startTimestamp), " \u81F3 ").concat(formatDateShortly(startTimestamp + 6 * MS_DAY));
  }

  /**
   * 把时间戳格式化为月份（包含年和月）
   *
   * @group Function
   * @category Format
   * @param value 毫秒时间戳
   * @param format 格式，默认是 yyyy-MM，如果不符合要求，从 MONTH_XX 常量选择
   * @returns
   * @example
   * formatMonth(1601513800000) // 2020-10
   */
  function formatMonth(value) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MONTH_DEFAULT;
    return dayjs__default.default(value).format(format);
  }

  /**
   * 把时间戳格式化为显示格式
   *
   * @group Function
   * @category Format
   * @param timestamp 毫秒时间戳
   * @param format 格式，默认值为 YEAR_DEFAULT
   * @returns 格式化后的字符串
   * @example
   * formatYear(1773932460475) // 2026
   */
  function formatYear(timestamp) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : YEAR_DEFAULT;
    return dayjs__default.default(timestamp).format(format);
  }

  /**
   * 格式化金额（元），保留 2 位小数
   *
   * @group Function
   * @category Format
   * @param value 单位是分的金额
   * @returns 格式化后的字符串
   * @example
   * formatAmount(1000) // 10.00元
   * formatAmount(1000, '') // 10.00
   */
  function formatAmount(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '元';
    return formatNumberWithComma(moneyToDisplay(value), 2) + unit;
  }
  /**
   * 格式化金额（厘），保留 3 位小数
   *
   * @group Function
   * @category Format
   * @param value 单位是厘的金额
   * @returns 格式化后的字符串
   * @example
   * formatPenny(10000) // 10.000元
   * formatPenny(10000, '') // 10.000
   */
  function formatPenny(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '元';
    return formatNumberWithComma(moneyToDisplay(value, MONEY_YUAN_TO_PENNY), 3) + unit;
  }
  /**
   * 格式化金额（元），以较短的方式返回
   *
   * @group Function
   * @category Format
   * @param value 单位是分的金额
   * @returns 格式化后的字符串
   * @example
   * formatAmountShortly(10000000) // 10万元
   * formatAmountShortly(10000000, '') // 10万
   */
  function formatAmountShortly(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '元';
    return shortNumber(moneyToDisplay(value), function (value) {
      return truncateNumber(value, 2);
    }) + unit;
  }

  /**
   * 把万分比格式化为百分比
   *
   * @group Function
   * @category Format
   * @param value 万分比
   * @returns 格式化后的百分比字符串
   * @example
   * formatRatePercent(8000) // 80%
   * formatRatePercent(8800) // 88%
   */
  function formatRatePercent(value) {
    return rateToDisplay(value) + '%';
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
  function normalizeShelfLife(value) {
    var result = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0
    };
    if (value <= 0) {
      return result;
    }
    var years = Math.floor(value / SHELF_LIFE_YEAR);
    if (years > 0) {
      result.years = years;
      value -= SHELF_LIFE_YEAR * years;
    }
    var months = Math.floor(value / SHELF_LIFE_MONTH);
    if (months > 0) {
      result.months = months;
      value -= SHELF_LIFE_MONTH * months;
    }
    var days = Math.floor(value / SHELF_LIFE_DAY);
    if (days > 0) {
      result.days = days;
      value -= SHELF_LIFE_DAY * days;
    }
    if (value > 0) {
      result.hours = value;
    }
    return result;
  }

  /**
   * 格式化有效期
   *
   * @group Function
   * @category Format
   * @param value 有效期，单位是小时
   * @returns 格式化后的字符串
   * @example
   * formatShelfLife(24) // 1天
   * formatShelfLife(48) // 2天
   * formatShelfLife(365 * 24) // 1年
   */
  function formatShelfLife(value) {
    var result = [];
    var data = normalizeShelfLife(value);
    if (data.years > 0) {
      result.push("".concat(data.years, "\u5E74"));
    }
    if (data.months > 0) {
      result.push("".concat(data.months, "\u4E2A\u6708"));
    }
    if (data.days > 0) {
      result.push("".concat(data.days, "\u5929"));
    }
    if (data.hours > 0) {
      result.push("".concat(data.hours, "\u5C0F\u65F6"));
    }
    return result.join('');
  }

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
  function formatSize(value) {
    if (value >= SIZE_GB) {
      var result = divideNumber(value, SIZE_GB);
      return "".concat(truncateNumber(result, hasDecimal(result) ? 2 : 0), "GB");
    } else if (value >= SIZE_MB) {
      var _result = divideNumber(value, SIZE_MB);
      return "".concat(truncateNumber(_result, hasDecimal(_result) ? 2 : 0), "MB");
    } else if (value >= SIZE_KB) {
      var _result2 = divideNumber(value, SIZE_KB);
      return "".concat(truncateNumber(_result2, hasDecimal(_result2) ? 2 : 0), "KB");
    }
    return "".concat(value, "B");
  }

  /**
   * 把时间戳格式化为显示格式
   *
   * @group Function
   * @category Format
   * @param timestamp 毫秒时间戳
   * @param format 格式，默认值为 TIME_DEFAULT
   * @returns 格式化后的字符串
   * @example
   * formatTime(1773932460475) // 23:01:00
   */
  function formatTime(timestamp) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TIME_DEFAULT;
    return dayjs__default.default(timestamp).format(format);
  }

  /**
   * 获取字符串字符数量
   *
   * 注意：中文和英文都算 1 个字符
   *
   * @group Function
   * @category Util
   * @param str 目标字符串
   * @returns 字符串字符数量
   */
  function getStringLength(str) {
    return str.length;
  }
  /**
   * 获取字符串宽度，此函数常用于排版辅助计算
   *
   * 注意：中文算 2 个单位，英文数字算 1 个单位
   *
   * @group Function
   * @category Util
   * @param str 目标字符串
   * @returns 字符串宽度
   */
  function getStringWidth(str) {
    if (!str) {
      return 0;
    }
    // 匹配所有宽字符（中文字符、全角标点等）
    var wideCharRegex = /[^\x00-\xff]|[｡-ﾟ]/g;
    var wideMatches = str.match(wideCharRegex);
    // 宽字符数量
    var wideCount = wideMatches ? wideMatches.length : 0;
    // 窄字符数量
    var narrowCount = str.length - wideCount;
    return wideCount * 2 + narrowCount;
  }
  /**
   * 移除字符串开头和结尾的空白符
   *
   * @group Function
   * @category Util
   * @param str 要截断的字符串
   * @returns 移除空白符后的字符串
   */
  function trimString(str) {
    return str.trim();
  }
  /**
   * 截取字符串
   *
   * @group Function
   * @category Util
   * @param str 要截断的字符串
   * @param start 开始索引
   * @param end 结束索引
   * @returns 截取后的字符串
   */
  function sliceString(str, start, end) {
    return str.slice(start, end);
  }
  /**
   * 截断字符串，最多显示 maxLength 个字符，超过部分用省略号表示
   *
   * 注意：中文和英文都算 1 个字符
   *
   * @group Function
   * @category Util
   * @param str 要截断的字符串
   * @param maxLength 最大长度
   * @returns 截断后的字符串
   */
  function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    }
    if (maxLength <= 3) {
      return str.slice(0, maxLength);
    }
    return str.slice(0, maxLength - 3) + '...';
  }
  /**
   * 渲染字符串模板
   *
   * @group Function
   * @category Util
   * @param str 字符串模板，例如：'你好，${name}'
   * @param data 数据对象，例如：{ name: '张三' }
   * @returns 渲染后的字符串，例如：'你好，张三'
   */
  function renderStringTemplate(str, data) {
    return str.replace(/\${(.*?)}/g, function (match, key) {
      // 去除变量名两端的空白
      var value = data[trimString(key)];
      // 如果找不到对应的值，返回原字符串
      return value !== undefined ? String(value) : match;
    });
  }
  /**
   * 补全字符串开头，不足 length 个字符用 0 填充
   *
   * @group Function
   * @category Util
   * @param str 要补全的字符串
   * @param length 目标长度
   * @returns 补全后的字符串
   */
  function padStringStart(str, length) {
    return str.padStart(length, '0');
  }
  /**
   * 判断字符串是否包含特殊字符
   *
   * @group Function
   * @category Util
   * @param str 目标字符串
   * @returns 是否包含特殊字符
   */
  function hasSpecialCharacter(str) {
    if (!str) {
      return false;
    }
    return /(?:[\0-\x1F\$\^`\x7F-\x9F\xA2-\xA6\xA8\xA9\xAD-\xB0\xB4\xB8\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u0380-\u0385\u038B\u038D\u03A2\u0482-\u0489\u0530\u0557\u0558\u058B-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7-\u05CF\u05EB-\u05EE\u05F5-\u0605\u060B\u060E-\u061A\u061C\u064B-\u065F\u0670\u06D6-\u06E4\u06E7-\u06ED\u06FD\u06FE\u070E\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07BF\u07EB-\u07F3\u07F6\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082F\u083F\u0859-\u085D\u085F\u086B-\u086F\u0888\u088F-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09E5\u09F2\u09F3\u09FA\u09FB\u09FE-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A65\u0A70\u0A71\u0A75\u0A77-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AE5\u0AF1-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B65\u0B70\u0B78-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0BE5\u0BF3-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C62-\u0C65\u0C70-\u0C76\u0C7F\u0C81-\u0C83\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDC\u0CDF\u0CE2-\u0CE5\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57\u0D62-\u0D65\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DE5\u0DF0-\u0DF3\u0DF5-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E4E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F03\u0F13\u0F15-\u0F1F\u0F34-\u0F39\u0F3E\u0F3F\u0F48\u0F6D-\u0F84\u0F86\u0F87\u0F8D-\u0FCF\u0FD5-\u0FD8\u0FDB-\u0FFF\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u135F\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE\u13FF\u166D\u169D-\u169F\u16F9-\u16FF\u1712-\u171E\u1732-\u1734\u1737-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D3\u17DB\u17DD-\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180B-\u180F\u181A-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A17-\u1A1D\u1A55-\u1A7F\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE-\u1B04\u1B34-\u1B44\u1B4D\u1B61-\u1B7C\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BFB\u1C24-\u1C3A\u1C4A-\u1C4C\u1C8B-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u214A\u214C\u214D\u214F\u218A-\u218F\u2195-\u2199\u219C-\u219F\u21A1\u21A2\u21A4\u21A5\u21A7-\u21AD\u21AF-\u21CD\u21D0\u21D1\u21D3\u21D5-\u21F3\u2300-\u2307\u230C-\u231F\u2322-\u2328\u232B-\u237B\u237D-\u239A\u23B4-\u23DB\u23E2-\u245F\u249C-\u24E9\u2500-\u25B6\u25B8-\u25C0\u25C2-\u25F7\u2600-\u266E\u2670-\u2767\u2794-\u27BF\u2800-\u28FF\u2B00-\u2B2F\u2B45\u2B46\u2B4D-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2DFF\u2E50\u2E51\u2E5E-\u2FFF\u3004\u3012\u3013\u3020\u302A-\u302F\u3036\u3037\u303E-\u3040\u3097-\u309C\u3100-\u3104\u3130\u318F-\u3191\u3196-\u319F\u31C0-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA62C-\uA63F\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA6F8-\uA716\uA720\uA721\uA789\uA78A\uA7CE\uA7CF\uA7D2\uA7D4\uA7DD-\uA7F1\uA802\uA806\uA80B\uA823-\uA82F\uA836-\uA83F\uA878-\uA881\uA8B4-\uA8CD\uA8DA-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA95E\uA97D-\uA983\uA9B3-\uA9C0\uA9CE\uA9DA-\uA9DD\uA9E5\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA4F\uAA5A\uAA5B\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAAEB-\uAAEF\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABEA\uABEC-\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE0F\uFE1A-\uFE2F\uFE53\uFE67\uFE69\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFF04\uFF3E\uFF40\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFE1\uFFE3-\uFFE8\uFFED-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD3F\uDD79-\uDD89\uDD8C-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEE0\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF76-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDBF\uDDF4-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC77\uDC78\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE3F\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEC8\uDEE5-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD24-\uDD2F\uDD3A-\uDD3F\uDD66-\uDD6D\uDD86-\uDD8D\uDD90-\uDE5F\uDE7F\uDEAA-\uDEAC\uDEAE\uDEAF\uDEB2-\uDEC1\uDEC5-\uDEFF\uDF28-\uDF2F\uDF46-\uDF50\uDF5A-\uDF6F\uDF82-\uDF85\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC4E-\uDC51\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCBA\uDCBD\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDD02\uDD27-\uDD35\uDD45\uDD46\uDD48-\uDD4F\uDD73\uDD77-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE2C-\uDE37\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEDF-\uDEEF\uDEFA-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDF7F\uDF8A\uDF8C\uDF8D\uDF8F\uDFB6\uDFB8-\uDFD0\uDFD2\uDFD6\uDFD9-\uDFFF]|\uD805[\uDC35-\uDC46\uDC5C\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDAF-\uDDC0\uDDDC-\uDDFF\uDE30-\uDE40\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEAB-\uDEB7\uDEBA-\uDEBF\uDECA-\uDECF\uDEE4-\uDEFF\uDF1B-\uDF2F\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC3A\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42\uDD43\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE99\uDEA3-\uDEAF\uDEF9-\uDEFF\uDF0A-\uDFBF\uDFE2-\uDFEF\uDFFA-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF3-\uDEF6\uDEF9-\uDF01\uDF03\uDF11\uDF34-\uDF42\uDF5A-\uDFAF\uDFB1-\uDFBF\uDFD5-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD812-\uD817\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83D\uD83F\uD87C\uD87D\uD87F\uD889-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDC5F]|\uD810[\uDFFB-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD818[\uDC00-\uDCFF\uDD1E-\uDD2F\uDD3A-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE-\uDEF4\uDEF6-\uDEFF\uDF30-\uDF36\uDF3C-\uDF3F\uDF45-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDD3F\uDD7A-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE4-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFE\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9E\uDCA0-\uDFFF]|\uD833[\uDC00-\uDCEF\uDCFA-\uDFFF]|\uD834[\uDC00-\uDEBF\uDED4-\uDEDF\uDEF4-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDC00-\uDE86\uDE8C-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDEEF\uDEFA-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDCEF\uDCFA-\uDDCF\uDDEE\uDDEF\uDDFB-\uDDFE\uDE00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD0-\uDCFF\uDD44-\uDD4A\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCAC\uDCB0\uDCB5-\uDD00\uDD2E\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF3A-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFEF]|\uD87B[\uDE5E-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD888[\uDFB0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/.test(str);
  }
  /**
   * 移除字符串中的特殊字符
   *
   * @group Function
   * @category Util
   * @param str 目标字符串
   * @returns 清理后的字符串
   */
  function removeSpecialCharacter(str) {
    if (!str) {
      return '';
    }
    return str.replace(/(?:[\0-\x1F\$\^`\x7F-\x9F\xA2-\xA6\xA8\xA9\xAD-\xB0\xB4\xB8\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u0380-\u0385\u038B\u038D\u03A2\u0482-\u0489\u0530\u0557\u0558\u058B-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7-\u05CF\u05EB-\u05EE\u05F5-\u0605\u060B\u060E-\u061A\u061C\u064B-\u065F\u0670\u06D6-\u06E4\u06E7-\u06ED\u06FD\u06FE\u070E\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07BF\u07EB-\u07F3\u07F6\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082F\u083F\u0859-\u085D\u085F\u086B-\u086F\u0888\u088F-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09E5\u09F2\u09F3\u09FA\u09FB\u09FE-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A65\u0A70\u0A71\u0A75\u0A77-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AE5\u0AF1-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B65\u0B70\u0B78-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0BE5\u0BF3-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C62-\u0C65\u0C70-\u0C76\u0C7F\u0C81-\u0C83\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDC\u0CDF\u0CE2-\u0CE5\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57\u0D62-\u0D65\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DE5\u0DF0-\u0DF3\u0DF5-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E4E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F03\u0F13\u0F15-\u0F1F\u0F34-\u0F39\u0F3E\u0F3F\u0F48\u0F6D-\u0F84\u0F86\u0F87\u0F8D-\u0FCF\u0FD5-\u0FD8\u0FDB-\u0FFF\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u135F\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE\u13FF\u166D\u169D-\u169F\u16F9-\u16FF\u1712-\u171E\u1732-\u1734\u1737-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D3\u17DB\u17DD-\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180B-\u180F\u181A-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A17-\u1A1D\u1A55-\u1A7F\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE-\u1B04\u1B34-\u1B44\u1B4D\u1B61-\u1B7C\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BFB\u1C24-\u1C3A\u1C4A-\u1C4C\u1C8B-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u214A\u214C\u214D\u214F\u218A-\u218F\u2195-\u2199\u219C-\u219F\u21A1\u21A2\u21A4\u21A5\u21A7-\u21AD\u21AF-\u21CD\u21D0\u21D1\u21D3\u21D5-\u21F3\u2300-\u2307\u230C-\u231F\u2322-\u2328\u232B-\u237B\u237D-\u239A\u23B4-\u23DB\u23E2-\u245F\u249C-\u24E9\u2500-\u25B6\u25B8-\u25C0\u25C2-\u25F7\u2600-\u266E\u2670-\u2767\u2794-\u27BF\u2800-\u28FF\u2B00-\u2B2F\u2B45\u2B46\u2B4D-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2DFF\u2E50\u2E51\u2E5E-\u2FFF\u3004\u3012\u3013\u3020\u302A-\u302F\u3036\u3037\u303E-\u3040\u3097-\u309C\u3100-\u3104\u3130\u318F-\u3191\u3196-\u319F\u31C0-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA62C-\uA63F\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA6F8-\uA716\uA720\uA721\uA789\uA78A\uA7CE\uA7CF\uA7D2\uA7D4\uA7DD-\uA7F1\uA802\uA806\uA80B\uA823-\uA82F\uA836-\uA83F\uA878-\uA881\uA8B4-\uA8CD\uA8DA-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA95E\uA97D-\uA983\uA9B3-\uA9C0\uA9CE\uA9DA-\uA9DD\uA9E5\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA4F\uAA5A\uAA5B\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAAEB-\uAAEF\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABEA\uABEC-\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE0F\uFE1A-\uFE2F\uFE53\uFE67\uFE69\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFF04\uFF3E\uFF40\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFE1\uFFE3-\uFFE8\uFFED-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD3F\uDD79-\uDD89\uDD8C-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEE0\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF76-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDBF\uDDF4-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC77\uDC78\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE3F\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEC8\uDEE5-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD24-\uDD2F\uDD3A-\uDD3F\uDD66-\uDD6D\uDD86-\uDD8D\uDD90-\uDE5F\uDE7F\uDEAA-\uDEAC\uDEAE\uDEAF\uDEB2-\uDEC1\uDEC5-\uDEFF\uDF28-\uDF2F\uDF46-\uDF50\uDF5A-\uDF6F\uDF82-\uDF85\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC4E-\uDC51\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCBA\uDCBD\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDD02\uDD27-\uDD35\uDD45\uDD46\uDD48-\uDD4F\uDD73\uDD77-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE2C-\uDE37\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEDF-\uDEEF\uDEFA-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDF7F\uDF8A\uDF8C\uDF8D\uDF8F\uDFB6\uDFB8-\uDFD0\uDFD2\uDFD6\uDFD9-\uDFFF]|\uD805[\uDC35-\uDC46\uDC5C\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDAF-\uDDC0\uDDDC-\uDDFF\uDE30-\uDE40\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEAB-\uDEB7\uDEBA-\uDEBF\uDECA-\uDECF\uDEE4-\uDEFF\uDF1B-\uDF2F\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC3A\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42\uDD43\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE99\uDEA3-\uDEAF\uDEF9-\uDEFF\uDF0A-\uDFBF\uDFE2-\uDFEF\uDFFA-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF3-\uDEF6\uDEF9-\uDF01\uDF03\uDF11\uDF34-\uDF42\uDF5A-\uDFAF\uDFB1-\uDFBF\uDFD5-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD812-\uD817\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83D\uD83F\uD87C\uD87D\uD87F\uD889-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDC5F]|\uD810[\uDFFB-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD818[\uDC00-\uDCFF\uDD1E-\uDD2F\uDD3A-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE-\uDEF4\uDEF6-\uDEFF\uDF30-\uDF36\uDF3C-\uDF3F\uDF45-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDD3F\uDD7A-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE4-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFE\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9E\uDCA0-\uDFFF]|\uD833[\uDC00-\uDCEF\uDCFA-\uDFFF]|\uD834[\uDC00-\uDEBF\uDED4-\uDEDF\uDEF4-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDC00-\uDE86\uDE8C-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDEEF\uDEFA-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDCEF\uDCFA-\uDDCF\uDDEE\uDDEF\uDDFB-\uDDFE\uDE00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD0-\uDCFF\uDD44-\uDD4A\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCAC\uDCB0\uDCB5-\uDD00\uDD2E\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF3A-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFEF]|\uD87B[\uDE5E-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD888[\uDFB0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, '');
  }

  function formatHourMinutes(value) {
    var hours = Math.floor(value / 60);
    var minutes = value % 60;
    return "".concat(padStringStart(hours.toString(), 2), ":").concat(padStringStart(minutes.toString(), 2));
  }
  /**
   * 格式化营业时间
   *
   * @group Function
   * @category Format
   * @param value 营业时间时段范围为 [0, 2880] 可跨天, 0-1440 为当天，1440-2880 为次日
   * @returns 格式化后的字符串
   * @example
   * formatBusinessTimes([0, 1440]) // 全天
   */
  function formatBusinessTimes(value) {
    var len = value.length;
    if (len === 0 || len % 2 !== 0) {
      return '';
    }
    var timeRanges = [];
    for (var i = 0; i < len; i += 2) {
      var start = value[i];
      var end = value[i + 1];
      var startTime = start % 1440;
      var endTime = end % 1440;
      // 判断是否是全天
      if (startTime === 0 && endTime === 0 && end > start) {
        timeRanges.push('全天');
        continue;
      }
      var startTimeStr = formatHourMinutes(startTime);
      if (start > 1440) {
        startTimeStr = "\u6B21\u65E5".concat(startTimeStr);
      }
      var endTimeStr = formatHourMinutes(endTime);
      if (end > 1440) {
        endTimeStr = "\u6B21\u65E5".concat(endTimeStr);
      }
      timeRanges.push("".concat(startTimeStr, "-").concat(endTimeStr));
    }
    return timeRanges.join('、');
  }

  /**
   * 是否为银行卡号码
   *
   * @group Function
   * @category Is
   * @param value 要校验的字符串
   * @returns 是否为银行卡号码
   * @example
   * isBankCardNumber('1234567890123') // false
   */
  function isBankCardNumber(value) {
    // 1. 基础验证：只能是数字
    if (!/^\d+$/.test(value)) {
      return false;
    }
    // 2. 长度验证：银行卡号长度通常在 13-19 位之间
    if (value.length < 13 || value.length > 19) {
      return false;
    }
    // 3. Luhn 算法验证
    return luhnCheck(value);
  }
  /**
   * Luhn 算法验证（模10算法）
   *
   * 算法步骤：
   * 1. 从右向左，将每一位数字隔位乘以2
   * 2. 如果乘以2后的数字大于9，则减去9（或相加各位数字）
   * 3. 将所有数字相加
   * 4. 如果总和能被10整除，则有效
   *
   * @param digits 数字字符串
   * @returns 是否通过校验
   */
  function luhnCheck(digits) {
    var sum = 0;
    var isEven = false;
    // 从右向左遍历
    for (var i = digits.length - 1; i >= 0; i--) {
      var digit = parseInt(digits[i], 10);
      // 隔位乘以2
      if (isEven) {
        digit *= 2;
        // 如果大于9，减去9（等同于各位数字相加）
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isEven = !isEven;
    }
    return sum % 10 === 0;
  }

  /**
   * 是否是标准商品条形码
   *
   * @group Function
   * @category Is
   * @param value 要校验的字符串
   * @returns 是否是标准商品条形码
   * @example
   * isStandardBarcode('6901234567890') // true
   */
  function isStandardBarcode(value) {
    // EAN 码：通常是69开头，13位数字
    // UPC 码：通常以0开头，12位数字
    var length = value.length;
    if (length === 8 || length === 12 || length === 13 || length === 14) {
      return /^\d+$/.test(value);
    }
    return false;
  }
  /**
   * 是否是自定义商品条形码
   *
   * @group Function
   * @category Is
   * @param value 要校验的字符串
   * @returns 是否是自定义商品条形码
   * @example
   * isCustomBarcode('6901234567890') // false
   */
  function isCustomBarcode(value) {
    // 自定义条码，规则为 大写字母开头跟 10-12 个数字
    if (/^[A-Z]\d{10,12}$/.test(value)) {
      return true;
    }
    // 这里留给以后加其他规则
    return false;
  }

  /**
   * 将 HEX 颜色转换为 RGBA 对象
   *
   * @group Function
   * @category Util
   * @param color HEX 颜色值
   * @returns RGBA 颜色对象
   * @example
   * hexToRgbaObject('#FF0000') // { red: 255, green: 0, blue: 0, alpha: 1 }
   * hexToRgbaObject('#FF000000') // { red: 255, green: 0, blue: 0, alpha: 0 }
   */
  function hexToRgbaObject(color) {
    // 移除 # 号
    var hex = color.replace('#', '');
    // 处理简写格式 (#rgb 或 #rgba)
    if (hex.length === 3 || hex.length === 4) {
      hex = hex.split('').map(function (_char) {
        return _char + _char;
      }).join('');
    }
    // 验证hex长度
    if (hex.length !== 6 && hex.length !== 8) {
      throw new Error('无效的HEX颜色格式');
    }
    var result = {
      red: parseInt(hex.substring(0, 2), 16),
      green: parseInt(hex.substring(2, 4), 16),
      blue: parseInt(hex.substring(4, 6), 16),
      alpha: 1
    };
    if (hex.length === 8) {
      result.alpha = parseInt(hex.substring(6, 8), 16) / 255;
    }
    return result;
  }
  /**
   * 将 HEX 颜色转换为 HSL 对象
   *
   * @group Function
   * @category Util
   * @param color HEX 颜色值
   * @returns HSL 颜色对象
   * @example
   * hexToHslObject('#FF0000') // { hue: 0, saturation: 100, lightness: 50 }
   */
  function hexToHslObject(color) {
    return rgbToHsl(hexToRgbaObject(color));
  }
  /**
   * 将 HEX 颜色转换为 RGBA 字符串格式
   *
   * 使用场景是给颜色应用一个新的透明度
   *
   * @group Function
   * @category Util
   * @param color HEX 颜色值
   * @param alpha 透明度，取值范围 [0, 1]
   * @returns RGBA 颜色字符串
   * @example
   * hexToRgbaString('#FF0000', 0.5) // rgba(255,0,0,0.5)
   */
  function hexToRgbaString(color, alpha) {
    var rgba = hexToRgbaObject(color);
    return "rgba(".concat(rgba.red, ",").concat(rgba.green, ",").concat(rgba.blue, ",").concat(alpha, ")");
  }
  /**
   * 加深颜色亮度
   *
   * @group Function
   * @category Util
   * @param color HEX 颜色值
   * @param offset 加深幅度，取值范围 [0, 1]
   * @returns 新的 hex 颜色
   * @example
   * darkenColor('#999999', 0.1) // #808080
   * darkenColor('#999999', 0.2) // #666666
   */
  function darkenColor(color, offset) {
    return adjustColorBrightness(color, -offset);
  }
  /**
   * 减淡颜色亮度
   *
   * @group Function
   * @category Util
   * @param color HEX 颜色值
   * @param offset 减淡幅度，取值范围 [0, 1]
   * @returns 新的 hex 颜色
   * @example
   * lightenColor('#999999', 0.1) // #B3B3B3
   * lightenColor('#999999', 0.2) // #CCCCCC
   */
  function lightenColor(color, offset) {
    return adjustColorBrightness(color, offset);
  }
  /**
   * 调整颜色亮度
   *
   * @param hex 原始颜色
   * @param offset 取值范围 [0, 1]
   * @returns 新的 hex 颜色字符串
   */
  function adjustColorBrightness(hex, offset) {
    var rgba = hexToRgbaObject(hex);
    var hsl = rgbToHsl(rgba);
    // 调整亮度，限制在 0-100 之间
    var newL = hsl.lightness + offset * 100;
    hsl.lightness = Math.max(0, Math.min(100, newL));
    var newRgb = hslToRgb(hsl);
    // 如果原颜色有透明度，返回值保留该透明度
    var result = "#".concat(toHex(newRgb.red)).concat(toHex(newRgb.green)).concat(toHex(newRgb.blue));
    if (rgba.alpha < 1) {
      result += toHex(rgba.alpha * 255);
    }
    return result;
  }
  /**
   * 将 RGB 转换为 HSL
   * r, g, b: 0-255
   * 返回 h: 0-360, s: 0-100, l: 0-100
   */
  function rgbToHsl(rgb) {
    var r = rgb.red / 255;
    var g = rgb.green / 255;
    var b = rgb.blue / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max !== min) {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h *= 60;
    }
    return {
      hue: h,
      saturation: s * 100,
      lightness: l * 100
    };
  }
  /**
   * 将 HSL 转换为 RGB
   * 返回 r, g, b: 0-255
   */
  function hslToRgb(hsl) {
    var h = hsl.hue / 360;
    var s = hsl.saturation / 100;
    var l = hsl.lightness / 100;
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    var r = hue2rgb(p, q, h + 1 / 3);
    var g = hue2rgb(p, q, h);
    var b = hue2rgb(p, q, h - 1 / 3);
    return {
      red: Math.round(r * 255),
      green: Math.round(g * 255),
      blue: Math.round(b * 255),
      alpha: 1
    };
  }
  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }
  function toHex(color) {
    return padStringStart(color.toString(16).toUpperCase(), 2);
  }

  /**
   * 是否为十六进制颜色
   *
   * @group Function
   * @category Is
   * @param value 要校验的字符串
   * @returns 是否为十六进制颜色
   * @example
   * isHexColor('#666') // true
   * isHexColor('#666666') // true
   * isHexColor('#66666666') // true 注意，这是一个 RGBA 颜色
   */
  function isHexColor(value) {
    if (value.indexOf('#') !== 0) {
      return false;
    }
    try {
      hexToRgbaObject(value);
      return true;
    } catch (_unused) {
      return false;
    }
  }

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
  function isCorporateAccountNumber(value) {
    return /^\d{9,22}$/.test(value);
  }

  /**
   * 是否为邮箱
   *
   * @group Function
   * @category Is
   * @param value 要校验的字符串
   * @returns 是否为邮箱
   * @example
   * isEmail('test@example.com') // true
   */
  function isEmail(value) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
  }

  /**
   * 是否为身份证号码
   *
   * @group Function
   * @category Is
   * @param value 要校验的字符串
   * @returns 是否为身份证号码
   * @example
   * isIdentityCardNumber('312456123548741235') // false
   */
  function isIdentityCardNumber(value) {
    if (!value || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(value)) {
      // 身份证号格式错误
      return false;
    } else if (!areaMap[value.substring(0, 2)]) {
      // 地址编码错误
      return false;
    }
    // 18 位身份证需要验证最后一位校验位
    if (value.length === 18) {
      var digits = value.split('');
      // ∑(ai×Wi)(mod 11)
      // 加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      // 校验位
      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0,
        ai = 0,
        wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = +digits[i]; // 转成 number
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if (last != digits[17]) {
        // 校验位错误
        return false;
      }
    }
    return true;
  }
  var areaMap = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  };

  /**
   * 判断经纬度是否在中国的大致范围内
   *
   * 范围说明 (基于 WGS-84 坐标系的大致包围盒):
   * - 最北端: 黑龙江省漠河以北的黑龙江主航道中心线 (约 53.5° N)
   * - 最南端: 南海南沙群岛的曾母暗沙 (约 3.5° N - 4.0° N)
   * - 最西端: 新疆帕米尔高原 (约 73.5° E)
   * - 最东端: 黑龙江与乌苏里江主航道中心线汇合处 (约 135.0° E)
   *
   * @group Function
   * @category Is
   * @param longitude 经度 (-180 到 180)
   * @param latitude 纬度 (-90 到 90)
   * @returns 如果在中国范围内返回 true，否则返回 false
   * @example
   * isLocationInChina(116.4074, 39.9042) // true
   */
  function isLocationInChina(longitude, latitude) {
    // 定义中国疆域的近似包围盒
    return latitude >= 3.5 // 最南端 (曾母暗沙附近)
    && latitude <= 54 // 最北端 (漠河附近，留一点余量)
    && longitude >= 73 // 最西端 (帕米尔高原附近)
    && longitude <= 135.5; // 最东端 (黑瞎子岛附近)
  }

  /**
   * 解析电话号码
   *
   * @group Function
   * @category Parse
   * @param value 电话号码字符串
   * @returns 如果是手机号码，返回 PHONE_NUMBER_MOBILE；如果是固定电话，返回 PHONE_NUMBER_LANDLINE；如果是400电话，返回 PHONE_NUMBER_400；否则返回 -1
   */
  function parsePhoneNumber(value) {
    // 手机号码
    if (/^1\d{10}$/.test(value)) {
      return PHONE_NUMBER_MOBILE;
    }
    // 固定电话
    if (/^0\d{9,11}$/.test(value) || /^0\d{2,3}-\d{7,8}$/.test(value)) {
      return PHONE_NUMBER_LANDLINE;
    }
    // 400 电话
    if (/^400\d{7}$/.test(value) || /^400-\d{3}-\d{4}$/.test(value)) {
      return PHONE_NUMBER_400;
    }
    return -1;
  }

  /**
   * 是否为手机号码
   *
   * @group Function
   * @category Is
   * @param value 要校验的字符串
   * @returns 是否为手机号码
   * @example
   * isMobile('13512345678') // true
   * isMobile('123') // false
   */
  function isMobile(value) {
    return parsePhoneNumber(value) === PHONE_NUMBER_MOBILE;
  }

  /**
   * 是否为价格
   *
   * @group Function
   * @category Is
   * @param value 要校验的字符串
   * @returns 是否为价格
   * @example
   * isPrice('10.05') // true
   * isPrice('10.055') // false
   */
  function isPrice(value) {
    return /^(?:[1-9]\d*|0)(?:\.\d{1,2})?$/.test(value);
  }

  /**
   * 是否为 URL，仅支持 http、https 协议
   *
   * @group Function
   * @category Is
   * @param value 要校验的字符串
   * @returns 是否为 URL
   * @example
   * isUrl('http://www.baidu.com') // true
   * isUrl('https://www.baidu.com') // true
   * isUrl('www.baidu.com') // false
   */
  function isUrl(value) {
    try {
      var url = new URL(value);
      // 不用支持 ftp，太少见了
      return ['http:', 'https:'].includes(url.protocol);
    } catch (_unused) {
      return false;
    }
  }

  /**
   * 是否为验证码，长度为 6 位
   *
   * @group Function
   * @category Is
   * @param value 要校验的字符串
   * @returns 是否为验证码
   * @example
   * isUrl('112233') // true
   */
  function isVerifyCode(value) {
    return /^\d{6}$/.test(value);
  }

  /**
   * 脱敏邮箱
   *
   * @group Function
   * @category Mask
   * @param mobile 邮箱
   * @returns 脱敏后的邮箱
   * @example
   * maskEmail('test@example.com') // '***t@example.com'
   */
  function maskEmail(email) {
    var atIndex = email.indexOf('@');
    if (atIndex <= 0) {
      return email;
    }
    var username = email.substring(0, atIndex);
    var domain = email.substring(atIndex);
    if (username.length <= 1) {
      return '***' + domain;
    }
    return '***' + username[username.length - 1] + domain;
  }

  /**
   * 脱敏手机号
   *
   * @group Function
   * @category Mask
   * @param mobile 手机号
   * @returns 脱敏后的手机号
   * @example
   * maskMobile('13800138000') // '138****8000'
   */
  function maskMobile(mobile) {
    if (mobile.length === 11) {
      return mobile.substring(0, 3) + "****" + mobile.substring(7);
    }
    return mobile;
  }

  /**
   * 脱敏姓名
   *
   * @group Function
   * @category Mask
   * @param name 姓名
   * @returns 脱敏后的姓名
   * @example
   * maskName('张三') // '***三'
   */
  function maskName(name) {
    var length = getStringLength(name);
    if (length <= 1) {
      return "***";
    }
    return "***" + name[length - 1];
  }

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
  function normalizeVersion(value) {
    var tokens = value.split('.');
    switch (tokens.length) {
      case 1:
        return padStringStart(tokens[0], 12);
      case 2:
        return padStringStart(tokens[0], 6) + padStringStart(tokens[1], 6);
      case 3:
        return padStringStart(tokens[0], 4) + padStringStart(tokens[1], 4) + padStringStart(tokens[2], 4);
    }
    return '000000000000';
  }

  /**
   * 解析付款码
   *
   * @group Function
   * @category Parse
   * @param value 付款码字符串
   * @returns 如果是微信付款码，返回 AUTH_CODE_WECHAT；如果是支付宝付款码，返回 AUTH_CODE_ALIPAY；否则返回 -1
   */
  function parseAuthCode(value) {
    // 微信支付通常以 10-15 开头、18 位纯数字
    if (/^1[0-5]/.test(value) && /^\d{18}$/.test(value)) {
      return AUTH_CODE_WECHAT;
    }
    // 支付宝通常以 25-30 开头、18-25 位纯数字
    if ((/^2[5-9]/.test(value) || /^30/.test(value)) && /^\d{18,25}$/.test(value)) {
      return AUTH_CODE_ALIPAY;
    }
    return -1;
  }

  // 定义地球半径（单位：米）
  var EARTH_RADIUS_M = 6371 * 1000;
  // 将角度转换为弧度
  function toRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  /**
   * 计算两个坐标点之间的距离，距离的单位是米
   *
   * @group Function
   * @category Util
   * @param longitude1 第一个坐标点的经度
   * @param latitude1 第一个坐标点的纬度
   * @param longitude2 第二个坐标点的经度
   * @param latitude2 第二个坐标点的纬度
   * @returns 两个坐标点之间的距离，单位是米
   * @example
   * // 计算北京到上海的距离，约 1067 公里
   * calculateDistance(116.4074, 39.9042, 121.4737, 31.2304) // 1067310
   */
  function calculateDistance(longitude1, latitude1, longitude2, latitude2) {
    // 将经纬度转换为弧度
    var lat1 = toRadians(latitude1);
    var lon1 = toRadians(longitude1);
    var lat2 = toRadians(latitude2);
    var lon2 = toRadians(longitude2);
    // 计算差值
    var dLat = lat2 - lat1;
    var dLon = lon2 - lon1;
    // Haversine 公式
    var a = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // 计算距离
    return Math.floor(EARTH_RADIUS_M * c);
  }

  /**
   * 生成指定长度的随机整数
   *
   * @group Function
   * @category Util
   * @param length 生成的随机整数长度，比如 3 表示生成 [100, 999] 的整数
   * @returns 指定长度的随机整数
   */
  function randomIntegerByLength(length) {
    var min = Math.pow(10, length - 1);
    var max = Math.pow(10, length) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  /**
   * 生成指定范围内的随机整数 [min, max)
   *
   * @group Function
   * @category Util
   * @param min 最小值（包含）
   * @param max 最大值（不包含）
   * @returns 指定范围内的随机整数
   */
  function randomIntegerByRange(min, max) {
    if (min === max) {
      return min;
    }
    return Math.floor(Math.random() * (max - min)) + min;
  }
  /**
   * 生成指定长度的随机字符串
   *
   * @group Function
   * @category Util
   * @param length 生成的随机字符串长度
   * @param charset 指定随机字符集（可选参数）
   * @returns 指定长度的随机字符串
   */
  function randomStringByLength(length) {
    var charset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RANDOM_CHARSET_ALPHA_NUMERIC;
    var result = new Array(length);
    var charLength = charset.length;
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charLength);
      result[i] = charset[randomIndex];
    }
    return result.join('');
  }
  /**
   * 根据当前时间生成随机字符串，可通过 tailLength 控制重复的概率
   *
   * @group Function
   * @category Util
   * @param tailLength 尾部随机数长度，用于降低重复概率
   * @returns 生成的随机字符串
   */
  function randomStringByCurrentTime(tailLength) {
    var timeField = timeToTimeField(new Date());
    var year = timeField.year;
    var month = padStringStart("".concat(timeField.month), 2);
    var date = padStringStart("".concat(timeField.date), 2);
    var hour = padStringStart("".concat(timeField.hour), 2);
    var minute = padStringStart("".concat(timeField.minute), 2);
    var second = padStringStart("".concat(timeField.second), 2);
    var millisecond = padStringStart("".concat(timeField.millisecond), 3);
    var timeStr = "".concat(year).concat(month).concat(date).concat(hour).concat(minute).concat(second).concat(millisecond);
    if (tailLength > 0) {
      timeStr += randomIntegerByLength(tailLength);
    }
    return timeStr;
  }

  /**
   * 计算万分比
   *
   * 通过 value1 除以 value2 得到一个比例，然后转成万分比
   *
   * > 万分比的意思是，10000 为 100%，需注意必须是整数
   *
   * @group Function
   * @category Util
   * @param value1 除数
   * @param value2 被除数
   * @returns 万分比（0-10000之间的整数）
   * @example
   * calculateRate(100, 100) // 10000
   * calculateRate(10, 100) // 1000
   */
  function calculateRate(value1, value2) {
    if (!value2) {
      return 0;
    }
    // 如果小数部分为 0，返回整数部分
    return Math.floor(divideNumber(timesNumber(value1, 10000), value2));
  }
  /**
   * 通过万分比计算数值，策略是向下取整
   *
   * @group Function
   * @category Util
   * @param value - 原始数值
   * @param rate - 万分比（0-10000之间的整数）
   * @returns 计算后的数值
   * @example
   * applyRateFloor(1000, 1000) // 100，等价于百分比运算 1000 * 0.1 = 100
   * applyRateFloor(1000, 105) // 10，等价于百分比运算 1000 * 0.0105 = 10.5，向下取整得 10
   */
  function applyRateFloor(value, rate) {
    return Math.floor(divideNumber(timesNumber(value, rate), 10000));
  }
  /**
   * 通过万分比计算数值，策略是向上取整
   *
   * @group Function
   * @category Util
   * @param value - 原始数值
   * @param rate - 万分比（0-10000之间的整数）
   * @returns 计算后的数值
   * @example
   * applyRateCeil(1000, 1000) // 100，等价于百分比运算 1000 * 0.1 = 100
   * applyRateCeil(1000, 105) // 11，等价于百分比运算 1000 * 0.0105 = 10.5，向上取整得 11
   */
  function applyRateCeil(value, rate) {
    return Math.ceil(divideNumber(timesNumber(value, rate), 10000));
  }
  /**
   * 通过万分比计算数值，策略是四舍五入
   *
   * @group Function
   * @category Util
   * @param value - 原始数值
   * @param rate - 万分比（0-10000之间的整数）
   * @returns 计算后的数值
   * @example
   * applyRateRound(1000, 1000) // 100，等价于百分比运算 1000 * 0.1 = 100
   * applyRateRound(1000, 105) // 11，等价于百分比运算 1000 * 0.0105 = 10.5，四舍五入得 11
   */
  function applyRateRound(value, rate) {
    return Math.round(divideNumber(timesNumber(value, rate), 10000));
  }

  /**
   * 解析时间字符串
   *
   * @group Function
   * @category Util
   * @param str 时间字符串
   * @param format 时间格式，按该格式解析时间字符串
   * @returns 解析成功，返回 Date 对象，否则报错
   * @example
   * parseTime('2020-01-01', DATE_YEAR_MONTH_DATE) // Date {2020-01-01}
   */
  function parseTime(str, format) {
    switch (format) {
      case DATE_YEAR_MONTH_DATE:
      case DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE:
      case DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND:
        break;
      case DATE_YEAR_MONTH_DATE_DOT:
      case DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_DOT:
      case DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_DOT:
        str = str.replace(/\./g, '-');
        break;
      case DATE_YEAR_MONTH_DATE_SLASH:
      case DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH:
      case DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH:
        str = str.replace(/\//g, '-');
        break;
      default:
        return new Error('format is not supported');
    }
    return new Date(str);
  }
  /**
   * 获取某个小时开始时间
   *
   * @group Function
   * @category Util
   * @param timestamp 毫秒时间戳
   * @returns 毫秒时间戳
   */
  function startOfHour(timestamp) {
    var date = new Date(timestamp);
    date.setMinutes(0, 0, 0);
    return date.getTime();
  }
  /**
   * 获取前一个小时开始时间
   *
   * @group Function
   * @category Util
   * @param timestamp 毫秒时间戳
   * @returns 毫秒时间戳
   */
  function startOfPrevHour(timestamp) {
    return startOfHour(timestamp - MS_HOUR);
  }
  /**
   * 获取下个小时开始时间
   *
   * @group Function
   * @category Util
   * @param timestamp 毫秒时间戳
   * @returns 毫秒时间戳
   */
  function startOfNextHour(timestamp) {
    return startOfHour(timestamp + MS_HOUR);
  }
  /**
   * 获取某个小时结束时间
   *
   * @group Function
   * @category Util
   * @param timestamp 毫秒时间戳
   * @returns 毫秒时间戳
   */
  function endOfHour(timestamp) {
    var date = new Date(timestamp);
    date.setMinutes(59, 59, 999);
    return date.getTime();
  }
  /**
  * 获取某天的开始时间
  *
  * @group Function
  * @category Util
  * @param timestamp 毫秒时间戳
  * @returns 毫秒时间戳
  */
  function startOfDay(timestamp) {
    var date = new Date(timestamp);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  }
  /**
  * 获取前一天的开始时间
  *
  * @group Function
  * @category Util
  * @param timestamp 毫秒时间戳
  * @returns 毫秒时间戳
  */
  function startOfPrevDay(timestamp) {
    return startOfDay(timestamp - MS_DAY);
  }
  /**
  * 获取前一天的开始时间
  *
  * @group Function
  * @category Util
  * @param timestamp 毫秒时间戳
  * @returns 毫秒时间戳
  */
  function startOfNextDay(timestamp) {
    return startOfDay(timestamp + MS_DAY);
  }
  /**
  * 获取某天的结束时间
  *
  * @group Function
  * @category Util
  * @param timestamp 毫秒时间戳
  * @returns 毫秒时间戳
  */
  function endOfDay(timestamp) {
    var date = new Date(timestamp);
    date.setHours(23, 59, 59, 999);
    return date.getTime();
  }
  /**
  * 获取某周的开始时间
  *
  * @group Function
  * @category Util
  * @param timestamp 毫秒时间戳
  * @returns 毫秒时间戳
  */
  function startOfWeek(timestamp) {
    var date = new Date(timestamp);
    var day = date.getDay();
    var offset = (day < 0 ? 7 : 0) + day;
    date.setDate(date.getDate() - offset);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  }
  /**
  * 获取前一周的开始时间
  *
  * @group Function
  * @category Util
  * @param timestamp 毫秒时间戳
  * @returns 毫秒时间戳
  */
  function startOfPrevWeek(timestamp) {
    return startOfWeek(timestamp - MS_WEEK);
  }
  /**
  * 获取后一周的开始时间
  *
  * @group Function
  * @category Util
  * @param timestamp 毫秒时间戳
  * @returns 毫秒时间戳
  */
  function startOfNextWeek(timestamp) {
    return startOfWeek(timestamp + MS_WEEK);
  }
  /**
  * 获取某周的结束时间
  *
  * @group Function
  * @category Util
  * @param timestamp 毫秒时间戳
  * @returns 毫秒时间戳
  */
  function endOfWeek(timestamp) {
    var date = new Date(timestamp);
    var day = date.getDay();
    var offset = (day < 0 ? -7 : 0) + 6 - day;
    date.setDate(date.getDate() + offset);
    date.setHours(23, 59, 59, 999);
    return date.getTime();
  }
  /**
  * 获取某月的开始时间
  *
  * @group Function
  * @category Util
  * @param timestamp 毫秒时间戳
  * @returns 毫秒时间戳
  */
  function startOfMonth(timestamp) {
    var date = new Date(timestamp);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  }
  /**
  * 获取前一月的开始时间
  *
  * @group Function
  * @category Util
  * @param timestamp 毫秒时间戳
  * @returns 毫秒时间戳
  */
  function startOfPrevMonth(timestamp) {
    var date = new Date(timestamp);
    date.setDate(0); // 改成上个月最后一天
    date.setDate(1); // 改成 1 号
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  }
  /**
  * 获取下一月的开始时间
  *
  * @group Function
  * @category Util
  * @param timestamp 毫秒时间戳
  * @returns 毫秒时间戳
  */
  function startOfNextMonth(timestamp) {
    var date = new Date(timestamp);
    date.setMonth(date.getMonth() + 2, 0); // 改成下个月最后一天
    date.setDate(1); // 改成 1 号
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  }
  /**
  * 获取某月的结束时间
  *
  * @group Function
  * @category Util
  * @param timestamp 毫秒时间戳
  * @returns 毫秒时间戳
  */
  function endOfMonth(timestamp) {
    var date = new Date(timestamp);
    date.setMonth(date.getMonth() + 1, 0);
    date.setHours(23, 59, 59, 999);
    return date.getTime();
  }
  /**
   * 获取某年的开始时间
   *
   * @group Function
   * @category Util
   * @param timestamp 毫秒时间戳
   * @returns 毫秒时间戳
   */
  function startOfYear(timestamp) {
    var date = new Date(timestamp);
    date.setMonth(0, 1); // 1 月 1 日
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  }
  /**
   * 获取前一年的开始时间
   *
   * @group Function
   * @category Util
   * @param timestamp 毫秒时间戳
   * @returns 毫秒时间戳
   */
  function startOfPrevYear(timestamp) {
    var date = new Date(timestamp);
    date.setFullYear(date.getFullYear() - 1, 0, 1); // 去年 1 月 1 日
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  }
  /**
   * 获取下一年的开始时间
   *
   * @group Function
   * @category Util
   * @param timestamp 毫秒时间戳
   * @returns 毫秒时间戳
   */
  function startOfNextYear(timestamp) {
    var date = new Date(timestamp);
    date.setFullYear(date.getFullYear() + 1, 0, 1); // 明年 1 月 1 日
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  }
  /**
   * 获取某年的结束时间
   *
   * @group Function
   * @category Util
   * @param timestamp 毫秒时间戳
   * @returns 毫秒时间戳
   */
  function endOfYear(timestamp) {
    var date = new Date(timestamp);
    date.setMonth(11, 31); // 12 月 31 日
    date.setHours(23, 59, 59, 999);
    return date.getTime();
  }
  /**
   * 获取昨天的同时刻
   *
   * @group Function
   * @category Util
   * @param timestamp 毫秒时间戳
   * @returns 毫秒时间戳
   */
  function sameOfPrevDay(timestamp) {
    return timestamp - MS_DAY;
  }
  /**
   * 获取前一周的同时刻
   *
   * @group Function
   * @category Util
   * @param timestamp 毫秒时间戳
   * @returns 毫秒时间戳
   */
  function sameOfPrevWeek(timestamp) {
    return timestamp - MS_WEEK;
  }
  /**
   * 获取上个月的同时刻
   * 如果传入的时间戳大于上个月的最后一天，则返回上个月的最后时间
   *
   * @group Function
   * @category Util
   * @param timestamp 毫秒时间戳
   * @returns 毫秒时间戳
   */
  function sameOfPrevMonth(timestamp) {
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var prevMonthStart = new Date(year, month - 1, 1, 0, 0, 0, 0);
    var prevMonthEnd = new Date(year, month, 0, 23, 59, 59, 999);
    if (day > prevMonthEnd.getDate()) {
      return prevMonthEnd.getTime();
    }
    date.setFullYear(prevMonthStart.getFullYear(), prevMonthStart.getMonth(), day);
    return date.getTime();
  }
  /**
   * 获取去年的同时刻
   * 如果传入的时间戳大于去年该月的最后一天，则返回去年该月的最后时间
   *
   * @group Function
   * @category Util
   * @param timestamp 毫秒时间戳
   * @returns 毫秒时间戳
   */
  function sameOfPrevYear(timestamp) {
    var date = new Date(timestamp);
    var month = date.getMonth();
    var day = date.getDate();
    var prevYearMonthEnd = new Date(date.getFullYear() - 1, month + 1, 0, 23, 59, 59, 999);
    if (day > prevYearMonthEnd.getDate()) {
      return prevYearMonthEnd.getTime();
    }
    date.setFullYear(date.getFullYear() - 1, month, day);
    return date.getTime();
  }
  /**
  * 优化时间范围，尽量归一到某个类型下，无法归一时，才用范围
  *
  * 后端常用，前端几乎用不上
  *
  * @group Function
  * @category Util
  * @param startTimestamp 开始毫秒时间戳
  * @param endTimestamp 结束毫秒时间戳
  * @param optimizer 优化器，优先走 isHour/isDay/isWeek/isMonth 分支
  */
  function optimizeTimeRange(startTimestamp, endTimestamp, optimizer) {
    var startHour = startOfHour(startTimestamp);
    var endHour = endOfHour(startTimestamp);
    var startDay = startOfDay(startTimestamp);
    var endDay = endOfDay(startTimestamp);
    var startWeek = startOfWeek(startTimestamp);
    var endWeek = endOfWeek(startTimestamp);
    var startMonth = startOfMonth(startTimestamp);
    var endMonth = endOfMonth(startTimestamp);
    if (startTimestamp === startHour && endTimestamp === endHour && optimizer.isHour) {
      optimizer.isHour(startTimestamp);
    } else if (startTimestamp === startDay && endTimestamp === endDay && optimizer.isDay) {
      optimizer.isDay(startTimestamp);
    } else if (startTimestamp === startWeek && endTimestamp == endWeek && optimizer.isWeek) {
      optimizer.isWeek(startTimestamp);
    } else if (startTimestamp === startMonth && endTimestamp == endMonth && optimizer.isMonth) {
      optimizer.isMonth(startTimestamp);
    } else {
      optimizer.isRange(startTimestamp, endTimestamp);
    }
  }

  /**
   * 编码 URI 组件，内部使用原生 encodeURIComponent 实现
   *
   * > 设计此函数的目的是为了在 hive-dart、hive-go 中对齐相同的函数
   *
   * @group Function
   * @category Util
   * @param str 要编码的字符串
   * @returns 编码后的字符串
   */
  function encodeUriComponent(str) {
    return encodeURIComponent(str);
  }
  /**
   * 解码 URI 组件，内部使用原生 decodeURIComponent 实现
   *
   * > 设计此函数的目的是为了在 hive-dart、hive-go 中对齐相同的函数
   *
   * @group Function
   * @category Util
   * @param str 要解码的字符串
   * @returns 解码后的字符串
   */
  function decodeUriComponent(str) {
    return decodeURIComponent(str);
  }
  var httpProtocolPattern = /^https?:\/\//i;
  /**
   * 把 URL 转成 http 协议，优先使用 https 协议
   *
   * @group Function
   * @category Util
   * @param url 要标准化的 URL
   * @returns 加上 http 协议的 URL
   * @example
   * toHttpProtocolUrl('www.baidu.com') // 'https://www.baidu.com'
   * toHttpProtocolUrl('//www.baidu.com') // 'https://www.baidu.com'
   * toHttpProtocolUrl('http://www.baidu.com') // 'http://www.baidu.com'
   * toHttpProtocolUrl('https://www.baidu.com') // 'https://www.baidu.com'
   */
  function toHttpProtocolUrl(url) {
    if (!url) {
      return '';
    }
    if (httpProtocolPattern.test(url)) {
      return url;
    }
    if (url.startsWith('//')) {
      return "https:".concat(url);
    }
    return "https://".concat(url);
  }
  /**
   * 将 URL 转换为相对协议（以 // 开头）
   *
   * @group Function
   * @category Util
   * @param url 要转换的 URL
   * @returns 协议相对路径
   * @example
   * toRelativeProtocolUrl('http://www.baidu.com') // '//www.baidu.com'
   * toRelativeProtocolUrl('https://www.baidu.com') // '//www.baidu.com'
   * toRelativeProtocolUrl('www.baidu.com') // '//www.baidu.com'
   */
  function toRelativeProtocolUrl(url) {
    if (!url) {
      return '';
    }
    if (httpProtocolPattern.test(url)) {
      return url.replace(httpProtocolPattern, '//');
    }
    if (!url.startsWith('//')) {
      return "//".concat(url);
    }
    return url;
  }

  exports.AMOUNT_ONE_YUAN = AMOUNT_ONE_YUAN;
  exports.AMOUNT_TEN_THOUSAND_YUAN = AMOUNT_TEN_THOUSAND_YUAN;
  exports.AUTH_CODE_ALIPAY = AUTH_CODE_ALIPAY;
  exports.AUTH_CODE_WECHAT = AUTH_CODE_WECHAT;
  exports.DATE_MONTH_DATE = DATE_MONTH_DATE;
  exports.DATE_MONTH_DATE_CHINESE = DATE_MONTH_DATE_CHINESE;
  exports.DATE_MONTH_DATE_DOT = DATE_MONTH_DATE_DOT;
  exports.DATE_MONTH_DATE_SLASH = DATE_MONTH_DATE_SLASH;
  exports.DATE_TIME_MONTH_DATE_HOUR_MINUTE = DATE_TIME_MONTH_DATE_HOUR_MINUTE;
  exports.DATE_TIME_MONTH_DATE_HOUR_MINUTE_CHINESE = DATE_TIME_MONTH_DATE_HOUR_MINUTE_CHINESE;
  exports.DATE_TIME_MONTH_DATE_HOUR_MINUTE_DOT = DATE_TIME_MONTH_DATE_HOUR_MINUTE_DOT;
  exports.DATE_TIME_MONTH_DATE_HOUR_MINUTE_SLASH = DATE_TIME_MONTH_DATE_HOUR_MINUTE_SLASH;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_DOT = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_DOT;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_CHINESE = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_CHINESE;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_DOT = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_DOT;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH;
  exports.DATE_YEAR_MONTH_DATE = DATE_YEAR_MONTH_DATE;
  exports.DATE_YEAR_MONTH_DATE_CHINESE = DATE_YEAR_MONTH_DATE_CHINESE;
  exports.DATE_YEAR_MONTH_DATE_DOT = DATE_YEAR_MONTH_DATE_DOT;
  exports.DATE_YEAR_MONTH_DATE_SLASH = DATE_YEAR_MONTH_DATE_SLASH;
  exports.MONEY_TEN_THOUSAND_YUAN_TO_CENT = MONEY_TEN_THOUSAND_YUAN_TO_CENT;
  exports.MONEY_YUAN_TO_CENT = MONEY_YUAN_TO_CENT;
  exports.MONEY_YUAN_TO_PENNY = MONEY_YUAN_TO_PENNY;
  exports.MONTH_CHINESE = MONTH_CHINESE;
  exports.MONTH_DEFAULT = MONTH_DEFAULT;
  exports.MONTH_ONLY = MONTH_ONLY;
  exports.MONTH_ONLY_CHINESE = MONTH_ONLY_CHINESE;
  exports.MS_DAY = MS_DAY;
  exports.MS_HOUR = MS_HOUR;
  exports.MS_MINUTE = MS_MINUTE;
  exports.MS_SECOND = MS_SECOND;
  exports.MS_WEEK = MS_WEEK;
  exports.MS_YEAR = MS_YEAR;
  exports.PHONE_NUMBER_400 = PHONE_NUMBER_400;
  exports.PHONE_NUMBER_LANDLINE = PHONE_NUMBER_LANDLINE;
  exports.PHONE_NUMBER_MOBILE = PHONE_NUMBER_MOBILE;
  exports.RANDOM_CHARSET_ALPHA_LOWER = RANDOM_CHARSET_ALPHA_LOWER;
  exports.RANDOM_CHARSET_ALPHA_NUMERIC = RANDOM_CHARSET_ALPHA_NUMERIC;
  exports.RANDOM_CHARSET_ALPHA_UPPER = RANDOM_CHARSET_ALPHA_UPPER;
  exports.RANDOM_CHARSET_NUMERIC = RANDOM_CHARSET_NUMERIC;
  exports.SHELF_LIFE_DAY = SHELF_LIFE_DAY;
  exports.SHELF_LIFE_MONTH = SHELF_LIFE_MONTH;
  exports.SHELF_LIFE_YEAR = SHELF_LIFE_YEAR;
  exports.SIZE_GB = SIZE_GB;
  exports.SIZE_KB = SIZE_KB;
  exports.SIZE_MB = SIZE_MB;
  exports.TIME_DEFAULT = TIME_DEFAULT;
  exports.TIME_HOUR_MINUTE = TIME_HOUR_MINUTE;
  exports.YEAR_CHINESE = YEAR_CHINESE;
  exports.YEAR_DEFAULT = YEAR_DEFAULT;
  exports.applyRateCeil = applyRateCeil;
  exports.applyRateFloor = applyRateFloor;
  exports.applyRateRound = applyRateRound;
  exports.calculateDistance = calculateDistance;
  exports.calculateRate = calculateRate;
  exports.darkenColor = darkenColor;
  exports.decodeUriComponent = decodeUriComponent;
  exports.discountToBackend = discountToBackend;
  exports.discountToDisplay = discountToDisplay;
  exports.distanceToBackend = distanceToBackend;
  exports.distanceToDisplay = distanceToDisplay;
  exports.divideNumber = divideNumber;
  exports.encodeUriComponent = encodeUriComponent;
  exports.endOfDay = endOfDay;
  exports.endOfHour = endOfHour;
  exports.endOfMonth = endOfMonth;
  exports.endOfWeek = endOfWeek;
  exports.endOfYear = endOfYear;
  exports.formatAmount = formatAmount;
  exports.formatAmountShortly = formatAmountShortly;
  exports.formatArea = formatArea;
  exports.formatBankCardNumber = formatBankCardNumber;
  exports.formatBirthday = formatBirthday;
  exports.formatBusinessTimes = formatBusinessTimes;
  exports.formatCategory = formatCategory;
  exports.formatCount = formatCount;
  exports.formatCountShortly = formatCountShortly;
  exports.formatDate = formatDate;
  exports.formatDateRange = formatDateRange;
  exports.formatDateShortly = formatDateShortly;
  exports.formatDateTime = formatDateTime;
  exports.formatDateTimeRange = formatDateTimeRange;
  exports.formatDateTimeShortly = formatDateTimeShortly;
  exports.formatDiscount = formatDiscount;
  exports.formatDistance = formatDistance;
  exports.formatDuration = formatDuration;
  exports.formatMonth = formatMonth;
  exports.formatNumberWithComma = formatNumberWithComma;
  exports.formatPenny = formatPenny;
  exports.formatRatePercent = formatRatePercent;
  exports.formatShelfLife = formatShelfLife;
  exports.formatSize = formatSize;
  exports.formatTime = formatTime;
  exports.formatWeek = formatWeek;
  exports.formatYear = formatYear;
  exports.getStringLength = getStringLength;
  exports.getStringWidth = getStringWidth;
  exports.hasDecimal = hasDecimal;
  exports.hasSpecialCharacter = hasSpecialCharacter;
  exports.hexToHslObject = hexToHslObject;
  exports.hexToRgbaObject = hexToRgbaObject;
  exports.hexToRgbaString = hexToRgbaString;
  exports.isBankCardNumber = isBankCardNumber;
  exports.isCorporateAccountNumber = isCorporateAccountNumber;
  exports.isCustomBarcode = isCustomBarcode;
  exports.isEmail = isEmail;
  exports.isHexColor = isHexColor;
  exports.isIdentityCardNumber = isIdentityCardNumber;
  exports.isLocationInChina = isLocationInChina;
  exports.isMobile = isMobile;
  exports.isPrice = isPrice;
  exports.isStandardBarcode = isStandardBarcode;
  exports.isUrl = isUrl;
  exports.isVerifyCode = isVerifyCode;
  exports.lightenColor = lightenColor;
  exports.maskEmail = maskEmail;
  exports.maskMobile = maskMobile;
  exports.maskName = maskName;
  exports.minusNumber = minusNumber;
  exports.moneyToBackend = moneyToBackend;
  exports.moneyToDisplay = moneyToDisplay;
  exports.normalizeDuration = normalizeDuration;
  exports.normalizeShelfLife = normalizeShelfLife;
  exports.normalizeVersion = normalizeVersion;
  exports.optimizeTimeRange = optimizeTimeRange;
  exports.padStringStart = padStringStart;
  exports.parseAuthCode = parseAuthCode;
  exports.parseInteger = parseInteger;
  exports.parseNumber = parseNumber;
  exports.parsePhoneNumber = parsePhoneNumber;
  exports.parseTime = parseTime;
  exports.plusNumber = plusNumber;
  exports.randomIntegerByLength = randomIntegerByLength;
  exports.randomIntegerByRange = randomIntegerByRange;
  exports.randomStringByCurrentTime = randomStringByCurrentTime;
  exports.randomStringByLength = randomStringByLength;
  exports.rateToBackend = rateToBackend;
  exports.rateToDisplay = rateToDisplay;
  exports.removeSpecialCharacter = removeSpecialCharacter;
  exports.renderStringTemplate = renderStringTemplate;
  exports.sameOfPrevDay = sameOfPrevDay;
  exports.sameOfPrevMonth = sameOfPrevMonth;
  exports.sameOfPrevWeek = sameOfPrevWeek;
  exports.sameOfPrevYear = sameOfPrevYear;
  exports.sliceString = sliceString;
  exports.startOfDay = startOfDay;
  exports.startOfHour = startOfHour;
  exports.startOfMonth = startOfMonth;
  exports.startOfNextDay = startOfNextDay;
  exports.startOfNextHour = startOfNextHour;
  exports.startOfNextMonth = startOfNextMonth;
  exports.startOfNextWeek = startOfNextWeek;
  exports.startOfNextYear = startOfNextYear;
  exports.startOfPrevDay = startOfPrevDay;
  exports.startOfPrevHour = startOfPrevHour;
  exports.startOfPrevMonth = startOfPrevMonth;
  exports.startOfPrevWeek = startOfPrevWeek;
  exports.startOfPrevYear = startOfPrevYear;
  exports.startOfWeek = startOfWeek;
  exports.startOfYear = startOfYear;
  exports.timeFieldToTime = timeFieldToTime;
  exports.timeToTimeField = timeToTimeField;
  exports.timeToTimestamp = timeToTimestamp;
  exports.timesNumber = timesNumber;
  exports.timestampToTime = timestampToTime;
  exports.toHttpProtocolUrl = toHttpProtocolUrl;
  exports.toRelativeProtocolUrl = toRelativeProtocolUrl;
  exports.trimString = trimString;
  exports.truncateNumber = truncateNumber;
  exports.truncateString = truncateString;
  exports.weightGToBackend = weightGToBackend;
  exports.weightKGToBackend = weightKGToBackend;
  exports.weightToG = weightToG;
  exports.weightToKG = weightToKG;

}));
//# sourceMappingURL=hive.js.map
