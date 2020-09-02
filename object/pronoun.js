const pronouns = ['i','you','he','she','it','we','they']

const pronoun = (str) => {
    let res = {}
    let arr = str.toLowerCase().match(/\w+/ig)
    arr.forEach((v,i)=> {
        if (pronouns.includes(v.toLowerCase())) {
            if (!(v in res)) {
                res[v] = {word:[],count:0}
            }
            if (arr[i+1] !== undefined && !(pronouns.includes(arr[i+1].toLowerCase()))) {
                res[v]['word'].push(arr[i+1])
            } 
            res[v]['count'] += 1
        }
    })
    return res
}