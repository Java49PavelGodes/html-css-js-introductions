//--------------fromNumberToString--------------------------
function fromNumberToString(number, base) {
    console.log('number=', number, 'base=', base);
    if(!isBaseValid(base)) {
        return 'base='+base+' is not valid';
    }
    if(isNaN(number)) {
        return 'number=' + number +' isNaN';
    }
    let result = "";
    let posNum = Math.abs(number);
    while(posNum != 0) {
        let rem = posNum % base;
        if(rem > 9) {
            /*  Convert reminder to symbols for 'a' to 'z'
            */
            rem = String.fromCharCode(87+rem);
        }
        result = rem + result;
        posNum = Math.trunc(posNum / base);
    }
    return number<0 ? ('-' + result) : result;
}
console.log(fromNumberToString(900550, 37)); // => base???
console.log(fromNumberToString(900550, 36)); // => 'java'
console.log(fromNumberToString(46016237, 36)); // => 'react'
console.log(fromNumberToString(-46016237, 36)); // => '-react'
console.log(fromNumberToString(11483, 2)); // => '10110011011011'
console.log(fromNumberToString('1an483', 2)); // => isNaN
console.log(fromNumberToString(11483, '2a')); // => '10110011011011'
console.log('=============================================');
//--------------fromStringToNumber--------------------------
function fromStringToNumber(inputStr, base) {
    console.log('inputStr=', inputStr, ' base=', base);
    if(!isBaseValid(base)) {
        return 'base='+base+' is not valid';
    }
    if(typeof inputStr != 'string') {
        return 'inputStr='+inputStr+' is not string';
    }
    let result = 0;
    for(let i=0; i<inputStr.length; i++) {
        /* V.R.
        The charCodeAt() method returns an integer between 0 and 65535
         representing the UTF-16 code unit at the given index.
        */
        let code = inputStr.charCodeAt(i);
        if(code>=48 && code<=57) {
            /* V.R. Between '0' and '9' */
            code -= 48;
        } else if(code >= 97 && code <= 122) {
            /* V.R. Between 'a' and 'z'  */
            code -= 87;
        } else {
            return 'error';
        }
        let x = inputStr.length - 1 - i;
        result = result + code*(base**x);
//        result = result*base + code;
    }
    return result;
}

console.log(fromStringToNumber('java', 36));  // => 900550
console.log(fromStringToNumber('java', 1));  // => 900550
console.log(fromStringToNumber('react', 36));  // => 46016237
console.log(fromStringToNumber('10110011011011', 2));  // => 11483
console.log(fromStringToNumber(123, 35));
console.log(fromStringToNumber('java', '12as'));
//---------------isBaseValid------------------------------
function isBaseValid(base) {
    if(isNaN(base)) {
        return false;
    }
    if(typeof base == 'number' && base>=2 && base<=36) {
        return true;
    }
    return false;
}