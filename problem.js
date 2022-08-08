// get gpa result 

const result = 99;

if(result >= 0 && result <= 100){
    if(result > 0 && result < 33){
        console.log('Opps you are fail');
    }
    else if(result >= 33 && result < 40){
        console.log(result, 'You got gpa D');
    }
    else if(result >= 40 && result < 50){
        console.log(result, 'You got gpa C');
    }
    else if(result >= 50 && result < 60){
        console.log(result, 'You got gpa B');
    }
    else if(result >= 60 && result < 70){
        console.log(result, 'You got gpa A-');
    }
    else if( result >= 70 && result < 80){
        console.log(result, 'You got gpa A+');
    }
    else if(result >= 80 && result < 90){
        console.log(result, 'Congress you got A+');
    }
    else{
        console.log(result, 'WoW! Congress you got Golden A+');
    }
}
else{
    console.log(result, 'Sorry! your input is wrong!');
}

// =====================================
// simple interest calculate function

function interest(principal, rate, time){
    const interestAmount = (principal * rate * time) / 100;
    const totalAmount = principal + interestAmount;
    console.log('Total Interest:', interestAmount);
    console.log('Total Amount:', totalAmount);
}

// interest(5000, 10, 5);
// =======================================

// complex interest calculate function

function compoundInterest(principal, rate, time){
   let compoundPrincipalAmount = principal * (1 + rate / 100)** time;
   compoundPrincipalAmount = compoundPrincipalAmount.toFixed(); 
   let compoundInterestAmount = compoundPrincipalAmount - principal;
    console.log('Total Interest:', compoundInterestAmount);
    console.log('Total Principal:', compoundPrincipalAmount);
}

// compoundInterest(5000, 8, 2);

// ==================================

// findout the numbers who will devied by 3 and 5

// for(let i = 0; i <= 50; i++){

//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('FooBar');
//     }
//     else if(i % 3 === 0){
//         console.log('Foo');
//     }
//     else if(i % 5){
//         console.log('Bar');
//     }
//     else{
//         console.log(i)
//     }
// }

// ========================

// find out the total quantity of wood


function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(1, 1, 1);
console.log(totalWood);

// ======================================

// 
