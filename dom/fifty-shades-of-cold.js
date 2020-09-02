import {colors} from './data.js'

const generateClasses = () => {
    let el = document.createElement('style')
    for (let i of colors) {
        el.textContent += `.${i} {
            background: ${i};
        }\n` 
    }
    document.head.appendChild(el)
}

const generateColdShades = () => {
    for (let i of colors) {
        if (i.includes('aqua') || i.includes('blue') || i.includes('turquoise') || i.includes('green') || i.includes('cyan') || i.includes('navy') || i.includes('purple')) {
            let el = document.createElement('div')
            el.className = i
            el.textContent = `${i}`
            document.body.appendChild(el)
        }
    }
}

const choseShade = (color) => {
    for (let i of document.querySelectorAll('div')) {
        i.className = color
    }
}

export {generateClasses,generateColdShades,choseShade}