// @ts-check

/**
 * Best math lib
 * @param {number} a a number
 * @param {number} b another number
 * @returns {number} subsracted
 */
export function substract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

// @ts-expect-error
substract("123", 123);

// @ts-ignore
substract("123", 123);

multiply("123", 123);
