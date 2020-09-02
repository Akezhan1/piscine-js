const sign = (num) => (num > 0) ? 1 : (num == 0) ? 0 : -1;

const sameSign = (a,b) => (sign(a) == sign(b));
