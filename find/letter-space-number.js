const letterSpaceNumber = (str) => {
    return str.match(/\w\s(\b\d{1}\b)/g) == null ? [] : str.match(/\w\s(\b\d{1}\b)/g)
}