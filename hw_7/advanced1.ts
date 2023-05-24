function isPalindrom(string: string): boolean {
    let letters = string.split("");
    let reversedLetters = string.split("");
    reversedLetters.reverse();
    let i = 0;
    let p = true;
    while (i < letters.length) {
        if (letters[i] !== reversedLetters[i]) {
            p = false
            break
        }
        i++
    }
    return p
}

console.log(isPalindrom('топот'));
console.log(isPalindrom('топор'))


function isPalindrom2(string: string): boolean {
    let reversedLetters = string.split("");
    reversedLetters.reverse();
    return reversedLetters.join("") === string;
}
console.log(isPalindrom2('топот'));
console.log(isPalindrom2('топор'))