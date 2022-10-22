class Pessoa {
    constructor(nome,idade,renda){
        this.nome = nome;
        this.idade = idade;
        this.renda = renda;
    }
    verificaRenda(renda){
        if(this.renda>2000&&this.renda<5000){
            console.log('você possui uma renda superior a 2000.');
        }
        else if(this.renda>5000){
            console.log('você possui uma alta renda.')
        }
        else{
            console.log('você possui uma renda baixa.')
        }
    }
}

    let pessoa = new Pessoa('leonardo marinho',24,1800)

    console.log(pessoa);
    console.log(pessoa.verificaRenda());


