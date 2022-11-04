class Pessoa{
    constructor(nome,idade,renda){
        this.nome = nome;
        this.idade = idade;
        this.renda = renda;
    }

     financiamento(this.renda,this.idade){
        if(this.renda>2500&&this.idade>=18){
            console.log('Você consegue financiar um veiculo!')
        }
        else if(this.idade<18){
            console.log('Você ainda não possui idade suficiente para financiar um veiculo.')
        }
        else{
            console.log('Não há financiamento disponível para você.')
        }
    }




}

let pessoa1 = new Pessoa('leonardo luiz marinho',18,3500)


console.log(pessoa1);

console.log(pessoa1.financiamento();