function checkAge(birthyear: number): boolean {
    if (birthyear >= 2005)
        return true
    else
        return false
}

function registerUser(name: string, birthYear: number) {
    if (checkAge(birthYear) === true) {
        console.log(name, ",Your User Registration is Successful")
    }
    else {
        console.log(name, ",Your User Registration is Successful")
    }

}

registerUser("SAHAF M FAISAL", 2004)

export{}

// OUTPUT:SAHAF M FAISAL, Your User Registration is Successful