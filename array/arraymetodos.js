const pilotos = ['vettel', 'Alonso', 'Massa']
pilotos.pop() //massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos1 = pilotos.splice(1, 4)
console.log(algunsPilotos1)