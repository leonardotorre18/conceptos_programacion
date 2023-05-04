// const perroCreadoSinClase = {
//   age: 3,
//   name: 'Droopie',
//   ladrar: function ladrar() { console.log('Guao Guao') },
//   Birthday: () => perroCreadoSinClase.age += 1
// }

// console.log(perroCreadoSinClase.age)
// perroCreadoSinClase.Birthday()
// console.log(perroCreadoSinClase.age)

class Perro {
  private age: number = 0
  protected name: undefined | string = undefined

  constructor (age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  public static ladrar () {
    console.log('Guao Guao')
  }

  getAge () {
    return this.age
  }
  setAge (newAge: number) {
    if(newAge >= 0 && newAge <= 15) {
      this.age = newAge;
    }

  }

}

class PerroEntrenado extends Perro {
  skills: Array<string> = []

  constructor(age: number, name: string ,skills: Array<string>) {
    super(age, name)
    this.skills = skills
  }

  mostrarNombre() {
    console.log(this.name)
  }
}

PerroEntrenado.ladrar()