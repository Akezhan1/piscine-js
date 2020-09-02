let sameAmount = (data,firstReg,secondReg) => {
    let fr = new RegExp(firstReg, 'g') 
    let sr = new RegExp(secondReg, 'g') 
    let f = data.match(fr)
    let s = data.match(sr)
    return f == undefined ? s == undefined ? true : false : s == undefined ? false : f.length == s.length
}
