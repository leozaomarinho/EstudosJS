class EnderecoCliente{
    
    constructor(rua,bairro,cidade,estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    
    set novaRua(nRua){
        this.rua=nRua;
    }

    set novoBairro(nBairro){
        this.bairro=nBairro;
    }
    set novaCidade(nCidade){
        this.cidade=nCidade;
    }
    set novoEstado(nEstado){
        this.estado=nEstado;
    }

    get exibirEndereco(){
        return `Seu endereço é ${this.estado},cidade ${this.cidade}, bairro ${this.bairro}, ${this.rua}`;
    }

}

let endereco = new EnderecoCliente('19','cabral','santa luzia','MG');

console.log(endereco.exibirEndereco)


endereco.novaCidade = 'Betim'

console.log(endereco.exibirEndereco)

endereco.novaCidade = 'Belo horizonte';
endereco.bairro = 'Lourdes';
endereco.rua = 'rua da bahia';

console.log(endereco.exibirEndereco)