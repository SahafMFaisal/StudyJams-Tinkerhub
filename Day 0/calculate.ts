function calculate(a: number, b: number, operator: string) {
    if (operator === '+')
        return a + b;
    else if (operator === '-')
        return a - b;
    else
        return " UNDEFINED OPERATOR "
}

const value = calculate(1, 2, 'c')
console.log(value);



export { }