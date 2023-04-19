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

cliente.enderecos.push(
    {
      rua:"August Santana",
      numero: 32,
      bairro: "bordao",
      apartamento: false,
    }
);

const listaApenasDeApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(cliente.enderecos);
console.log(listaApenasDeApartamentos);
