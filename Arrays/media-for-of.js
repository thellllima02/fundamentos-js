const notas = [10,20,30,35,40,42,45];

let somaDasNotas = 0;

for(let elemente of notas){
    somaDasNotas+=elemente;
}
const mediaDasNotas = somaDasNotas/notas.length;

console.log(`A media das notas é ${mediaDasNotas}.`);