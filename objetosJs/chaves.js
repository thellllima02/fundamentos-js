const cliente = {
    nome: "Hércules",
    idade: "32",
    cor: "Branco",
    altura:"1.72 cm",
    telefone: ["1234561","2329645"],
};

cliente.enderecos = [
{
    rua:"Parana",
    numero: 445,
    bairro: "Campo lindo",
    apartamento: true,
},
];


const chavesDoObjeto = Object.keys(cliente);


//Verificação das chaves, campos e valores de um objeto.
if(!chavesDoObjeto.includes("enderecos")){
    console.error("Erro, é necessario ter um endereço cadastrado !! ");    
}
console.log(chavesDoObjeto);