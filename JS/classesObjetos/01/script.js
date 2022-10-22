function carroEsportivo(marca,modelo,cor){
    let carro = Object.create({
        rodas:4,
        portas:2
    });

    carro.marca = marca;
    carro.cor = modelo;
    carro.modelo = cor;

    return carro;
}

console.log(carroEsportivo('ferrari','vermelha','488 pista'));
//console.log(Object.prototype(carroEsportivo()))