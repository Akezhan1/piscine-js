const firstA = (f,m) => f/m;

const secondA = (v,t) => v/t;

const thirdA = (d,t) => (2*d)/(t*t);

function getAcceleration(obj) {
    if (!Number.isNaN(firstA(obj.f,obj.m))) {
        return firstA(obj.f,obj.m)
    } else if (!Number.isNaN(secondA(obj.Δv,obj.Δt))) {
        return secondA(obj.Δv,obj.Δt)   
    } else if (!Number.isNaN(thirdA(obj.d,obj.t))) {
        return thirdA(obj.d,obj.t)
    }

    return "impossible"
}