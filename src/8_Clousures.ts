const Persona = (nombre: any, edad: any) => {
  return {
    nombre,
    edad,
    hablar: () => console.log('Bla bla bla')
  }
}

const persona = Persona('leo', 3)
console.log(persona)