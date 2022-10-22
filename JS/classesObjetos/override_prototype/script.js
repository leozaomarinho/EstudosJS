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
Cachorro.prototype.patas= 4;

let pitbull = new Cachorro('grande','pitbull','azul');

console.log(pitbull.raca)