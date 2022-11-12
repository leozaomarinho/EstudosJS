let novoElemento = document.createElement('p');
let texto = document.createTextNode('elemento instanciado com sucesso.');

novoElemento.appendChild(texto);
let p = document.querySelector('.texto_principal')
let pai = p.parentNode;

pai.appendChild(novoElemento);