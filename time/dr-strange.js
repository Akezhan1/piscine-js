const addWeek = (current) => {
    const Week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    let day = ((current.getTime()-new Date('0001-01-01').getTime())/(1000*3600*24))%14
    return day <= 6 ? Week[day] : 'second'+Week[day-Week.length]
}

const timeTravel = ({ date, hour, minute, second }) => {
    date.setHours(hour,minute,second)
    return date
}