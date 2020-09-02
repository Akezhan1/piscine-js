let escapeStr = "\`\\\/\"\'";

let arr = [4,'2'];

const obj = {
    str: "str",
    num: 5,
    bool: true,
    undef: undefined
};
Object.freeze(obj);

const nested = {
    arr: [4, undefined,'2'],
    obj: {
        str: "str",
        num: 5,
        bool: true
    }
};
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);
