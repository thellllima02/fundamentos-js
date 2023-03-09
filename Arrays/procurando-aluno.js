const alunos = ["João","Juliana","Ana","Caio"];
const medias = [10,8,7.5,9];

const listaDeAlunosEMEdias = [alunos, medias];

function exibeNomeENota(aluno){
    //includes verifica se o aluno é cadastrado
    if(listaDeAlunosEMEdias[0].includes(aluno)){
        const [alunos,medias] = listaDeAlunosEMEdias;    
        //indexof exibe qual o indice do vetor que si encontra o "aluno"
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];
        console.log(`${aluno} tem a media ${mediaDoAluno}.`);
    } else {
        console.log(`${aluno} não é cadastrado `);
    }
}

exibeNomeENota("JPaulo");