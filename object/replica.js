const superTypeOf = (arg) => toString.call(arg).slice(8, -1)

const replica = (obj,...copies) => {
    copies.forEach((c)=>{
        Object.entries(c).forEach(([k,v])=>{
            if (superTypeOf(v) == 'Object' && superTypeOf(obj[k])== 'Object') {
                obj[k]=replica(obj[k],v)
            } else {
                obj[k]=v
            }
        })
    })
    return obj
}