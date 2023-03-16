const notas1 = [5,6,7,8,9];
const notas2 = [55,6,4,8,1];
const notas3 = [10,12,13];

const todasNotas = [notas1,notas2,notas3];

let media = 0;

for(let q=0; q<todasNotas.length; q++){
    for(let w=0; w<todasNotas[q].length; w++){
        media +=todasNotas[q][w]/todasNotas[q].length;
     
    }
}
//console.log(media);
media = media/todasNotas.length;
console.log(media);