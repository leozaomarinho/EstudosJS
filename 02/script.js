class Carrinho{
    constructor(itens,qTotal,vTotal){
        this.itens = itens;
        this.qTotal = qTotal;
        this.vTotal = vTotal;
    }
/////////////////////////////////////////////////////////// separação dos metodos //////////////////////////////////////////////////

    adicionar(item){

        let contador = 0;

      for(let itemCarrinho in this.itens){
        //a variavel  itemCarrinho Será usado como indice para percorrer o array
        if(this.itens[itemCarrinho].id == item.id){
            this.itens[itemCarrinho.qtd] += item.qtd;
            contador = 1;
        }
      }

      if(contador == 0){
        this.itens.push(item);
      }

      this.qTotal +=item.qtd;
      //adicionando a variavel do constructor a quantidade de item dentro do metodo adicionar
      this.vTotal +=(item.preco * item.qtd);
      //adicionando o valor dos items adicionados ao valor total dos items na variavel Vtotal
    }


/////////////////////////////////////////////////////////// separação dos metodos //////////////////////////////////////////////////

    remover(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                

                //logica para encontrar o indice do item a ser removido
                let obj = this.itens[itemCarrinho];
                //salvou os items dentro da variavel obj 
                let index = this.itens.findIndex(function(obj) { 
                    return obj.id == item.id;
                });
                //usando a function findIndex para para identificar o indice, e quando o obj id for igual ao item.id ele irá guardar o id

                //logica para remover a quantidade de itens e remover o preço
                this.qTotal-= this.itens[itemCarrinho].qtd;
                this.vTotal -= (this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd);

                this.itens.splice(index,1);
                //utilizando a function de array para cortar


            }
        }
    }

    /////////////////////////////////////////////////////////// separação dos metodos //////////////////////////////////////////////////
}

let carrinho = new Carrinho([
    //adicionando valores dentro do array items
    {
        id:01,
        nome:'camisa',
        qtd:2,
        preco:30
    },
    {
        id:02,
        nome:'calça',
        qtd:1,
        preco:70
    }
],3,130);



carrinho.adicionar({id:3,nome:'shorts',qtd:3,preco:30})

carrinho.adicionar({id:04,nome:'boné',qtd:2,preco:30})


console.log(carrinho)


carrinho.remover({id:1,nome:'camisa',qtd:2,preco:30})

console.log(carrinho)