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
    console.log(element, value)
}