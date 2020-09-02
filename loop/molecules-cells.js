const RNA = (dna) => {
    let result = ""

    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case "G":
                result += "C"
                break
            case "C":
                result += "G"
                break
            case "T":
                result += "A"
                break
            case "A":
                result += "U"
                break
        }
    }

    return result
}

const DNA = (rna) => {
    let result = ""

    for (let i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case "C":
                result += "G"
                break
            case "G":
                result += "C"
                break
            case "A":
                result += "T"
                break
            case "U":
                result += "A"
                break
        }
    }

    return result
}