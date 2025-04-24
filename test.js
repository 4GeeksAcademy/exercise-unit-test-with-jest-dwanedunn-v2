const {sum} = require('./app.js');

// start first test
test('adds 14 + 9 to equal 23', () => {
let total = sum(14,9);
expect(total).toBe(23);
})

//*** SECOND TEST ***

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

// This is the comparison for the unit test
expect(fromEuroToDollar(3.5).toBe(3.745) // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
)
}
