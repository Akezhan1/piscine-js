const every = (arr,func) => {
    for (let i of arr) {
        if (!func(i)) {
            return false
        }
    }
    return true
}

const some = (arr,func) => {
    for (let i of arr) {
        if (func(i)) {
            return true
        }
    }
    return false
}

const none = (arr,func) => {
    for (let i of arr) {
        if (func(i)) {
            return false
        }
    }
    return true
}