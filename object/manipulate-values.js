const filterValues = (obj,func) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        if (func(v)) {
            res[k] = v
        }
    }
    return res
}

const mapValues = (obj,func) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        res[k] = func(v)
    }
    return res
}

const reduceValues = (obj,func,iv) => iv == undefined ?  Object.values(obj).reduce(func) : Object.values(obj).concat(iv).reduce(func)