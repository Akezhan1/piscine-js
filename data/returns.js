function id (id) {
    return id
}

function getLength(a) {
    let x = (typeof a == 'string') ? a.length : (typeof a == 'object') ? a.length : 0;
    return x
}