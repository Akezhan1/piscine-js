const debounce = (f, ms) => {
    let timeout
    return function executedFunction() {
      const context = this
      const args = arguments
      const later = function() {
        timeout = null
        f.apply(context, args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, ms)
    }
}

const opDebounce = (f,ms,op) => {
    let timeout
    return function executedFunction() {
        const context = this
        const args = arguments
        const later = function() {
        timeout = null
        if (op !== undefined) if (!op.leading) f.apply(context, args)
        }
        let callNow
        if (op !== undefined) {
            callNow = op.leading && !timeout
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, ms)
        if (callNow) f.apply(context, args)
    }
}