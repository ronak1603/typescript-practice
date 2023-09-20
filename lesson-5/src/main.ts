type one = string
type two = string| number
type three = 'hello'

let a: one = 'cool'
let b =  a as two
let c = a as three

let d  = <one>'ronak'
let e = <two>22

const addOrConcat = (a: number, b: number, c:'add' | 'concat') : string | number => {
    if(c === 'add'){
        return a+b;
    }

    return '' + a + b
}

let val: string = addOrConcat(2, 2, 'concat') as string
let val1: number = addOrConcat(2, 2, 'concat') as number
console.log(val1,'val1');

(10 as unknown) as string;

const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const myImg2 = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src