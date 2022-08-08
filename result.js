// find out our gpa result
const myScore = 12;

switch(myScore){
    case '(myScore > 0 && myScore < 33)':
        console.log('Opps! You are fail');
        break;
    case '(myScore >= 33 && myScore < 40)':
        console.log('You got D grade')
}

// circle khetrofol 

function areaOfCircle(r){
    const pi = 3.1416;
    const area = pi * r * r;
    console.log(area);
}

// areaOfCircle(4);

// discount of shopping

function discountPriceCalc(totalPrice){

    if(totalPrice >= 5000){
        const discountPrice = totalPrice * (20 / 100);
        const netPrice = totalPrice - discountPrice;
        console.log(discountPrice, netPrice);
    }
    else if(totalPrice >= 3000 && totalPrice < 1000){
        const discountPrice = totalPrice * (15 / 100);
        const netPrice = totalPrice - discountPrice;
        console.log(discountPrice, netPrice);
    }
    else if(totalPrice >= 1000 && totalPrice < 3000){
        const discountPrice = totalPrice * (10 / 100);
        const netPrice = totalPrice - discountPrice;
        console.log(discountPrice, netPrice)
    }
    else{
        console.log('Sorry! You can not get any discount');
    }
    // return [discountPrice, netPrice];
}

const amount = discountPriceCalc(800);
console.log(amount);

// check leap year

function isLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(year, 'This year is Leap year');
    }
    else{
        console.log(year, 'This year is not a Lear year');
    }
}

isLeapYear(2012);

// ============================
// factorial

// function fact(n){
//     let result = 1;

//     let i = 1;
//     while(i <= n){
//         result = result * i;
//         i++;
//     }
//     return result;
// }

// console.log(fact(4))

function fact(num){
    let result = 1;
    for(let i = num; i >= 1; i--){
        result = result * i;
    }
    console.log(result)
}

// fact(4);

// ========================
// odd even number sum from an array

function oddEvenSum(arr){
    let oddSum = 0;
    let evenSum = 0;
    
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        const remainderElement = element % 2;

        if(remainderElement === 0){
            evenSum = evenSum + element; 
        }
        else {
            oddSum = oddSum + element;
        }
    }
    console.log('Even Num Sum:', evenSum)
    console.log('Odd Num Sum:', oddSum)
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const sum = oddEvenSum(myArray);