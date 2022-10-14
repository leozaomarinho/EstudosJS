let texto='meu nome'; 

function tamanhoString(texto){
    if(texto.length>=10){
        console.log('Texto muito longo')
    }
    else{
        console.log('texto dentro do limite');
    }
}

console.log(tamanhoString(texto));