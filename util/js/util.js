"use strict";

/**
 * Utilクラス
 */
class Util {
  /**
   * 乱数を生成する(整数)
   * @param {*} min 最小値
   * @param {*} max 最大値
   * @return {*} 乱数
   */
  static getRandom(min, max) {
    var random = Math.floor(Math.random() * (max + 1 - min)) + min;
    return random;
  }

  /**
   * 二次元配列を一次元配列に変換する
   * @param {*} array 変換元二次元配列
   * @return {*}
   */
  static convToOneArray(array) {
    const result = array.reduce((pre, current) => {
      pre.push(...current);
      return pre;
    }, []);
    return result;
  }

  /**
   * 一次元配列を次二元配列に変換する
   * @param {*} array 変換元一次元配列
   * @param {*} col カラム数
   * @return {*}
   */
  static convToTowArray(array, col) {
    const result = [];
    for (let i = 0; i < array.length; i += col) {
      result.push(array.slice(i, i + col));
    }
    return result;
  }
}
