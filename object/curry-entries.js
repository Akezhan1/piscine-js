const defaultCurry = (obj1) => {
    return (obj2) => {
        let res = Object.assign({},obj1)
        Object.keys(obj2).forEach((k)=>res[k]=obj2[k])
        return res
    }
}

const mapCurry = (func) => {
    return (obj) => Object.fromEntries(Object.entries(obj).map(func))
}

const reduceCurry = (func) => {
    return (obj,iv) => Object.entries(obj).reduce(func, iv)
}

const filterCurry = (func) => {
    return (obj) =>  Object.fromEntries(Object.entries(obj).filter(func))
}

const forceUsers = filterCurry(([k,v]) => v.isForceUser)

const reduceScore = (obj,iv) => reduceCurry((acc,[k,v]) => acc + v.shootingScore+ v.pilotingScore)(forceUsers(obj),iv)

const filterForce = (obj) => filterCurry(([k,v])=>v.shootingScore >= 80)(forceUsers(obj))

const mapAverage = (obj) => mapCurry(([k,v])=>{
    let nv = {...v,averageScore: (v.shootingScore+v.pilotingScore)/2}
    return [k,nv]
})(obj)