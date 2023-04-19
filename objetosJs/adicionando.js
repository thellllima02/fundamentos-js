const cliente = {
    nome: "Hércules",
    idade: "32",
    cor: "Branco",
    altura:"1.72 cm"
}

//Adicionando ou modificando um valor depois do objeto pronto
cliente.telefone = "11225545452";
cliente.nome = "Hércules da Silva Santos"

//Deletar 
delete cliente.altura;


console.log(cliente)