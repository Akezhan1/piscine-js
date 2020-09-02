const pyramid = (char, deep) => {
    let result = ""
    let width = 1
    for (let i = 1; i <=deep; i++) {
        result += " ".repeat((char.length*deep)-i*char.length)
        if (i == deep) {
            result += char.repeat(width)
            break
        }
        result += char.repeat(width)+"\n"
        width += 2
    }

    return result
}