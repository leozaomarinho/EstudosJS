const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;


console.log(validaIP.test('127.0.0.1'))

console.log(validaIP.test('127.02.25.1'))

console.log(validaIP.test('127.422.138.50'))

console.log(validaIP.test('1468.20.3.0000'))