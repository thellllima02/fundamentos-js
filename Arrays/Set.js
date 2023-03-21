const nomes = ["Ana", "Clara", "Maria", "MariA", "João", "Joao", "João"];

const nomesPadrao = nomes.map((nome)=>nome.toLocaleUpperCase());

const nomesAtualizadas = [...new Set(nomesPadrao)];

console.log(nomesAtualizadas);

