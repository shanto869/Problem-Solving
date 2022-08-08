// reverse charactor from a string 

function reverseString(text){
    let reverse = '';

    for(let i = text.length - 1; i >= 0; i--){
        let charactor = text[i];
        reverse = reverse + charactor;
        // console.log(reverse);
    }
    return reverse;
}

const myString = 'I am a very good boy';
const reversed = reverseString(myString);
// console.log(reversed);

// ================================
// reverse word from a string

function reverseWord(str){
    const words = str.split(' ');
    let result = [];

    for(let i = words.length - 1; i >= 0; i--){
        let element = words[i];
        result.push(element);
        // console.log(element)
    }
    console.log(words);
    console.log(result);
    const reversed = result.join(' ')
    return reversed;
}

const myStr = 'I am a very meritorious boy';
const reverseStr = reverseWord(myStr);
console.log('Reversed word:', reverseStr);

