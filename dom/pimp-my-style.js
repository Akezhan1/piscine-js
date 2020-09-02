import { styles } from './data.js'
let click = 0
const pimp = () => {
    let b = document.querySelector('button')
    if (b.classList.contains('unpimp')){  
        click--
        if (click == 0) {
            b.classList.remove(styles[click], 'unpimp')
        } else {
            b.classList.remove(styles[click])
        }
    } else {  
        if (click == 14) {
             b.classList.add(styles[click], 'unpimp')
        } else {
            b.classList.add(styles[click])
        }
        click++
    }
}
export {pimp}