//Declaração de função
function apresentar(nome){
    return `Meu nome é ${nome}`;
}

//Expressão de função >> A grande diferença é que ela
//Não pode ser chamada antes da declaração.
const soma = function(numero1, numero2){
    return numero1+numero2
}

//Arrow Function 
const apresentacaoArrow = nome => `Meu nome é ${nome}`;
console.log(apresentacaoArrow("Hércules"));
const soma1 = (num1, num2) => num1 + num2;
console.log(soma1(2,3));

//Arrow Function com + de 1 linha de instrução

const somaNumeroPequenos = (nume1, nume2) => {
    if(nume1>10 || nume2>10){
        return "Somente numeros de 1 a 9"
    } else {
        return nume1+nume2;
    }
}

console.log(somaNumeroPequenos(3,7));