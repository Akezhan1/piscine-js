const createCircle = () => {
    document.addEventListener('click', (event)=>{
        let el = document.createElement('div')
        el.className = 'circle'
        el.style.background = 'white'
        el.style.top = event.clientY-25+'px'
        el.style.left = event.clientX-25+'px'
        document.body.appendChild(el)
    },false)
}

const moveCircle = () => {
    document.addEventListener('mousemove', (event)=>{
        let el = document.body.lastChild
        if (el == null) {
            return
        }
        el.style.top = event.clientY-25+'px'
        el.style.left = event.clientX-25+'px'
    },false)
}

const setBox = () => {
    let el = document.createElement('div')
    el.className = 'box'
    document.body.appendChild(el)
}

export {createCircle,moveCircle,setBox}