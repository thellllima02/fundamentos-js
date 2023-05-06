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


function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const emcomenda = {
    destinatorio:cliente.nome,
    ...cliente.enderecos[0],
};

console.log(emcomenda);