const filterEntries = (obj,func) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        if (func([k,v])) {
            res[k] = v
        }
    }
    return res
}

const mapEntries = (obj,func) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        res[func([k,v])[0]] = func([k,v])[1]
    }
    return res
}

const reduceEntries = (obj,func,iv) => {
    let arr = Object.entries(obj)
    if (iv == undefined) {
        iv = ''
    }
    for (let i of arr) {
        iv = func(iv,i)
    }
    return iv
}

const lowCarbs = (obj) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        if (v/100*nutritionDB[k]['carbs'] < 50) {
            res[k] = v
        }
    }
    return res
}

const totalCalories = (obj) => {
    let res = 0
    for (let [k, v] of Object.entries(obj)) {
        res += v/100*nutritionDB[k]['calories']
    }
    return Number(res.toFixed(1))
}

const cartTotal = (obj) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        let tmp = {}
        for (let [kk, vv] of Object.entries(nutritionDB[k])) {
            tmp[kk] = Math.round((v/100*vv)*1000)/1000
        }
        res[k] = tmp
    }
    return res
}