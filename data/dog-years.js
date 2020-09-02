let earthYearsOld = (age) => (age/31557600)*7;

function dogYears(planet, age) {
    let tmp;
    switch (planet) {
        case "earth":
            return Number(earthYearsOld(age).toFixed(2))
        case "mercury":
            tmp = earthYearsOld(age)/0.2408467;
            return Number(tmp.toFixed(2))
        case "venus":
            tmp =  earthYearsOld(age)/0.61519726;
            return Number(tmp.toFixed(2))
        case "mars":
            tmp = earthYearsOld(age)/1.8808158;
            return Number(tmp.toFixed(2))
        case "jupiter":
            tmp = earthYearsOld(age)/11.862615;
            return Number(tmp.toFixed(2))
        case "saturn":
            tmp = earthYearsOld(age)/29.447498;
            return Number(tmp.toFixed(2))
        case "uranus":
            tmp = earthYearsOld(age)/84.016846
            return Number(tmp.toFixed(2))
        case "neptune":
            tmp = earthYearsOld(age)/164.79132;
            return Number(tmp.toFixed(2))
        default:
            console.log("Unknown planet")
            break;
    }
}

console.log(dogYears('mercury', 2134835688))