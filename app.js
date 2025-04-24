
// Function to sum two numbers
const sum = (a,b) => {
return a+b
}

// Function to convert Euro to Dollar
const fromEuroToDollar = function(valueInEuro){
// Convert the given valueInEuro to dollars
let valueInDollar = valueInEuro * 1.07;
// return the dollar value
return valueInDollar;
}

//console.log(sum(7,3))
//We need to export the functions to use them.
module.exports = {sum,fromEuroToDollafromEuroToDollar};
