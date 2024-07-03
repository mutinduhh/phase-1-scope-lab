// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    return customerName.toUpperCase();
  }  
  console.log(upperCaseCustomerName()); // Output: BOB

console.log(uppercaseModifier(customerName)); // Output: BOB
function setBestCustomer() {
    window.bestCustomer = 'not bob';
  }

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'alice';

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'john'; // declare the variable with const
    leastFavoriteCustomer = 'charlie'; // This will throw an error: "Assignment to constant variable."
  }
  
  try {
    changeLeastFavoriteCustomer();
  } catch (error) {
    console.error(error); // Output: TypeError: Assignment to constant variable.
  }