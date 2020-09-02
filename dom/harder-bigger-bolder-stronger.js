const generateLetters = () => {
    let weight = 300
    for (let i = 11; i < 131; i++) {
        let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(Math.floor(Math.random() *26))
        let elem = document.createElement('div')
        elem.textContent = char
        elem.style.fontSize = i+'px'
        elem.style.fontWeight = weight
        document.body.appendChild(elem);
        if (i == 51) {
            weight += 100
        } else if (i == 91) {
            weight += 200
        }
    }
}

export {generateLetters}