// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
   customerName = customerName.toUpperCase();
    
}
var bestCustomer;

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'whatever';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'something else';
}