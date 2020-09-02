const chunk = (arr,num) => {
    let result = []
    let tmp = []

    for (let i = 0; i < arr.length;i++) {
        tmp.push(arr[i])
        if (tmp.length == num) {
            result.push(tmp)
            tmp = []
            continue
        }
    }
    if (arr.length%num !==0 ) {
        result.push(tmp)
    }
    return result
}