const filter = (arr, func) => {
    let res = []
    arr.map((c,i,a) => func(c,i,a) ? res.push(c) : [])
    return res
}

const reject = (arr,func) => {
    let res = []
    arr.map((c,i,a) => func(c,i,a) ? [] : res.push(c))
    return res
}

const partition = (arr,func) => [filter(arr,func)].concat([reject(arr,func)])