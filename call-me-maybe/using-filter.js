const filterShortStateName = (arr) => arr.filter(x => x.length < 7)

const filterStartVowel = (arr) => arr.filter(x => x.match(/^[aeiou]/i))

const filter5Vowels = (arr) => arr.filter(x => x.match(/[aeiou]/gi).length >= 5)

const len = (str, regex) => str.match(regex) === null ? 0 : str.match(regex).length

const filter1DistinctVowel =(arr) => arr.filter(x => len(x, /[aeiou]/gi) === (len(x,/a/ig) || len(x,/e/ig) || len(x,/i/ig) || len(x,/o/ig) || len(x,/u/ig)))

const multiFilter = (arr) => arr.filter(x => x['capital'].length >= 8 && /^[^aeiou]/i.test(x['name']) && /[aeiou]+/i.test(x['tag']) && x['region'] !== 'South')