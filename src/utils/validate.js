/**
 * Created by jiachenpan on 16/11/18.
 */
import validator from 'validator'
// see https://github.com/chriso/validator.js

export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * check if the string is empty.
 *
 * @param {String} str
 * @return {Boolean}
 */
export function validateEmptyString(str) {
  const reg = /^\s*$/
  return (!str || str.length === 0 || reg.test(str))
}

/**
 * check if the string is an email.
 *
 * @param {String} str
 * @return {Boolean}
 */
export function validateEmail(str) {
  return validator.isEmail(str)
}

/**
 * check if the string is in a array of allowed values.
 *
 * @param {String} str
 * @param {Array} values
 * @return {Boolean}
 */
export function validateEnum(str, values) {
  return validator.isIn(str, values)
}

/**
 * check if the string's length falls in a range.
 *
 * @param {String} str
 * @param {Number} min
 * @param {Number} max
 * @return {Boolean}
 */
export function validateStrLen(str, min = 0, max = undefined) {
  return validator.isLength(str, { min: min, max: max })
}
