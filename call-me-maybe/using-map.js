const citiesOnly = (arr) => arr.map(x => x['city'])

const upperCasingStates = (arr) => arr.map(x => x.match(/\S+/g).map(y => y[0].toUpperCase()+y.slice(1,y.length).toLowerCase()).join(' '))

const fahrenheitToCelsius = (arr) => arr.map(x => Math.floor((Number(x.slice(0,-2))-32)/1.8)+'°C')

const trimTemp = (arr) => arr.map(x => Object.assign(x,{temperature: x['temperature'].replace(/\s+/g,'')}))

const tempForecasts = (arr) => arr.map(x => Math.floor((Number(x['temperature'].slice(0,-2))-32)/1.8)+'°Celsius'+' in '+x['city']+', '+x['state'].match(/\S+/g).map(x => x[0].toUpperCase()+x.slice(1,x.length).toLowerCase()).join(' '))

