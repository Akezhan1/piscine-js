const reverse = (arg) => {
    let result = new Array()

    for (let i = arg.length; i >= 0;i--) {
        result.push(arg[i])
    }

    result.shift()
    return typeof arg == 'string' ? result.join('') : result 
}