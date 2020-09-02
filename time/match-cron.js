const checkVal = (val, pattern, start, end) => {
    if (pattern == '*') {
        return true
    }

    if (!(pattern >= start && pattern <= end)) {
        return false
    }

    return val == pattern 
}

const matchCron = (pattern, date) => {
   let p = pattern.split(' ')
   if (checkVal(date.getMinutes(),p[0],1,59) && checkVal(date.getHours(),p[1],1,59) && checkVal(date.getDate(),p[2],1,31) && checkVal(date.getMonth()+1,p[3],1,12) && checkVal(date.getDay(),p[4],1,7)) {
       return true
   }

   return false
}