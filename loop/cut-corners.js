const round = (num) => {
    let neg = false
    if (num < 0) {
        neg = true
        num *= -1
    }

    let sub = false
    if (num%1 === 0) {
        return num
    } else if (num%1 > 0.5) {
        sub = true
    }
    
    let result = num - (num%1)

    if ((num%1 >= 0.5 && num%1 <= 0.6) && !sub && !neg) {
        return result+1
    }
    
    return sub ? neg ? (result*-1)-1 : result+1: neg ? (result*-1) : result
}

const ceil = (num) => {
    if (num%1 === 0) {
        return num
    }

    let neg = false
    if (num < 0) {
        neg = true
        num *= -1
    }

    return num%1 >= 0.5 ? neg ? (round(num)*-1)+1 : round(num) : neg ? round(num)*-1 : round(num)+1
}

const floor = (num) => {
    if (num%1 === 0) {
        return num
    }

    let neg = false
    if (num < 0) {
        neg = true
        num *= -1
    }

    return num%1 >= 0.5 ? neg ? (round(num)*-1) : round(num)-1 : neg ? (round(num)*-1)-1 : round(num)
}

const trunc = (num) => {
    if (num%1 === 0) {
        return num
    }

    return num <= 0 ? num*-1%1 > 0.5 ? round(num)+1 : round(num) : num%1 >= 0.5 ? round(num)-1 : round(num)
}