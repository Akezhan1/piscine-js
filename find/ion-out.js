const ionOut = (str) => {
    let reg = /(?<=t)ion/g
    let res = []
    for (let value of str.split(" ")) {
        if (value.search(reg) !== -1) {
            res.push(value.replace(reg,"").replace(/\W/,""))
        }
    }

    return res
}