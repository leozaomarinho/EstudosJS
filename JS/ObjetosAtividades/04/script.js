class Carro {
    constructor(marca,cor,gasolinaRestante){

        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
    }

    get dirigirCarro(){
        for(let reserva = 1; reserva<=this.gasolinaRestante;this.gasolinaRestante--){
            if(this.gasolinaRestante>reserva){
                console.log(`ainda há ${this.gasolinaRestante} L de gasolina para continuar o trajeto.`)
            }
            else if(this.gasolinaRestante ==1){
                console.log(`esta na hora de abastecer o carro, pois só restou ${this.gasolinaRestante} L de gasolina`);
            }
        }
    }

    set abastecer(qGasolina){
        this.gasolinaRestante = qGasolina;

        console.log(`Tanque de gasolina reabastecido, foram colocados ${qGasolina} litros de gasolina, você já pode voltar a rodar.`)
    }
}

let gol = new Carro('volwagen','prata',7)


gol.dirigirCarro;

gol.abastecer = 10;

gol.dirigirCarro;