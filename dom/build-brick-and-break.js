const build = (num) => {
    let c = 1
    let m = 2
    let iID = setInterval(function(){
        let elem = document.createElement('div')
        elem.id = 'brick-'+c
        document.body.appendChild(elem)
        if (c==m) {
            document.getElementById(elem.id).setAttribute('data-foundation', "true");
            m += 3
        } else if (c == num) {
            clearInterval(iID)
        }
        c++
    },100) 
}

const repair = (...arr) => {
    arr.map((x)=> document.getElementById(x).hasAttribute('data-foundation') ? document.getElementById(x).setAttribute('data-repaired', "in progress") : document.getElementById(x).setAttribute('data-repaired', "true"))
}

const destroy = () => {
    document.querySelectorAll('div')[document.querySelectorAll('div').length-1].remove()
}

export {build,repair,destroy}