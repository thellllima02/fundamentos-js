const cliente = {
    nome: "André",
    idade: 32,
    cpf: "1112223355",
    email: "andre@dominio.com",
}


//Template 
//Existe essas duas formas de acessar o conteudo de um objeto. Por ponto ou por colchete. 
console.log(`o nome do cliente é ${cliente.nome} e tem ${cliente["idade"]} anos de idades. `)

console.log(`OS 3 primeiro digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

 

const chaves =["nome","idade","cpf","email"];
//Estrutura de repetição 
chaves.forEach((chave)=> {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);

});
