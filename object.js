// access property and value from an object

const myComputer = {
    brand : 'Lenevo',
    color : 'Black',
    Price : 59000,
    ram : '4gb',
    processor : '5i',
    ssd : '256gb',
    hardDisk : 'none'
}

const properties = Object.keys(myComputer);
const values = Object.values(myComputer);

for(let i = 0; i < values.length; i++){
    let element = properties[i];
    let value = values[i];
    // console.log(element, value)
}

// ==============================
// find the cheapest phone from an array of phone object

const phones = [
    {name : 'samsung', camera : 15, stroge : '64gb', price : 36000},
    {name : 'Xaomi', camera : 12, stroge : '32gb', price : 30000},
    {name : 'Symphon', camera : 12, stroge : '64gb', price : 15000},
    {name : 'walton', camera : 15, stroge : '32gb', price : 18000},
    {name : 'samsung', camera : 15, stroge : '32gb', price : 57000},
    {name : 'Iphone', camera : 12, stroge : '64gb', price : 66000}
];

function cheapestPhone(phones){
    let cheapest = phones[0];

    for(let i = 0; i < phones.length; i++){
        let phone = phones[i];

        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log('Cheapest Phone:', mySelection);

// calculate the total cost of the phones in an array of object

function totalCost(products){
    let totalPrice = 0;

    for(let i = 0; i < products.length; i++){
        let product = products[i];
        totalPrice = totalPrice + product.price
    }
    console.log('Total Cost is:', totalPrice);
}

totalCost(phones);

// ===================

const shoppingCart = [
    {name : 'samsung', camera : 15, quantity : 2, price : 2000},
    {name : 'Xaomi', camera : 12,  quantity : 3, price : 4000},
    {name : 'Symphon', camera : 12, quantity : 3, price : 1000},
    {name : 'walton', camera : 15, quantity : 2, price : 3000},
    {name : 'samsung', camera : 15, quantity : 5, price : 5000},
    {name : 'Iphone', camera : 12, quantity : 1, price : 1000}
];

function totalAmount(products){
    let totalSum = 0;

    for(let i = 0; i < products.length; i++){
        let product = products[i];
        let productTotal = product.quantity * product.price;
        totalSum = totalSum + productTotal;
    }
    console.log(totalSum);
}

// totalAmount(shoppingCart);

// =========================
// multi layer discount price calculation (advance)
// 01. first 100 -----> 100tk
// 02. first 100 -----> 100tk, 101--200 -----> 90tk
// 03. first 100 -----> 100tk, 101--200 -----> 90tk, 200+ -----> 70tk

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(300);
console.log('Total Ticket Price is:', price);