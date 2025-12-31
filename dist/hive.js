/**
 * hive.js v0.2.5
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

  // 微信付款码
  var AUTH_CODE_WECHAT = 1;
  // 支付宝付款码
  var AUTH_CODE_ALIPAY = 2;

  // 年月日：2020-10-01
  var DATE_YEAR_MONTH_DATE = 'YYYY-MM-DD';
  // 年月：2020-10
  var DATE_YEAR_MONTH = 'YYYY-MM';
  // 月日：10-01
  var DATE_MONTH_DATE = 'MM-DD';
  // 年月日：2020/10/01
  var DATE_YEAR_MONTH_DATE_SLASH = 'YYYY/MM/DD';
  // 年月：2020/10
  var DATE_YEAR_MONTH_SLASH = 'YYYY/MM';
  // 月日：10/01
  var DATE_MONTH_DATE_SLASH = 'MM/DD';
  // 年月日：2020年10月1日
  var DATE_YEAR_MONTH_DATE_CHINESE = 'YYYY年M月D日';
  // 年月：2020年10月
  var DATE_YEAR_MONTH_CHINESE = 'YYYY年M月';
  // 月日：10月1日
  var DATE_MONTH_DATE_CHINESE = 'M月D日';

  // 年月日 时分秒：2020-10-01 10:00:00
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND = 'YYYY-MM-DD HH:mm:ss';
  // 年月日 时分：2020-10-01 10:00
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE = 'YYYY-MM-DD HH:mm';
  // 月日 时分：10-01 10:00
  var DATE_TIME_MONTH_DATE_HOUR_MINUTE = 'MM-DD HH:mm';
  // 年月日 时分秒：2020/10/01 10:00:00
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH = 'YYYY/MM/DD HH:mm:ss';
  // 年月日 时分：2020/10/01 10:00
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH = 'YYYY/MM/DD HH:mm';
  // 月日 时分：10/01 10:00
  var DATE_TIME_MONTH_DATE_HOUR_MINUTE_SLASH = 'MM/DD HH:mm';
  // 年月日 时分秒：2020/10/01 10:00:00
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_CHINESE = 'YYYY年M月D日 HH:mm:ss';
  // 年月日 时分：2020/10/01 10:00
  var DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE = 'YYYY年M月D日 HH:mm';
  // 月日 时分：10/01 10:00
  var DATE_TIME_MONTH_DATE_HOUR_MINUTE_CHINESE = 'M月D日 HH:mm';

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
  // 元 转 厘
  var MONEY_YUAN_TO_PENNY = 1000;

  // 手机号
  var PHONE_NUMBER_MOBILE = 1;
  // 固定电话
  var PHONE_NUMBER_LANDLINE = 2;
  // 400 电话
  var PHONE_NUMBER_400 = 3;

  // 保质期：日
  var SHELF_LIFE_DAY = 24;
  // 保质期：月
  var SHELF_LIFE_MONTH = 30 * SHELF_LIFE_DAY;
  // 保质期：年
  var SHELF_LIFE_YEAR = 365 * SHELF_LIFE_DAY;

  // 体积：KB
  var SIZE_KB = 1024;
  // 体积：MB
  var SIZE_MB = 1024 * SIZE_KB;
  // 体积：GB
  var SIZE_GB = 1024 * SIZE_MB;

  /**
   * 是否为整数
   *
   * @param value
   * @returns
   */
  function isInteger(value) {
    return value % 1 === 0;
  }

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
   * 万分比 转换为 折扣，最多保留 1 位小数
   *
   * @param value 后端的比例值
   * @returns
   */
  function discountToDisplay(value) {
    var result = divideNumber(value, 1000);
    // 如果小数部分为 0，返回整数部分
    // 如果有小数，保留 1 位小数
    return isInteger(result) ? Math.floor(result) : +truncateNumber(result, 1);
  }
  /**
   * 折扣 转换为 万分比
   *
   * @param value 前端的比例值
   * @returns
   */
  function discountToBackend(value) {
    return timesNumber(isInteger(value) ? value : +truncateNumber(value, 1), 1000);
  }

  /**
   * 米 转换为 千米
   *
   * @param value 后端的比例值
   * @returns
   */
  function distanceToDisplay(value) {
    var result = divideNumber(value, 1000);
    // 如果小数部分为 0，返回整数部分
    return isInteger(result) ? Math.floor(result) : result;
  }
  /**
   * 千米 转换为 米
   *
   * @param value 前端的比例值
   * @returns
   */
  function distanceToBackend(value) {
    return timesNumber(value, 1000);
  }
  // 定义地球半径（单位：米）
  var EARTH_RADIUS_M = 6371 * 1000;
  // 将角度转换为弧度
  function toRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  /**
   * 计算两个点之间的距离，返回距离单位是米
   *
   * @param longitude1 第一个点的经度
   * @param latitude1 第一个点的纬度
   * @param longitude2 第二个点的经度
   * @param latitude2 第二个点的纬度
   * @returns
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
    var result = divideNumber(value, 100);
    // 如果小数部分为 0，返回整数部分
    return isInteger(result) ? Math.floor(result) : result;
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
    var result = divideNumber(value1 * 10000, value2);
    // 如果小数部分为 0，返回整数部分
    return isInteger(result) ? Math.floor(result) : result;
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
   * 把数字的整数部分格式化为以千为段拆分，以逗号为分隔符
   *
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
   * @param value
   * @returns
   */
  function formatCount(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return formatNumberWithComma(value) + unit;
  }

  /**
   * 把万分比格式化为折扣
   *
   * @param value
   * @returns
   */
  function formatDiscount(value) {
    return discountToDisplay(value) + '折';
  }

  /**
   * 把距离格式化为千米单位
   *
   * @param distance
   * @returns
   */
  function formatDistance(distance) {
    return distanceToDisplay(distance) + '公里';
  }

  function normalizeDuration(milliseconds) {
    var result = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    if (milliseconds <= 0) {
      return result;
    }
    var seconds = Math.ceil(milliseconds / MS_SECOND);
    var minutes = Math.floor(milliseconds / MS_MINUTE);
    var hours = Math.floor(milliseconds / MS_HOUR);
    var days = Math.floor(milliseconds / MS_DAY);
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

  function formatDuration(milliseconds) {
    var result = [];
    var data = normalizeDuration(milliseconds);
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
   * @param timestamp
   * @returns
   */
  function formatDate(timestamp) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DATE_YEAR_MONTH_DATE;
    return dayjs__default.default(timestamp).format(format);
  }
  /**
   * 把时间戳格式化为 2020-10-01 至 2020-10-02 形式
   *
   * @param timestamp
   * @returns
   */
  function formatDateRange(startTimestamp, endTimestamp) {
    return formatDate(startTimestamp) + ' 至 ' + formatDate(endTimestamp);
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
   * 把时间戳格式化为 2020-10-01 00:00 至 2020-10-02 00:00 形式
   *
   * @param timestamp
   * @returns
   */
  function formatDateTimeRange(startTimestamp, endTimestamp) {
    return formatDateTime(startTimestamp) + ' 至 ' + formatDateTime(endTimestamp);
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
   * 格式化金额（元），保留 2 位小数
   *
   * @param value
   * @returns
   */
  function formatAmount(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '元';
    return formatNumberWithComma(moneyToDisplay(value), 2) + unit;
  }
  /**
   * 格式化金额（厘），保留 3 位小数
   *
   * @param value
   * @returns
   */
  function formatPenny(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '元';
    return formatNumberWithComma(moneyToDisplay(value, MONEY_YUAN_TO_PENNY), 3) + unit;
  }

  /**
   * 把万分比格式化为百分比
   *
   * @param value
   * @returns
   */
  function formatRatePercent(value) {
    return rateToDisplay(value) + '%';
  }

  function formatShelfLife(value) {
    if (value <= 0) {
      return '';
    }
    var result = '';
    var year = Math.floor(value / SHELF_LIFE_YEAR);
    if (year > 0) {
      result += "".concat(year, "\u5E74");
      value -= SHELF_LIFE_YEAR * year;
    }
    var month = Math.floor(value / SHELF_LIFE_MONTH);
    if (month > 0) {
      result += "".concat(month, "\u4E2A\u6708");
      value -= SHELF_LIFE_MONTH * month;
    }
    var day = Math.floor(value / SHELF_LIFE_DAY);
    if (day > 0) {
      result += "".concat(day, "\u5929");
      value -= SHELF_LIFE_DAY * day;
    }
    if (value > 0) {
      result += "".concat(value, "\u5C0F\u65F6");
    }
    return result;
  }

  function formatSize(value) {
    if (value >= SIZE_GB) {
      var result = divideNumber(value, SIZE_GB);
      return "".concat(truncateNumber(result, isInteger(result) ? 0 : 2), "GB");
    } else if (value >= SIZE_MB) {
      var _result = divideNumber(value, SIZE_MB);
      return "".concat(truncateNumber(_result, isInteger(_result) ? 0 : 2), "MB");
    } else if (value >= SIZE_KB) {
      var _result2 = divideNumber(value, SIZE_KB);
      return "".concat(truncateNumber(_result2, isInteger(_result2) ? 0 : 2), "KB");
    }
    return "".concat(value, "B");
  }

  function formatHourMinutes(value) {
    var hours = Math.floor(value / 60);
    var minutes = value % 60;
    return "".concat(hours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'));
  }
  // 营业时间时段范围为 [0, 2880] 可跨天, 0-1440 为当天，1440-2880 为次日
  function formatBusinessTimes(businessTimes) {
    var len = businessTimes.length;
    if (len === 0 || len % 2 !== 0) {
      return '';
    }
    var timeRanges = [];
    for (var i = 0; i < len; i += 2) {
      var start = businessTimes[i];
      var end = businessTimes[i + 1];
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
   * 是否为邮箱
   *
   * @param value
   * @returns
   */
  function isEmail(value) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
  }

  /**
   * 是否为价格
   *
   * @param value
   * @returns
   */
  function isPrice(value) {
    return /^(?:[1-9]\d*|0)(?:\.\d{1,2})?$/.test(value);
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

  /// 解析付款码
  function parseAuthCode(value) {
    // 微信    133619858964803511
    // 支付宝  283654147086344711
    var length = value.length;
    if (length == 18 || length == 19 || length == 20) {
      if (value.startsWith('1')) {
        return AUTH_CODE_WECHAT;
      } else if (value.startsWith('2')) {
        return AUTH_CODE_ALIPAY;
      }
    }
    return -1;
  }

  /// 解析电话号码
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

  exports.AUTH_CODE_ALIPAY = AUTH_CODE_ALIPAY;
  exports.AUTH_CODE_WECHAT = AUTH_CODE_WECHAT;
  exports.DATE_MONTH_DATE = DATE_MONTH_DATE;
  exports.DATE_MONTH_DATE_CHINESE = DATE_MONTH_DATE_CHINESE;
  exports.DATE_MONTH_DATE_SLASH = DATE_MONTH_DATE_SLASH;
  exports.DATE_TIME_MONTH_DATE_HOUR_MINUTE = DATE_TIME_MONTH_DATE_HOUR_MINUTE;
  exports.DATE_TIME_MONTH_DATE_HOUR_MINUTE_CHINESE = DATE_TIME_MONTH_DATE_HOUR_MINUTE_CHINESE;
  exports.DATE_TIME_MONTH_DATE_HOUR_MINUTE_SLASH = DATE_TIME_MONTH_DATE_HOUR_MINUTE_SLASH;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_CHINESE;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_CHINESE = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_CHINESE;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SECOND_SLASH;
  exports.DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH = DATE_TIME_YEAR_MONTH_DATE_HOUR_MINUTE_SLASH;
  exports.DATE_YEAR_MONTH = DATE_YEAR_MONTH;
  exports.DATE_YEAR_MONTH_CHINESE = DATE_YEAR_MONTH_CHINESE;
  exports.DATE_YEAR_MONTH_DATE = DATE_YEAR_MONTH_DATE;
  exports.DATE_YEAR_MONTH_DATE_CHINESE = DATE_YEAR_MONTH_DATE_CHINESE;
  exports.DATE_YEAR_MONTH_DATE_SLASH = DATE_YEAR_MONTH_DATE_SLASH;
  exports.DATE_YEAR_MONTH_SLASH = DATE_YEAR_MONTH_SLASH;
  exports.MONEY_TEN_THOUSAND_YUAN_TO_CENT = MONEY_TEN_THOUSAND_YUAN_TO_CENT;
  exports.MONEY_YUAN_TO_CENT = MONEY_YUAN_TO_CENT;
  exports.MONEY_YUAN_TO_PENNY = MONEY_YUAN_TO_PENNY;
  exports.MS_DAY = MS_DAY;
  exports.MS_HOUR = MS_HOUR;
  exports.MS_MINUTE = MS_MINUTE;
  exports.MS_SECOND = MS_SECOND;
  exports.MS_WEEK = MS_WEEK;
  exports.MS_YEAR = MS_YEAR;
  exports.PHONE_NUMBER_400 = PHONE_NUMBER_400;
  exports.PHONE_NUMBER_LANDLINE = PHONE_NUMBER_LANDLINE;
  exports.PHONE_NUMBER_MOBILE = PHONE_NUMBER_MOBILE;
  exports.SHELF_LIFE_DAY = SHELF_LIFE_DAY;
  exports.SHELF_LIFE_MONTH = SHELF_LIFE_MONTH;
  exports.SHELF_LIFE_YEAR = SHELF_LIFE_YEAR;
  exports.SIZE_GB = SIZE_GB;
  exports.SIZE_KB = SIZE_KB;
  exports.SIZE_MB = SIZE_MB;
  exports.calculateDistance = calculateDistance;
  exports.calculateRate = calculateRate;
  exports.discountToBackend = discountToBackend;
  exports.discountToDisplay = discountToDisplay;
  exports.distanceToBackend = distanceToBackend;
  exports.distanceToDisplay = distanceToDisplay;
  exports.divideNumber = divideNumber;
  exports.endOfDay = endOfDay;
  exports.endOfMonth = endOfMonth;
  exports.endOfWeek = endOfWeek;
  exports.formatAmount = formatAmount;
  exports.formatArea = formatArea;
  exports.formatBusinessTimes = formatBusinessTimes;
  exports.formatCity = formatCity;
  exports.formatCount = formatCount;
  exports.formatDate = formatDate;
  exports.formatDateRange = formatDateRange;
  exports.formatDateShortly = formatDateShortly;
  exports.formatDateTime = formatDateTime;
  exports.formatDateTimeRange = formatDateTimeRange;
  exports.formatDateTimeShortly = formatDateTimeShortly;
  exports.formatDiscount = formatDiscount;
  exports.formatDistance = formatDistance;
  exports.formatDistrict = formatDistrict;
  exports.formatDuration = formatDuration;
  exports.formatHourMinutes = formatHourMinutes;
  exports.formatMonth = formatMonth;
  exports.formatNumberWithComma = formatNumberWithComma;
  exports.formatPenny = formatPenny;
  exports.formatProvince = formatProvince;
  exports.formatRatePercent = formatRatePercent;
  exports.formatShelfLife = formatShelfLife;
  exports.formatSize = formatSize;
  exports.formatWeek = formatWeek;
  exports.isCustomBarcode = isCustomBarcode;
  exports.isEmail = isEmail;
  exports.isInteger = isInteger;
  exports.isPrice = isPrice;
  exports.isStandardBarcode = isStandardBarcode;
  exports.minusNumber = minusNumber;
  exports.moneyToBackend = moneyToBackend;
  exports.moneyToDisplay = moneyToDisplay;
  exports.normalizeDuration = normalizeDuration;
  exports.normalizeVersion = normalizeVersion;
  exports.parseAuthCode = parseAuthCode;
  exports.parsePhoneNumber = parsePhoneNumber;
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
