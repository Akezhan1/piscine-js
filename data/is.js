const is = {}

is.num = (arg) => typeof(arg) === 'number' ? typeof(arg) : "";

is.nan = (arg) => Number.isNaN(arg);

is.str = (arg) => typeof(arg) === 'string' ? typeof(arg) : "";

is.bool = (arg) => typeof(arg) === 'boolean' ? typeof(arg) : "";

is.undef = (arg) => typeof arg === 'undefined' ? true : "";

is.def = (arg) => typeof arg !== 'undefined' ? true : "";

is.arr = (arg) => toString.call(arg).slice(8, -1) === 'Array' ? toString.call(arg).slice(8, -1) : "";

is.obj = (arg) => typeof(arg) === 'object' ? toString.call(arg).slice(8, -1) === 'Array' ? "" : arg === null ? "" : typeof arg:  "" ;

is.fun = (arg) => typeof(arg) === 'function' ? typeof(arg) : "";

is.truthy = (arg) => (arg) ? true : "";

is.falsy = (arg) => (!arg) ? true : "";

let x = {};

console.log(is.undef(NaN))