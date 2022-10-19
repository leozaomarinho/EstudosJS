let array1=[2,4,6,8,10,12]
let array2=[1,1,1]

function verificaArrays(arr){
    if(arr.length>=5){
        console.log('muitos elementos');
    }
    else{
        console.log('poucos elementos')
    }
}
verificaArrays(array1);
verificaArrays(array2);