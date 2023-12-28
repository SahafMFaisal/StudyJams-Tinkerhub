function sum(a: number, b: number, c?: number): number {
    if (c)
        return(a + b + c)
    else
        return(a + b)
}

const sumValue= sum(1,2,2)
console.log(sumValue);



export { }