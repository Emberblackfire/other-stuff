function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
		console.log(innerVar); // Can we access innerVar?
	} 
    //yes they are both local scopes

	innerFunction();
}
//exercise 2
outerFunction();

function mainFunction() {
	// Call the hoistedFunction here
    console.log(hoistedFunction)
	// Now, declare the hoistedFunction below
    let hoistedFunction
}

mainFunction();


//exercise 3
function a() {
  
    alert('A!');

    function b(){
        alert('B!'); 
    }

    return b;
}

var s = a();
alert('break');
s();


//exersise 4
// Declare a global variable here
let z=2;

function modifyGlobal() {
    // Try to modify the global variable here
	let z = "math is hard"
	console.log(z)
}

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
	let z=8
}

// Call both functions here
console.log(z)
console.log(modifyGlobal(z));
console.log(localScopeTest())

//exercise 5

function functionFactory(param) {
    // Return a function that makes use of 'param'
}

// Create an instance of the inner function by invoking functionFactory with a parameter

//exercise 6
function hoistingTest() {
    // Try printing a variable here

    // Declare the variable after the console.log
}

hoistingTest();

//exercise 7

function setupCounter() {
    // Define a count variable here

    return function() {
        // Increment and print the count
    }
}

// Create a counter instance and invoke it to test

//exercise 8


//exercise