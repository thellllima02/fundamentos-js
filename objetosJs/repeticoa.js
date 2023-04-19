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

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !=="object"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }

    }