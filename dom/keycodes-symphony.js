const compose = () => {
    let n = 1
    let colors = new Map()
    document.addEventListener('keydown', (event) => {
        const keyName = event.key
        if (keyName == 'Backspace') {
            document.querySelectorAll('div')[document.querySelectorAll('div').length-1].remove()
        } else if (keyName == 'Escape') {
            for (let i of document.querySelectorAll('div')) {
                i.remove()
            }
        } else {
            let el = document.createElement('div')
            el.className = 'note'
            if (colors.has(keyName)) {
                el.style.background = colors.get(keyName)
            } else {
                let c = `hsl(0, 0%, ${n}%)`
                n++
                colors.set(keyName,c)
                el.style.background = c
            }
            el.textContent = keyName
            document.body.appendChild(el)
        }
    }, false);
}

export {compose}