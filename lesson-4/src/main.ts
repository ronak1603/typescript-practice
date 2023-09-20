type stringOrNumber = string | number;
type stringOrNumberArray = (string | number) []

type singer = {
    name: string
    active?: boolean
    albums : stringOrNumberArray
}

type id = stringOrNumber

// literal types
let myName: 'Ronak'

let userName: 'Ronak' | 'Rajat' | 'Rohit'
userName = 'Rohit'

//function
const add = (a: number, b: number): number => {
    return a + b
}

const text = (message: number | string): void => {
    console.log(message)
}

text('Hello!')
text(add(2, 3))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a:number,  b:number) => number

let multiply: mathFunction =  function(c, d){
    return c*d
}
console.log(text(multiply(2,3)))

// optional parameters 
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

console.log(text(addAll(2, 3, 2)))
console.log(text(addAll(2, 3)))
console.log(text(sumAll(2, 3)))
console.log(text(sumAll(undefined, 3)))

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

console.log(text(total(10, 2, 3)))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// use of the never type 
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}