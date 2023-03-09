const notas = [10,8,5,6,8];
let somaDasNotas= 0;

for(let w=0; w<notas.length; w++){
   somaDasNotas += notas[w];
}

const media = somaDasNotas/notas.length;

console.log(`A media das notas são ${media}`);