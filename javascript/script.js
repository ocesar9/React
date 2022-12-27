const upperName = (name) => {
  return name.toUpperCase();
};

console.log(upperName('andre'));

function handleMouse(event) {
  const { clientX, clientY } = event;
  console.log(clientX,clientY);
}

const frutas = ['banana', 'uva']
const [fruta1,fruta2] = frutas;
console.log(fruta2);

const useQuadrado = [4,function(lado){ return 4*lado}]

const [lados, perimetro] = useQuadrado;
console.log(lados, perimetro(10));

document.addEventListener('click', handleMouse);

function showList(empresa,...clientes){
  clientes.forEach((cliente) =>{
    console.log(cliente,empresa);
  })
}
showList('Google',['Andre', 'Rafael'])

const numeros = [10,5,20]
const maior = Math.max(...numeros)
console.log(maior);

const numeros2 = [13,...numeros,23,7]
console.log(numeros2);

const carro = {
  cor: 'azul',
  portas: 4
}

const carroAno = {...carro, ano:2008}
console.log(carro)
console.log(carroAno)

import quadrado from "./quadrado.js";

console.log(quadrado.areaQuadrado(5))
console.log(quadrado.perimetroQuadrado(5));

import numeroAleatorio from "./numeroAleatorio.js";

console.log(numeroAleatorio());


const precos = [
  'Credito',
  'R$ 200',
  'R$ 400',
  'Constas a pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
]

const precosFiltro = precos.filter((p) => p.includes('R$'));
const precosNumeros = precosFiltro.map((preco) => Number(preco.replace('R$','')));

console.log(precosFiltro)
console.log(precosNumeros)