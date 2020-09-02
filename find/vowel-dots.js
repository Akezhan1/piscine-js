var vowels = /[aeiou|AEIOU]/g
const vowelDots = (str) => {
    let vowelsOfStr = str.match(vowels)
    if (vowelsOfStr == undefined) {
        return str
    }
    for (let i = 0; i < vowelsOfStr.length; i++) {
        str = str.replace(vowelsOfStr[i], vowelsOfStr[i]+".")
    }

    return str
}

console.log(vowelDots("hello"))