let get = (key) => {
    return sourceObject[key]
};

let set = (key,value) => {
    sourceObject[key] = value;
    return sourceObject[key]
}