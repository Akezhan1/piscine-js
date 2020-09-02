const superTypeOf = (arg) => toString.call(arg).slice(8, -1) === 'Null' ? 'Null' : toString.call(arg).slice(8, -1) === 'Undefined' ? 'Undefined' : toString.call(arg).slice(8, -1)

const fusion = (a,b) => {
    if (superTypeOf(a) == 'Array' && superTypeOf(b) == 'Array') {
        return a.concat(b)
    } else if (superTypeOf(a) == 'String' && superTypeOf(b) == 'String') {
        return a+' '+b
    } else if (superTypeOf(a) == 'Number' && superTypeOf(b) == 'Number') {
        return a+b
    } else if (superTypeOf(a) !== superTypeOf(b)) {
        if (superTypeOf(b) == 'Undefined') {
            return a
        }
        return b
    } else if (superTypeOf(a) == 'Object' && superTypeOf(b) == 'Object') {
        let res = {}
        if (Object.keys(a).length > Object.keys(b).length) {
            Object.keys(a).forEach((key)=> res[key] = fusion(a[key],b[key]))
        } else {
            Object.keys(b).forEach((key)=> res[key] = fusion(a[key],b[key]))
        }
        return res
    } else {
        return b
    }
}