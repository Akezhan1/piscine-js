let isPositive = (num) => (num <= 0) ? false : true;

let abs = (num) => (isPositive(num)) ? num : (num == 0) ? 0 : -1*num;

console.log(abs(0))
