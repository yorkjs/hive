/**
 * hive.js v0.1.5
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
  // 年月：2020-10
  var DATE_YEAR_MONTH = 'YYYY-MM';
  // 月日：10-01
  var DATE_MONTH_DATE = 'MM-DD';

  // 年月日 时分秒：2020-10-01 10:00:00
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND = 'YYYY-MM-DD HH:mm:ss';
  // 年月日 时分：2020-10-01 10:00
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE = 'YYYY-MM-DD HH:mm';
  // 月日 时分：10-01 10:00
  var DATE_TIME_MONTH_DATE_HOUR_MINUTE = 'MM-DD HH:mm';

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

  // 元 转 分
  var MONEY_YUAN_TO_CENT = 100;
  // 万元 转 分
  var MONEY_TEN_THOUSAND_YUAN_TO_CENT = 10000 * MONEY_YUAN_TO_CENT;

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
    if (value2 === 0) {
      throw new Error('Divisor cannot be zero');
    }
    return NP__namespace.divide(value1, value2);
  }
  /**
   * 截断数字，解决 1.983.toFixed(1) 为 2.0 的问题
   *
   * @param value
   * @param decimals
   * @returns
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
   * 把金额转换为前端显示所用的格式
   *
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
   * @param value 前端的金额值
   * @returns
   */
  function moneyToBackend(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MONEY_YUAN_TO_CENT;
    return timesNumber(value, unit);
  }

  /**
   * 万分比 转换为 百分比
   *
   * @param value 后端的比例值
   * @returns
   */
  function rateToDisplay(value) {
    return divideNumber(value, 100);
  }
  /**
   * 百分比 转换为 万分比
   *
   * @param value 前端的比例值
   * @returns
   */
  function rateToBackend(value) {
    return timesNumber(value, 100);
  }
  /**
   * 计算万分比
   *
   * @param value1 除数
   * @param value2 被除数
   * @returns
   */
  function calculateRate(value1, value2) {
    if (!value2) {
      return 0;
    }
    return divideNumber(value1 * 10000, value2);
  }

  /**
   * 毫克 转换为 克
   *
   * @param value 后端的重量值，单位毫克
   * @returns
   */
  function weightToG(value) {
    return divideNumber(value, 1000);
  }
  /**
   * 毫克 转换为 千克
   *
   * @param value 后端的重量值，单位毫克
   * @returns
   */
  function weightToKG(value) {
    return divideNumber(value, 1000000);
  }
  /**
   * 克 转为后端使用的 毫克
   *
   * @param value 前端的重量值，单位是克
   * @returns
   */
  function weightGToBackend(value) {
    return timesNumber(value, 1000);
  }
  /**
   * 千克 转为后端使用的 毫克
   *
   * @param value 前端的重量值，单位是千克
   * @returns
   */
  function weightKGToBackend(value) {
    return timesNumber(value, 1000000);
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
  function formatArea(area) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      simplify: true
    };
    var country = area.country,
      province = area.province,
      city = area.city,
      district = area.district;
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
   * 把时间戳格式化为 2020-10-01 10:00 格式
   *
   * @param timestamp
   * @param format
   * @returns
   */
  function formatDateTime(timestamp) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE;
    return dayjs__default.default(timestamp).format(format);
  }
  /**
   * 把同年份的时间戳格式化为 10-01 10:00 格式，不同年份的时间戳格式化成 2020-10-01 10:00 格式
   *
   * @param timestamp
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
   * @param timestamp
   * @returns
   */
  function formatWeek(timestamp) {
    var date = new Date(timestamp);
    var offset = -1 * date.getDay();
    var startTimestamp = timestamp + offset * MS_DAY;
    return "".concat(formatDateShortly(startTimestamp), " ~ ").concat(formatDateShortly(startTimestamp + 6 * MS_DAY));
  }

  /**
   * 把时间戳格式化为 2020-10 格式
   *
   * @param timestamp
   * @returns
   */
  function formatMonth(timestamp) {
    return dayjs__default.default(timestamp).format(DATE_YEAR_MONTH);
  }

  /**
   * 把数字的整数部分格式化为以千为段拆分，以逗号为分隔符
   *
   * @param value
   * @param decimals
   * @returns
   */
  function formatNumberWithComma(value) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
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
    return result;
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

  /**
  * 获取某天的开始时间
  *
  * @param timestamp 毫秒时间戳
  * @returns
  */
  function startOfDay(timestamp) {
    var date = new Date(timestamp);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  }
  /**
  * 获取前一天的开始时间
  *
  * @param timestamp 毫秒时间戳
  * @returns
  */
  function startOfPrevDay(timestamp) {
    return startOfDay(timestamp - MS_DAY);
  }
  /**
  * 获取前一天的开始时间
  *
  * @param timestamp 毫秒时间戳
  * @returns
  */
  function startOfNextDay(timestamp) {
    return startOfDay(timestamp + MS_DAY);
  }
  /**
  * 获取某天的结束时间
  *
  * @param timestamp 毫秒时间戳
  * @returns
  */
  function endOfDay(timestamp) {
    var date = new Date(timestamp);
    date.setHours(23, 59, 59, 999);
    return date.getTime();
  }
  /**
  * 获取某周的开始时间
  *
  * @param timestamp 毫秒时间戳
  * @returns
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
  * @param timestamp 毫秒时间戳
  * @returns
  */
  function startOfPrevWeek(timestamp) {
    return startOfWeek(timestamp - MS_WEEK);
  }
  /**
  * 获取后一周的开始时间
  *
  * @param timestamp 毫秒时间戳
  * @returns
  */
  function startOfNextWeek(timestamp) {
    return startOfWeek(timestamp + MS_WEEK);
  }
  /**
  * 获取某周的结束时间
  *
  * @param timestamp 毫秒时间戳
  * @returns
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
  * @param timestamp 毫秒时间戳
  * @returns
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
  * @param timestamp 毫秒时间戳
  * @returns
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
  * @param timestamp 毫秒时间戳
  * @returns
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
  * @param timestamp 毫秒时间戳
  * @returns
  */
  function endOfMonth(timestamp) {
    var date = new Date(timestamp);
    date.setMonth(date.getMonth() + 1, 0);
    date.setHours(23, 59, 59, 999);
    return date.getTime();
  }

  exports.DATE_MONTH_DATE = DATE_MONTH_DATE;
  exports.DATE_TIME_MONTH_DATE_HOUR_MINUTE = DATE_TIME_MONTH_DATE_HOUR_MINUTE;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND;
  exports.DATE_YEAR_MONTH = DATE_YEAR_MONTH;
  exports.DATE_YEAR_MONTH_DATE = DATE_YEAR_MONTH_DATE;
  exports.MONEY_TEN_THOUSAND_YUAN_TO_CENT = MONEY_TEN_THOUSAND_YUAN_TO_CENT;
  exports.MONEY_YUAN_TO_CENT = MONEY_YUAN_TO_CENT;
  exports.MS_DAY = MS_DAY;
  exports.MS_HOUR = MS_HOUR;
  exports.MS_MINUTE = MS_MINUTE;
  exports.MS_SECOND = MS_SECOND;
  exports.MS_WEEK = MS_WEEK;
  exports.MS_YEAR = MS_YEAR;
  exports.calculateRate = calculateRate;
  exports.divideNumber = divideNumber;
  exports.endOfDay = endOfDay;
  exports.endOfMonth = endOfMonth;
  exports.endOfWeek = endOfWeek;
  exports.formatArea = formatArea;
  exports.formatCity = formatCity;
  exports.formatDate = formatDate;
  exports.formatDateShortly = formatDateShortly;
  exports.formatDateTime = formatDateTime;
  exports.formatDateTimeShortly = formatDateTimeShortly;
  exports.formatDistrict = formatDistrict;
  exports.formatMonth = formatMonth;
  exports.formatNumberWithComma = formatNumberWithComma;
  exports.formatProvince = formatProvince;
  exports.formatWeek = formatWeek;
  exports.isCustomBarcode = isCustomBarcode;
  exports.isStandardBarcode = isStandardBarcode;
  exports.minusNumber = minusNumber;
  exports.moneyToBackend = moneyToBackend;
  exports.moneyToDisplay = moneyToDisplay;
  exports.normalizeVersion = normalizeVersion;
  exports.plusNumber = plusNumber;
  exports.rateToBackend = rateToBackend;
  exports.rateToDisplay = rateToDisplay;
  exports.startOfDay = startOfDay;
  exports.startOfMonth = startOfMonth;
  exports.startOfNextDay = startOfNextDay;
  exports.startOfNextMonth = startOfNextMonth;
  exports.startOfNextWeek = startOfNextWeek;
  exports.startOfPrevDay = startOfPrevDay;
  exports.startOfPrevMonth = startOfPrevMonth;
  exports.startOfPrevWeek = startOfPrevWeek;
  exports.startOfWeek = startOfWeek;
  exports.timesNumber = timesNumber;
  exports.truncateNumber = truncateNumber;
  exports.weightGToBackend = weightGToBackend;
  exports.weightKGToBackend = weightKGToBackend;
  exports.weightToG = weightToG;
  exports.weightToKG = weightToKG;

}));
//# sourceMappingURL=hive.js.map
