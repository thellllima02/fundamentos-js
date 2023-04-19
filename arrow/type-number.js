//Numero Reais 
const primeiroNumero = 2;
const segundoNumero = 3;
const resultado = primeiroNumero+segundoNumero;
console.log(resultado);

//Ponto flutuante 
const numb = 0.5;
const numb2 = 2.6;
const resultado2 = numb*numb2;
console.log(resultado2);

//Resultado Infinity
const numb3 = 10;
const numb4 = 0;
const resultado3 = numb3/numb4;
console.log(resultado3);

//NaN - Not a number 
var numb5 = 0;
var resultado4 = numb5/numb4;
console.log(resultado4);



//Formatação de numeros, para salarios
function ganhoPorHora(salario, horasTrabalhadas){
    const salarioHora = (salario/horasTrabalhadas);
    const formatado = salarioHora.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
    return formatado;
}
console.log(ganhoPorHora(3000,176));


//Ordenação de numeros 

var lista = [10,1,5,9,8,12,15];

lista.sort((a,b)=>a-b);

console.log(lista);
