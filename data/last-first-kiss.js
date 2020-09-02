let first = (a) => {
    let ok = (typeof a == 'string') ? true : (typeof a == 'object') ? true : false;

    if (ok) {
        return a[0]
    }
}

let last = (a) => {
    let len = (typeof a == 'string') ? a.length : (typeof a == 'object') ? a.length : 0;

    return a[len-1]

}

let kiss = (a) => {
    let result = [last(a),first(a)];
    return result
}
