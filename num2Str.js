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
function fromNumberToString1(number, base) {
    console.log('number=', number, 'base=', base);
    if(!isBaseValid(base)) {
        return 'base='+base+' is not valid';
    }
    if(isNaN(number)) {
        return 'number=' + number +' isNaN';
    }
    let posNum = Math.abs(number);
    let result = posNum.toString(base);
    return number<0 ? ('-' + result) : result;
}
console.log(fromNumberToString(900550, 37)); // => base???
console.log(fromNumberToString(900550, 36)); // => 'java'
console.log(fromNumberToString(46016237, 36)); // => 'react'
console.log(fromNumberToString(-46016237, 36)); // => '-react'
console.log(fromNumberToString(11483, 2)); // => '10110011011011'
console.log(fromNumberToString('1an483', 2)); // => isNaN
console.log(fromNumberToString(11483, '2a')); // => '10110011011011'
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