const split = (str,separator) => {
    if (separator == "") {
        return Array.from(str)
    }

    let result = []
    let start = 0,end = 0
    
    while (str.search(separator) !== -1) {
        end = str.search(separator)
        str = str.replace(separator,"^")
        result.push(str.slice(start,end))
        start = end+1
    }

    result.push(str.slice(start))
    return result
}

const join = (arr,separator) => {
    let result = ""
    for (let i=0;i < arr.length;i++) {
        if (i == arr.length-1) {
            result += arr[i]
            break
        }
        result += arr[i]+separator    
    }

    return result
}