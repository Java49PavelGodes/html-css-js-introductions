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

// console.log('sum1=',sumDigits(123));
// console.log('sum2=',sumDigits(-623));




//////////CW #12

let strNum1 = "123";
let strNum2 = "9";
// console.log(strNum1 + strNum2); //=> 1239
// console.log(strNum1 - strNum2); //=> 114
// console.log(strNum1 > strNum2); //=> false

/////conversions from string  to number

let num1 = + strNum1;//unarniy "+" - preobrazovanie stroki v chislo

let num2 = + strNum2;
//console.log(num1 + num2); //=> 132
//console.log(num1 - num2); //=> 114
//console.log(num1 > num2); //=> true

let strNumStr = '123ab';
let numStr = +strNumStr;
//console.log(numStr);

let num = parseInt(strNumStr);//=>123


//not good 
//if (numStr == NaN)
// good:
if (isNaN(numStr)) {
    
    console.log("numStr is NaN")

}

//conversions it string

let num10 = 123;
let strNum10 = "" + num10; // variant 1 

//variant 2

// let strNum16 = num10.toString(16);

// console.log(strNum10, strNum16);

//conversion from Morse code to number

// symbol "." -> 0 , "-" -> 1

function fromMorseToNumber(morseCode){
    let result = 0;
    for (let i = 0; i< morseCode.length; i++)
     {
        let code = morseCode[i] == '.' ? 0 : 1; // if '. then 0, else 1
        result = result * 2 + code ;//or 10-16-32 e t c
        // result = 10(all in binary)
        // result*2=>100 
        //code = 1
        // res +code = 101 
     


    }
    return result;
}
//console.log (fromMorseToNumber('-.-'));

function getSymbol(digit) {
    let codeA = 'a'.charCodeAt();
    return digit < 10? digit: String.fromCharCode(codeA + digit-10);
}

function fromNumberToString /*Morse*/ (number){
    number = Math.abs(number);
    let res = "";
    do {
        let digit = number % 2; //or 8 - 10 - 36 -  for function fromNumber2String
        /*let sym = digit == 0 ? '.' : '-'; */ let sym = getSymbol(digit); // for function fromNumber2String;
        res = sym + res;

        number = Math.trunc(number / 2); //or 8-10-36

    } while (number!=0);

    return res;

}

//console.log (fromNumberToMorse(5));
console.log(fromNumberToString(15,16));

///HW
//                           chislo, syst ischisl
//function fromNumberToString(number, base)   like to Morse


// function fromStringToNumber(string, base)


// TODO   getting code from symbol:  console.log('0' .charCodeAt(0)) ->
// console.log('abc' .charCodeAt(2)) -> ??
//// console.log('a' .charCodeAt(0)) -> 97 from aski to digit
// console.log(String.fromCharCode(99)) from symbol to ASKI
