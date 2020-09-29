
exports.min = function min (array) {
  if (!array || !array.length || typeof array == 'undefined') return 0;
  let min = array[0];
  let max = min;
  for (let i = 1; i < array.length; i++) {
      if (array[i] > max) max = array[i];
      if (array[i] < min) min = array[i];
  }
  return min;
}

exports.max = function max (array) {
  if (!array || !array.length || typeof array == 'undefined') return 0;
  let min = array[0];
  let max = min;
  for (let i = 1; i < array.length; i++) {
      if (array[i] > max) max = array[i];
      if (array[i] < min) min = array[i];
  }
  return max;
}

exports.avg = function avg (array) {
  if (!array || !array.length || typeof array == 'undefined') return 0;
  let arraySum = 0;
  for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
  }
  let result = arraySum / array.length;
  return result;
}
