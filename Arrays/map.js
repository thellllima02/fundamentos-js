const notas = [10,9.5,8,7,4.7];

//operador ternario     callback
const notasAtualizadas = notas.map((nota)=>{
    return nota+1 >=10 ? 10 : nota +1;
});

console.log(notas);
console.log(notasAtualizadas);