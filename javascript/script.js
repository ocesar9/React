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

carroAno = {...carro, ano:2008}
console.log(carro)
console.log(carroAno)