const invert = (obj) => {
    let res = {}
    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            res[obj[k]] = k
        }
    }
    return res
}