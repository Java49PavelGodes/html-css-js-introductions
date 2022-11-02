
function fromNumberToString(number, base) {
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

function fromStringToNumber(inputStr, base) {
    console.log('inputStr=', inputStr, ' base=', base);
    if(!isBaseValid(base)) {
        return 'base='+base+' is not valid';
    }
    if(typeof inputStr != 'string') {
        return 'inputStr='+inputStr+' is not string';
    }
    return parseInt(inputStr, base);
}

function isBaseValid(base) {
    if(isNaN(base)) {
        return false;
    }
    if(typeof base == 'number' /*&& Number.isInteger('number')*/ && base>=2 && base<=36) {
        return true;
    }
    return false;
}
console.log(fromNumberToString(900550, 36)); 
console.log(fromNumberToString(46016237, 36));
console.log(fromStringToNumber('10110011011011', 2)); 
console.log(fromStringToNumber('react', 36));




///HW
//                           chislo, syst ischisl
//function fromNumberToString(number, base)   like to Morse


// function fromStringToNumber(string, base)


// TODO   getting code from symbol:  console.log('0' .charCodeAt(0)) ->
// console.log('abc' .charCodeAt(2)) -> ??
//// console.log('a' .charCodeAt(0)) -> 97 from aski to digit
// console.log(String.fromCharCode(99)) from symbol to ASKI
