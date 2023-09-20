let bikes = ['harley davidson', 'hunter', 350];
let mixedArr = ['drake', 21, 'Savage', false];

bikes.push('Himalayan gt');
mixedArr.unshift(true)

bikes[0] = 24

let cars: string[] = ['polo gt', 'supra']
cars.push('challenger')
let bands: [string, boolean, number] = ['the 1975', true, 1975]

// Objects
let obj: object
obj = []
console.log(typeof obj)
obj = bands
obj = {}

interface common{
    name:string;
    active?:boolean
    albums: (string | number)[]
}

let obj1 : common = {
    name:'Drake',
    albums : ['Scorpian', 'nevermind', 2011]
}

let obj2 : common = {
    name:'post malone',
    albums : ['beerbongs', 'austin', 2011],
    active: true
}

const obj3 = (prop: common) => {
    if(prop.name){
        return `hello ${prop.name.toUpperCase()}!`
    }

    return 'bye!'
}

console.log(obj3(obj1));

//Enums
enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)

