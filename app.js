let ar =[];
ar[10000] = 100;
ar[1] = [1,2,3];
console.log("length of array = ", ar.length);
ar[0] = "hello";
console.log("10000-th element =", ar[10000]);
console.log("0-th element =", ar[0]);
console.log("1-th element =", ar[1]);


let str = "Hello";
let arStr = Array.from(str);//getting arra of the string's symbols
console.log("String 'Hello' -> array is",arStr);

//Methods for arrays in js:

// for (let i = 0; i< arStr.length; i++){   // - this not use proffesionals
//     console.log(arStr[i]);
// }

// for (let i = 0; i< arStr.length; i++){      - not used to
//          console.log("element at index ",arStr[i]);
// }

function println(element, index, array){
    console.log("element at index", index, element);
}
arStr.forEach(println);

//map-function

let arCodeAscii = arStr.map(function(symbol,index){
    return index %2 == 0 ? symbol.charCodeAt(): symbol ;// symbol.charCodeAt() + index;
})
console.log(arStr, arCodeAscii);

//reduce - function

let sumAscii = arStr.reduce(function(res, cur){  //accumuliator res  and current(tecushiy element)
return res + cur.charCodeAt();
}, 0)
console.log("sum of ascii", sumAscii)

console.log(arStr.reduce(function(res,cur){
return res+cur
}, ""));
