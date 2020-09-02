const filterKeys = (obj,func) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        if (func(k)) {
            res[k] = v
        }
    }
    return res
}

const mapKeys = (obj,func) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        res[func(k)] = v 
    }
    return res
}

const reduceKeys = (obj,func,iv) => iv == undefined ?  Object.keys(obj).reduce(func) : [iv].concat(Object.keys(obj)).reduce(func)