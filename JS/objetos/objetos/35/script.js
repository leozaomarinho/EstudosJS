const calculadora ={

soma:function (a,b){
    return a+b;
},

subtrair:function (a,b){
    return a-b;
},
multiplicar:function (a,b){
    return a*b
},
dividir:function (a,b){
    return a/b;
}
}

console.log(calculadora.soma(2,2));
console.log(calculadora.subtrair(5,1));
console.log(calculadora.multiplicar(2,3));
console.log(calculadora.dividir(8,2));