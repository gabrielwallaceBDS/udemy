function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opçao escolhida foi ...${opcao}`)
}while (opcao != 9)
console.log('até a proxima')