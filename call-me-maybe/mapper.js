const map = (arr, func) => {
    let res = []
    arr.reduce(((_,c,i,a)=>res.push(func(c,i,a))),undefined)
    return res
}

const flatMap = (arr, func) => arr.reduce((acc,c,i,a) => acc.concat(func(c,i,a)),[])