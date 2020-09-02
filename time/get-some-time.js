const firstDayWeek = (week,year) => {
    if (week == 1) {
        return '01-01-'+year
    }

    const date = new Date(new Date(year+'-01-01').getTime()+(24 * 3600 * 1000 * (7-(((new Date(year+'-01-01').getTime()-new Date('0001-01-01').getTime())/(1000*3600*24))%7))) + ((week-2)*(24 * 3600 * 1000 * 7)))

    let result = ""
    if (date.getDate() < 10) {
        result += '0'+date.getDate()+'-'
    } else {
        result += date.getDate()+'-'
    }

    if (date.getMonth() == 0) {
        result += '01-'
    } else if (date.getMonth() < 9) {
        result += '0'+(date.getMonth()+1)+'-'
    } else {
        result += date.getMonth()+1+'-'
    }

    result += year

    return result
}