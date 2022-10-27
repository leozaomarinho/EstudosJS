class ContaUser{
    constructor(usuario,senha,email){
        this.usuario = usuario;
        this.senha = senha;
        this.email = email;
        this.logado;
    }

    efetuarLogin(user,password){

        if(user === this.usuario &&password === this.senha){
            console.log('logado com sucesso!')
            this.logado = true;
        }
        else{
            console.log('Nome de usuário ou senha incorretos.')
        }
    }

    trocarSenha(novaSenha){
        (this.logado === true){
        this.password = novaSenha;
    }
    }
}

let conta = new ContaUser('leozao','leoteste','leozao@gmail.com');

console.log(conta);

conta.efetuarLogin('leozao','leoteste');