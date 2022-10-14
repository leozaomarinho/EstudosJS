function decremento(num){

    for(num = 50;num>0;num--){

        if(num%2==0){
            console.log(`${num} é par`);
        }
        else{
            continue;
        }
    }

}

console.log(decremento())