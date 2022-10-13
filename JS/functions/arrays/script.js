/*
let nomes =['raquel','be','leo']

for(let i= 0; i<=nomes.length;i++){

   
    console.log(nomes[i]);
}

let Qpessoas = prompt('digite a quantidade de pessoas:')

let i =0;5

while(i<=Qpessoas){
    
    console.log(i)
    i++
}


let pessoas= ['leo', 'raquel','julio', 'thays'];

let PessoaRemovida = pessoas.pop(3);

console.log(pessoas);

console.log(PessoaRemovida);

let PessoaRemovida2 = pessoas.pop(2);

console.log(PessoaRemovida2);

console.log(pessoas)
*/

let pessoas =['leo', 'nasus','thays','raquel'];

let removidaInicio = pessoas.shift();

console.log(removidaInicio)

console.log(pessoas);

pessoas.unshift('leo novamente');

console.log(pessoas)