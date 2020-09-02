const forEach = (arr, func) => {
    let res = []
    arr.map((cv,i,a) => res.push(func(cv,i,a)))
    return res
}