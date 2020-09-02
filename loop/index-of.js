const indexOf = (arr,val,start) => {
    if (start === undefined) {
        start = 0
    }

    for (let i = start; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }

    return -1
}

const lastIndexOf = (arr,val,start) => {
    if (start === undefined) {
        start = arr.length
    }

    //console.log(start)

    for (let i = start; i >= 0; i--) {
        if (arr[i] === val) {
            return i
        }
    }

    return -1
}

const includes = (arr,val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return true
        }
    }

    return false
}