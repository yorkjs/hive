/**
 * hive.js v0.0.6
 * (c) 2025 yorkjs team
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

  // 年月日：2020-10-01
  var DATE_YEAR_MONTH_DATE = 'YYYY-MM-DD';
  // 月日：10-01
  var DATE_MONTH_DATE = 'MM-DD';

  // 年月日 时分秒：2020-10-01 10:00:00
  var DATE_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND = 'YYYY-MM-DD HH:mm:ss';
  // 年月日 时分：2020-10-01 10:00
  var DATE_YEAR_MONTH_DATE_HOUR_MINUTE = 'YYYY-MM-DD HH:mm';

  // 毫秒数：秒
  var MS_SECOND = 1000;
  // 毫秒数：分钟
  var MS_MINUTE = 60 * MS_SECOND;
  // 毫秒数：小时
  var MS_HOUR = 60 * MS_MINUTE;
  // 毫秒数：天
  var MS_DAY = 24 * MS_HOUR;
  // 毫秒数：周
  var MS_WEEK = 7 * MS_DAY;
  // 毫秒数：年
  var MS_YEAR = 365 * MS_DAY;

  /**
   * 此模块用于整数和浮点数的精确计算，避免浮点数的计算精度问题
   */
  /**
  * 精确加法，比如 plusNumber(3, 1) === 4
  *
  * @param value1 第一个值
  * @param value2 第二个值
  * @returns 和
  */
  function plusNumber(value1, value2) {
    return NP__namespace.plus(value1, value2);
  }
  /**
  * 精确减法，比如 minusNumber(3, 1) === 2
  *
  * @param value1 被减数
  * @param value2 减数
  * @returns 差
  */
  function minusNumber(value1, value2) {
    return NP__namespace.minus(value1, value2);
  }
  /**
   * 精确乘法，比如 timesNumber(3, 2) === 6
   *
   * @param value1 第一个值
   * @param value2 第二个值
   * @returns 乘积结果
   */
  function timesNumber(value1, value2) {
    return NP__namespace.times(value1, value2);
  }
  /**
  * 精确除法，比如 divideNumber(6, 2) === 3
  *
  * @param value1 被除数
  * @param value2 除数
  * @returns 商
  */
  function divideNumber(value1, value2) {
    return NP__namespace.divide(value1, value2);
  }

  /**
   * 把金额转换为前端显示所用的格式
   *
   * @param value 后端的金额值，单位是分
   * @returns
   */
  function moneyToDisplay(value) {
    return divideNumber(value, 100);
  }
  /**
   * 把金额转换为后端接口所用的格式
   *
   * @param value 前端的金额值，单位是元
   * @returns
   */
  function moneyToBackend(value) {
    return timesNumber(value, 100);
  }

  /**
   * 比例转换为前端显示所用的格式
   *
   * @param value 后端的比例值
   * @returns
   */
  function rateToDisplay(value) {
    return divideNumber(value, 100);
  }
  /**
   * 比例转换为后端接口所用的格式
   *
   * @param value 前端的比例值
   * @returns
   */
  function rateToBackend(value) {
    return timesNumber(value, 100);
  }

  /**
   * 把时间戳格式化为 2020-10-01 格式
   *
   * @param timestamp
   * @returns
   */
  function formatDate(timestamp) {
    return dayjs__default.default(timestamp).format(DATE_YEAR_MONTH_DATE);
  }
  /**
   * 把同年份的时间戳格式化为 10-01 格式，不同年份的时间戳格式化成 2020-10-01 格式
   *
   * @param timestamp
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
   * 把时间戳格式化为 2020-10-01 10:00:00 格式
   *
   * @param timestamp
   * @param format 默认是 年月日 时分秒 格式
   * @returns
   */
  function formatDateTime(timestamp) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DATE_YEAR_MONTH_DATE_HOUR_MINUTE;
    return dayjs__default.default(timestamp).format(format);
  }

  /**
   * 把单位为 分 的金额转成显示友好的格式
   *
   * @param value
   * @param maxDecimals
   * @returns
   */
  function formatMoney(value) {
    var maxDecimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    // 转成 元 为单位
    var newValue = divideNumber(value, 100);
    var parts = ('' + newValue).split('.');
    var list = [],
      end = parts[0].length - 1;
    for (var i = end; i >= 0; i--) {
      if (i !== end && (end - i) % 3 === 0) {
        list.push(',');
      }
      list.push(parts[0].charAt(i));
    }
    var money = list.reverse().join('');
    var decimal = parts[1];
    if (decimal) {
      if (maxDecimals > 0) {
        decimal = decimal.padEnd(maxDecimals, '0');
        if (decimal.length > maxDecimals) {
          decimal = decimal.slice(0, maxDecimals);
        }
      }
    } else if (maxDecimals > 0) {
      decimal = ''.padEnd(maxDecimals, '0');
    }
    if (decimal) {
      money += '.' + decimal;
    }
    return money;
  }

  /**
   * value 是否是标准商品条形码
   *
   * @param value 条形码文本
   * @returns
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
   * value 是否是自定义商品条形码
   *
   * @param value 条形码文本
   * @returns
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
   * 标准化版本号，方便后续进行比较
   *
   * @param {string} version 如 '1.2.3'，最多支持三段，每段的子版本号不超过 9999
   * @returns 标准化后的版本号，12 位长度
   */
  function normalizeVersion(version) {
    var tokens = version && version.split('.');
    switch (tokens.length) {
      case 1:
        return tokens[0].padStart(12, '0');
      case 2:
        return tokens[0].padStart(6, '0') + tokens[1].padStart(6, '0');
      case 3:
        return tokens[0].padStart(4, '0') + tokens[1].padStart(4, '0') + tokens[2].padStart(4, '0');
    }
    return '000000000000';
  }

  exports.DATE_MONTH_DATE = DATE_MONTH_DATE;
  exports.DATE_YEAR_MONTH_DATE = DATE_YEAR_MONTH_DATE;
  exports.DATE_YEAR_MONTH_DATE_HOUR_MINUTE = DATE_YEAR_MONTH_DATE_HOUR_MINUTE;
  exports.DATE_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND = DATE_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND;
  exports.MS_DAY = MS_DAY;
  exports.MS_HOUR = MS_HOUR;
  exports.MS_MINUTE = MS_MINUTE;
  exports.MS_SECOND = MS_SECOND;
  exports.MS_WEEK = MS_WEEK;
  exports.MS_YEAR = MS_YEAR;
  exports.divideNumber = divideNumber;
  exports.formatDate = formatDate;
  exports.formatDateShortly = formatDateShortly;
  exports.formatDateTime = formatDateTime;
  exports.formatMoney = formatMoney;
  exports.isCustomBarcode = isCustomBarcode;
  exports.isStandardBarcode = isStandardBarcode;
  exports.minusNumber = minusNumber;
  exports.moneyToBackend = moneyToBackend;
  exports.moneyToDisplay = moneyToDisplay;
  exports.normalizeVersion = normalizeVersion;
  exports.plusNumber = plusNumber;
  exports.rateToBackend = rateToBackend;
  exports.rateToDisplay = rateToDisplay;
  exports.timesNumber = timesNumber;

}));
//# sourceMappingURL=hive.js.map
