let str1 = 'доступ';
let str2 = 'морпех';
let str3 = 'наледь';
let str4 = 'попрек';
let str5 = 'рубило';
let lengthWords = 0;
let words = [str1,str2,str3,str4,str5]
let wordIndex = 0;
let index = 0
let word;

while(words[wordIndex]) {
    index = 0
    word = words[wordIndex];
    while(word[index]) {
        index = index + 1
    }
    lengthWords = lengthWords + index
    wordIndex = wordIndex + 1
}

console.log(lengthWords)