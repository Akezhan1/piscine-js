const triangle = (char,deep) => {
    let result = ""
    for (let i=1; i <= deep;i++) {
        if (i == deep) {
            result += char.repeat(i)
            break
        }
        result += (char.repeat(i)+"\n")
    }
    return result
}