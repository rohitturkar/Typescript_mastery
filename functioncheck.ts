function addTwo(num: number):number{
  return num+2;
}

function getUpper(value: string) {
  return value.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: string,
  paid: boolean
) {}

let loginUser = (
  email: string,
  password: string,
  isPaid: boolean = false
) => {};


// function getValue(myVal:number){
//     if(myVal>5){
//         return true
//     }
//     return "200 ok"
// }

const getValue=(s:string):string=>{
    return "hello"
}


const heros=["thor","spiderman","batman"]
// const heros=[1,2,3]

heros.map((hero:string):string=>{
    return `hero is ${hero}`
})

function consoleError(errrMsg:string):void{
    console.log(errrMsg);
}

function handleError(errrMsg:string):never{
    throw new Error(errrMsg);
}

let myValue = addTwo(5);
getUpper(`greetings`);
signUpUser(`Rohit`, `test@gmail.com`, `1212`, true);
loginUser(`test@gmail.com`, `1212`);
export {};
