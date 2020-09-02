const isFriday = (date) => date.getDay() == 5

const isWeekend = (date) => date.getDay() == 0 || date.getDay() == 6

const isLeapYear = (date) => date.getFullYear()%400 == 0 ? true : date.getFullYear()%100 == 0 ? false : date.getFullYear()%4 == 0 ? true : false

const isEvenMonth = (month) => month == 12 ? false : month%2 == 0

const isLastDayOfMonth = (date) => date.getMonth()+1 == 2 ? isLeapYear(date) ? date.getDate() == 29 : date.getDate() == 28 : isEvenMonth(date.getMonth()+1) ? date.getDate() == 30 : date.getDate() == 31