let userDigitado = prompt('digite o nome de usuário: ');
let passwordDigitado = prompt('digite a senha de usuário: ');


function autentica(userDigitado,passwordDigitado,user,password){

var user ='Leo123';
var password ='Leo456';

if(userDigitado===user&&passwordDigitado===password){
    console.log('user logado com sucesso');
}
else{
    console.log('usuário ou senha incorreto.')
}
};
console.log(autentica());


