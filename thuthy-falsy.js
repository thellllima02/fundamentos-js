//Reconhece o 1 como verdadeiro 
console.log(1 == true);

//Reconhece o (0 e " ") como falso
console.log(0 == false);
console.log("" == false);

//Hoje ja não é mais recomendado o uso da variavel var. Pois tem uma facilidade alta de bug
var carro;

//Recomendasse o uso de let ou const a depender da necessidade. 
let nome = 2;
const pessoa = null;

//Para saber que o tipo da variavel.
console.log(typeof nome);
console.log(typeof carro);
console.log(typeof pessoa);