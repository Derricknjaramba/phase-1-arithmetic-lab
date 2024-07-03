function multiply( num1,num2){


    return num1*num2;
}
console.log (multiply(31,2));

function random(){
    let result= (Math.floor(Math.random()*10) +1);
    Number.isInteger(result);

}

    
console.log (random());


function mod(num3 ,num4){
   
    return num3 % num4;

}
console.log (mod(9 , 4));

function max(){
    const number = new Set([5,9,20]);

   return Math.max(number);
}
console.log(max());