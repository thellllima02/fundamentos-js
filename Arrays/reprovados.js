const alunos = ["Mauro","Marcio","Maria","Manu"];
const notas = [8,7,5,3.5];

const alunosReprovador = alunos.filter((alunos, indice)=>{
    return notas[indice]<7;
})
console.log(alunosReprovador);