//tipos de dado
//Booleanos

//Conversão implicita >> Permite que a gente converta um tipo de dado em outro(Ex. Um numero em uma string e vice vesa )

const numero = 456;
const numeroString = "456";

//Boolean
console.log(numero ===numeroString);

//Conversão implicita:
console.log(numero == numeroString);
//Concatenação
console.log(numero + numeroString);

//Conversão Explicita:
//Number()
console.log(numero + Number(numeroString));
//String()
console.log(numero.toString()+ numeroString);




