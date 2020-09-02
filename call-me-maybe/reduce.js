const fold = (arr, func, acc) => arr.map((x)=> acc = func(acc,x))[arr.length-1]

const foldRight = (arr,func,acc) => arr.slice().reverse().map((x)=> acc = func(acc,x))[arr.length-1]

const reduce = (arr,func) => {
    if (arr.length < 1) throw Error('Array is empty')
    return fold(arr.slice(1),func,arr[0])
}

const reduceRight = (arr,func) => {
    if (arr.length < 1) throw Error('Array is empty')
    return typeof arr[0] == 'string' ? foldRight(arr,func,"") : foldRight(arr.slice(1),func,arr[0]) 
}