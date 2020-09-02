const hasCity = (country, cities) => {
    return (city) => {
        return cities.includes(city) ? `${city} is a city from ${country}` : `${city} is not a city from ${country}`
    }
}