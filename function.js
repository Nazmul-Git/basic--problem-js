let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log( userName ); // John before the function call

showMessage();

console.log( userName ); // Bob, the value was modified by the function

// --------------------------------------------------------------------------------------------------------------

//  so if write the same variable name in a function we should must declare it ........


let userNamed = 'John';

function showMessage() {
  let userNamed = "Bob"; // declare a local variable 

  let message = 'Hello, ' + userNamed; // Bob
  console.log(message);
}

// the function will create and use its own userName
showMessage();

console.log( userNamed ); // John, unchanged, the function did not access the outer variable