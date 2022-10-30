console.log("Hello SumDigits.js");
function sumDigits(number) {
number = Math.abs(number);
number = Math.trunc(number);
let sum = 0;
do {
    
    let digit = number % 10;
    number = (number - digit) / 10;
    sum += digit;


}while(number != 0);




    // if(isNaN(number)){
    //     return'Error';

    // }
    // if(number<0){
    //     number=-number;
    // }
    // let sum=0;
    // while(!(number == 0)) {
    //     sum += number %10;
    //     number = Math.floor(number/10);

    // }
    return sum;
}

console.log('sum1=',sumDigits(123));
console.log('sum2=',sumDigits(-623));
