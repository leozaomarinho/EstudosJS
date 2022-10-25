class ContaBancaria {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valorDep){
        if(valorDep>=1){
            this.saldo += valorDep;
            console.log('valor depositado com sucesso!')
        }
        else{
            console.log('Deposite um valor valido!')
        }
    }
    saque(valorSaque){
           if(valorSaque<=this.saldo&&valorSaque>0){

            this.saldo-=valorSaque;
                console.log('Saque efetuado com sucesso!')
                console.log(`Seu saldo atual é de ${this.saldo}, você sacou ${valorSaque} reais`)
           }

           else if(valorSaque>this.saldo){
            console.log('O saque não pode ser maior que o valor diponível')
           }

           else if(valorSaque===0){
            console.log('O saque deve ser maior que 0')
           }
           
           else{
            console.log('Você deve sacar um valor valido')
           }
    }
}

let conta = new ContaBancaria(1000)

console.log(conta.saldo);

conta.deposito(1000)

console.log(conta.saldo)

conta.saque(20)

//ContaBancaria.saque(2000)
