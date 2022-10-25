class ContaBancaria{
    constructor(saldoCC,saldoCP,jurosCP){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.jurosCP = jurosCP;
    }

////////////////////Metodo de deposito/////////////////////////////////////////////////////////////////////////////////////

    set depositoCC(valor){
        this.saldoCC+=valor;
        console.log(`você realizou um deposito no valor de R$${valor} reais.`);
        console.log(`Seu saldo atual na conta corrente é de R$${this.saldoCC}`)
    }

    set depositoCP(valor){
        this.saldoCP+=valor;

        console.log(`você realizou um deposito no valor de R$${valor} reais.`);
        console.log(`Seu saldo atual na conta poupança é de R$${this.saldoCP}`);
    }

//////////////////////Metodo de saque/////////////////////////////////////////////////////////////////////////////////////

    set saqueCC(valor){

        if(valor<=this.saldoCC){
        this.saldoCC-=valor;
        console.log(`você realizou um Saque no valor de R$${valor} reais.`);
        console.log(`Seu saldo atual na conta corrente é de R$${this.saldoCC}`)
        }
        else{
            console.log('O valor de saque deve ser um valor valido, e condizente com o dinheiro disponivel na conta!')
        }
    };

    set saqueCP(valor){

        if(valor<=this.saldoCP){
        this.saldoCP-=valor;
        console.log(`você realizou um Saque no valor de R$${valor} reais.`);
        console.log(`Seu saldo atual na conta corrente é de R$${this.saldoCC}`)
        }
        else{
            console.log('O valor de saque deve ser um valor valido, e condizente com o dinheiro disponivel na conta!')
        }
    };

     transferir(valor,contaEnvio,contaReceb){

    if(contaEnvio === 'ContaCP' && contaReceb === 'ContaCC'){    
//transf de Conta Poupança para conta Corrente
        if(valor<=this.saldoCP){
        this.saldoCC+=this.saldoCP;
        this.saldoCP-=valor;
        console.log('Transfêrencia realizada com sucesso!')
        console.log(`O seu novo saldo total na conta corrente é de R$${this.saldoCC}`);
        }
        else{
            console.log(`O valor a ser transferido não pode ser maior que o saldo atual! seu saldo é ${saldoCP}`)
        }
    }

    else if(contaEnvio === 'ContaCC' && contaReceb === 'ContaCP'){
//transf de conta corrente para conta poupança
        if(valor<=this.saldoCC){
            this.saldoCP+=this.saldoCC;
            this.saldoCC-=valor;
            console.log('Transfêrencia realizada com sucesso!')
            console.log(`O seu novo saldo total na conta poupança é de R$${this.saldoCP}`);
            }
            else{
                console.log(`O valor a ser transferido não pode ser maior que o saldo atual! seu saldo é ${saldoCP}`)
            }
    }
    
     //fim do metodo transfência
    }
   

    }

    class ContaEspecial extends ContaBancaria{

    }

   
    let conta2 = new ContaEspecial(350,80,8)

    let conta = new ContaBancaria(400,100,3)

   
    console.log(conta);

    console.log(conta2)

/*
    conta.transferir(80,'ContaCP','ContaCC')

    console.log(conta.saldoCC);
    console.log(conta.saldoCP);
    
    conta2.depositoCC = 80;

    conta.depositoCP = 30;
*/

//conta.depositoCC = 300;

//console.log(conta)

//conta.transferir(100,'ContaCC','ContaCP')

console.log(conta)

conta.saqueCC= 200;