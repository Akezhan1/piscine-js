const dayOfTheYear = (date) => {
    let year
    if (date.getFullYear() < 10) {
        year = '000'+date.getFullYear()
    } else if (date.getFullYear() < 100) {
        year = '00'+date.getFullYear()
    } else if (date.getFullYear() < 1000) {
        year = '0'+date.getFullYear()
    } else {
        year = date.getFullYear()
    }
    return (new Date(date.getTime() - new Date(year+'-01-01').getTime()))/(1000*3600*24)+1
}