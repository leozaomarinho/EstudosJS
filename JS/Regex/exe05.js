const validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9_]/;

console.log(validarNomeUsuario.test('leonardo_22'));
console.log(validarNomeUsuario.test('11111111111111'));
console.log(validarNomeUsuario.test('as'))