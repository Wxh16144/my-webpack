/**
 * 两数之和
 * @param {number} a 第一个值
 * @param {number} b 第二个值
 */
const add = (a, b) => a + b;

/**
 * 随机颜色
 * @param {number} digit 位数
 */
const randomColor = (digit = 6) => `#${Math.random().toString(16).slice(-digit)}`;

/**
 * 随机范围数值
 * @param {number}} min 最小值
 * @param {number} max 最大值
 */
const randomNumber = (min = 0, max = 1) => {
  const { random, floor } = Math;
  return floor(random() * (max - min + 1) + min);
};

export default {
  add,
  randomColor,
  randomNumber,
};
