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
    inputStr.toLowerCase();
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
    //    result = result*base + code;
    }
    return result;
}
function fromStringToNumber1(inputStr, base) {
    console.log('inputStr=', inputStr, ' base=', base);
    if(!isBaseValid(base)) {
        return 'base='+base+' is not valid';
    }
    if(typeof inputStr != 'string') {
        return 'inputStr='+inputStr+' is not string';
    }
    return parseInt(inputStr, base);
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
    if(base > Math.trunc(base)) {
        return false;
    }
    if(typeof base == 'number' && base>=2 && base<=36) {
        return true;
    }
    return false;
}

// function foo1() {
//     let a = 5;
    
//     a = foo2(++a);
// }
// function foo2(b) {
//     return b++;
// }