const validaID = /\d+ID\b/;


console.log(validaID.test(2345678));
console.log(validaID.test('56206468'))