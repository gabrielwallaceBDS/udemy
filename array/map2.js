const Carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.apenasPreco

const resultado = carrinho.map(paraObjeto).map(apenasreco)
console.log(resultado)