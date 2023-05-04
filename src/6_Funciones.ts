function sumar() {
  console.log(1 + 1)
  return 1 + 1
}
function suma(num1: number, num2: number): number {
  return num1 + num2
}

const resta = (...numbers:Array<number>): number => {
  let resultado: number = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   resultado -= numbers[i]
  // }
  numbers.forEach((num)=> {
    resultado -= num
  })
  return resultado
}

// Scope

const numero = 1
const funcionScope = () => {
  let numero = 5
  console.log(numero)
}

funcionScope()
console.log(numero)