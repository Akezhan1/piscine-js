const mult2 = (a) => {
    return (b) => a*b
}

const add3 = (a) => {
    return (b) => {
        return (c) => a+b+c
    }
}

const sub4 = (a) => {
    return (b) => {
        return (c) => {
            return (d) => a-b-c-d
        }
    }
}