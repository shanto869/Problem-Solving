
// odd and even sum from an array

function oddEvenSum(array){
    let oddSum = 0;
    let evenSum = 0;

    for(let i = 0; i < array.length; i++){
        let element = array[i];
        let remainder = element % 2;

        if(remainder === 0){
            evenSum = evenSum + element;
        }
        else{
            oddSum = oddSum + element;
        }
    }
    return ['OddSum:', oddSum, 'Even Sum:', evenSum];
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfOddEven = oddEvenSum(myArray);

console.log(sumOfOddEven);

// ==================================
// find to maximum number from an array

function maxInArray(numbers){
    let maximumNum = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];

        if(element > maximumNum){
            maximumNum = element;
        }
    }
    return maximumNum;
}

const arr = [8, 2, 56, 2, 9, 5, 22, 9, 69, 8];
const maxNumber = maxInArray(arr);
// console.log(maxNumber);

// ======================================
// find a minimum number form an array

function minInArray(numbers){
    let smallestNum = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];

        if(number < smallestNum ){
            smallestNum = number;
        }
    }
    return smallestNum;
}

const numArr = [9, 3, 8, 92, 22, 10, -2, 5, 7];
const minimumNum = minInArray(numArr);
// console.log(minimumNum);

// =====================================
// remove the duplicate element from an array

function removeDuplicate(numbers){
    const uniqe = [];
    
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];

        if(uniqe.includes(element) === false){
            uniqe.push(element)
        }
    }
    return uniqe;
}

const numArray = [2, 4, 2, 4, 8, 2, 4, 6, 8, 9, 2, 5, 8, 9, 5];
const uniqeNum = removeDuplicate(numArray);
console.log(uniqeNum);

function removeDuplicate(names){
    let uniqeNam = [];

    for(let i = 0; i < names.length; i++){
        let elementName = names[i];

        if(uniqeNam.includes(elementName) === false){
            uniqeNam.push(elementName)
        }
    }
    return uniqeNam;
}

const personArr = ['abul', 'babul', 'jabul', 'kabul', 'mukhbul', 'jabul', 'kabul', 'abul', 'mukhbul', 'babul', 'kabul'];
const uniqeName = removeDuplicate(personArr);
console.log(uniqeName);