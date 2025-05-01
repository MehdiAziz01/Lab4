/**
 * 
 * @param {*} num1 - First number to add. 
 * @param {*} num2 - Second number to add. 
 * @param {*} add - Boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true, and false otherwise.
 */
function sumValues(num1, num2, add) {
  // 1) type checks
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof add !== 'boolean') {
    return false;
  }
  // 2) if add is false
  if (!add) {
    return false;
  }
  // 3) otherwise
  return num1 + num2;
}

/**
 * 
 * @param {*} prices - An array of the original prices.
 * @param {*} discount - A number between 0–1 to represent the discount. 
 * @returns An array of each price's new price after the discount is applied, or false if the array is empty.
 */
function discountPrices(prices, discount) {
  if (!Array.isArray(prices) || typeof discount !== 'number') {
    return false;
  }
  if (prices.length === 0) return false;
  const discounted = [];
  for (let i = 0; i < prices.length; i++) {
    const p = prices[i] * (1 - discount);
    discounted.push(Math.round(p * 100) / 100);
  }
  return discounted;
}

module.exports = { sumValues, discountPrices };
