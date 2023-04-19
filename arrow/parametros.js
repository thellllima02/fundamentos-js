
function soma (num1, num2){
    return num1 + num2;
}

console.log(soma(3, 5));
console.log(soma(546, 877));


//Odem dos parâmetros 

function nomeIdade(nome, idade){
   console.log(`Meu nome é ${nome} e minha idade ${idade} anos`);
   return true; 
}

nomeIdade("Gustavo ", 34);
nomeIdade(34, "Gustavo");

console.log(nomeIdade("Gustavo2", 34));


function multiplica(nume1=1, nume2=1){
    return nume1*nume2;
}

//Função dentro de função 
console.log(multiplica(soma(4,5), soma(3,3)));


//Comprimentar 
function cumprimentaPessoa(pessoa){
    console.log(`Ola, ${pessoa} !`);
}

cumprimentaPessoa("João Pretonio");




