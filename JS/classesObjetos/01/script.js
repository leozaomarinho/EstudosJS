class Onibus{
    constructor(marca,portas,cor){
        this.marca = marca;
        this.portas = portas;
        this.cor = cor;
    }

}

let mercedez = new Onibus('Mercedez',2,'vermelho');

console.log(mercedez);
console.log(typeof(mercedez));