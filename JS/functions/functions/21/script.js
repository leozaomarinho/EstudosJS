let input = 'leo';

function type(input){
    if(typeof input === 'string'){
        console.log(' a entrada é do tipo string')
    }
    else if(typeof input === 'number'){
        console.log(' a entrada é do tipo number')
    }
    else if(typeof input === 'boolean'){
        console.log(' a entrada é do tipo boolean')
    }
}

console.log(type(input));
console.log(type(23));
console.log(type(true))