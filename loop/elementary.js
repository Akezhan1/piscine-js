const multiply = (a,b) => {
    if (b == 0 || a == 0) {
        return 0
    }

    
    const tmp = a;
    if (b < 0) {
        while (b !== 1) {
            a -= tmp
            b++
        }
    } else {
        while (b !== 1) {
            a += tmp
            b--
        }
    }

    

    return a
}

const divide = (a,b) => {
    let result = 0
    let isNeg = false

    if (a < 0 && b < 0) {
        a = multiply(a,-1)
        b = multiply(b,-1)
    } else if (a < 0) {
        isNeg = true
        a = multiply(a,-1)
    } else if (b < 0) {
        isNeg = true
        b = multiply(b,-1)
    } 

    while (a > 0) {
        a -= b
        if (a < 0) {
            break
        }

        result++
    }

    return isNeg ? result == 0 ? 0 : multiply(result,-1) : result
}

const modulo = (a,b) => {
    let isNeg = false

    if (a < 0 && b < 0) {
        isNeg = true
        a = multiply(a,-1)
        b = multiply(b,-1)
    } else if (a < 0) {
        isNeg = true
        a = multiply(a,-1)
    } else if (b < 0) {
        b = multiply(b,-1)
    } else {
        if (a < b) {
            return a
        }
    }

    while (a !== 1) {
        a -= b
        if (a < b) {
            return isNeg ? a == 0 ? 0 : multiply(a,-1) : a
        }
    }

    return isNeg ? a == 0 ? 0 : multiply(a,-1) : a
}