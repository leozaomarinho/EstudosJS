class Cachorro{
    constructor(tamanho,raca,cor){
        this.raca = raca;
        this.cor = cor;
        this.tamanho = tamanho
    }
    latir(){
        console.log('AU AU')
    }

}

Cachorro.prototype.raca= 'SRD';

//criando symbol
let patas = Symbol();

Cachorro.prototype[patas] =4;

///criando objeto

let pitbull = new Cachorro('grande','pitbull','azul');

console.log(pitbull.raca)
pitbull.latir();

//acessando symbol
console.log(Cachorro.prototype[patas]);

//acessando patas do objeto criado

console.log(pitbull[patas]);

// Symbol é como uma constante, só que para objetos.

