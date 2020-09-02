const get = (src,path) => {
    let result

    let arr = path.split(".")
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            result = src[arr[i]]
        } else {
            result = result[arr[i]]
        }

        if (result == undefined) {
            return result
        }

    }

    return result
}