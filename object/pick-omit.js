const pick = (obj,keys) => {
    let res = {}
    if (typeof keys == 'string') {
        keys = [keys]
    }
    Object.keys(obj).forEach((key)=> keys.forEach((k)=> key == k ? res[k]=obj[k] : ""))
    return res
}

const omit = (obj,keys) => {
    let res = Object.assign({},obj)
    if (typeof keys == 'string') {
        keys = [keys]
    }
    keys.forEach((key)=>delete res[key])
    return res
}