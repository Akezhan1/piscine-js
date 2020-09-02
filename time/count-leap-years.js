const isLeapYear = (date) => date%400 == 0 ? true : date%100 == 0 ? false : date%4 == 0 ? true : false

const countLeapYears = (date) => {
    let counter = 0

    for (let i = 1; i < date.getFullYear();i++) {
        if (isLeapYear(i)) {
            counter++
        }
    }

    return counter
}