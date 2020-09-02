function repeat(str, count) {
    const tmp = str
    if (count <= 0) {
        return ''
    }

    while (count !== 1) {
        str += tmp
        count--
    }
    return str
}

console.log(repeat('a',-1))