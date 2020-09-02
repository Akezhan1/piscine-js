let arrToSet = (arr) => new Set(arr);

let arrToStr = (arr) => arr.join('');

let setToArr = (set) => Array.from(set);

let setToStr = (set) => arrToStr(Array.from(set));

let strToArr = (str) => Array.from(str);

let strToSet = (str) => new Set(Array.from(str));

let mapToObj = (map) => Object.fromEntries(map.entries());

let objToArr = (obj) => Object.values(obj);

let objToMap = (obj) => new Map(Object.entries(obj));

let arrToObj = (arr) => Object.assign({}, arr);

let strToObj = (str) => Object.assign({}, strToArr(str));

const superTypeOf = (arg) => toString.call(arg).slice(8, -1) === 'Null' ? 'null' : toString.call(arg).slice(8, -1) === 'Undefined' ? 'undefined' : toString.call(arg).slice(8, -1);