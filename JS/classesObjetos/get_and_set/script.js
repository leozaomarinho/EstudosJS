class Cachorro{
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log('AU AU')
    }

    get getCor(){
        //para exibir a cor
        return this.cor;
    }

    set setCor(cor){
        //para alterar a cor
        this.cor =cor;
    }
}

let pastor = new Cachorro('Pastor alemão','sem cor');

console.log(pastor);

pastor.setCor ='cinza'
//metodo para alterar a cor com o metodo instaciado dentro da classe.

console.log(pastor.getCor)
//metodo para buscar a cor com o metodo instanciado dentro do objeto.