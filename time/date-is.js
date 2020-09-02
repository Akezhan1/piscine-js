const isValid = (date) => date != 'Invalid Date' ?  toString.call(date).slice(8, -1) == 'Date' ? true : typeof date == 'number' ? Number.isNaN(date) ? false : true : false : false

const isAfter = (fdate,sdate) => (toString.call(fdate).slice(8, -1) == 'Date' && toString.call(sdate).slice(8, -1) == 'Date') ? fdate.getTime()-new Date('0001-01-01').getTime() > sdate.getTime()-new Date('0001-01-01').getTime() : fdate > sdate

const isBefore = (fdate,sdate) => (toString.call(fdate).slice(8, -1) == 'Date' && toString.call(sdate).slice(8, -1) == 'Date') ? fdate.getTime()-new Date('0001-01-01').getTime() < sdate.getTime()-new Date('0001-01-01').getTime() : fdate < sdate

const isFuture = (date) => toString.call(date).slice(8, -1) == 'Date' ? date.getTime() - new Date().getTime() > 0 : typeof date == 'number' ? date - new Date().getTime() > 0 : false

const isPast = (date) => toString.call(date).slice(8, -1) == 'Date' ? date.getTime() - new Date().getTime() < 0 : typeof date == 'number' ? date - new Date().getTime() < 0 : false