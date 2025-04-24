const {sum} = require('./app.js');

// start first test
test('adds 14 + 9 to equal 23', ()=>{
let total = sum(14,9);
expect(total).toBe(23);
})

//*** Second Test ***
test("One euro should be 1.07 dollars",function(){
// import function from app.js
const {fromEuroToDollar} = require('./app.js');

//use the function 
const dollars = fromEuroToDollar(3.5);

//If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
const expected = 3.5 * 1.07;

// This is the comparison for the unit test
expect(fromEuroToDollar(3.5).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
