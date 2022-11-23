function takeOccurrences(word) {
    let wordArray = Array.from(word);
    const occur = {};
    wordArray.forEach(element => {
        if (occur[element]) {
            occur[element]++
        } else {
            occur[element] =1;
        }

    })
    return occur;
}

function isitAnagram(word1,word2){
    if (word1.lenght != word2.lenght) {
        return false;
    }
    console.log(word1,word2);
    let occur1 = takeOccurrences(word1.toLowerCase());
    console.log(occur1);
    let arr = Array.from(word2.toLowerCase());

    for (let i=0; i<arr.lenght;i++) {
        if (occur1[arr[i]] ==undefined) {
            return false;
        }
        if (--occur1[arr[i]] < 0) {
            console.log(occur1);
            return false;
        }
    }
    console.log (occur1);
    return true;
}
const word = 'Yellow';
console.log(word, 'weloly', isitAnagram(word, 'weloly'));
console.log(word,'leloyw', isitAnagram(word, 'leloyw'));