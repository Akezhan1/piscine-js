const superTypeOf = (arg) => toString.call(arg).slice(8, -1)

const deepCopy = (arg) => {
    let res
    if (superTypeOf(arg) == 'Object') {
        res = {}
        Object.keys(arg).forEach((k)=>res[k]=deepCopy(arg[k]))
    } else if (superTypeOf(arg)== 'Array') {
        res = []
        arg.forEach((v,i)=>res[i]=deepCopy(arg[i]))
    } else {
        res = arg
    }
    return res
}