const siempreTrue: boolean = true;
const siempreNull: null = null

if (1 + 1 === 2) {
  console.log('Primera condicion se cumple')


  if (siempreTrue) {
    console.log('esto siempre se cumple')
  }

  
} else if (2 + 2 == 4) {
  console.log('Salta a la siguiente condicion')


} else {
  console.log('todo lo demás falló')
}


if (siempreTrue && siempreNull) console.log('esto no puede funcionar')

else if (siempreTrue || siempreNull) console.log('Esto puede funcionar')



siempreTrue ? 
  console.log('siempre verdad')
  : console.log('Algo falló')



siempreTrue && console.log('esto es cierto')