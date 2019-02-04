

// var heading = document.getElementById('heading');

// var myName = 'Dan';

function someNameHere(){
  return 'dan';
}

someNameHere();
console.log(someNameHere);

// Function Expression
var myName =  function(){
  return 'Dan';
};

myName();
console.log(myName);

// Immediately Invoked Function Expression
(function(){
  console.log('Dan');
})();

// iife

// ******** FOREACH **********

var fruits = ['banana', 'apple', 'pear'];
                //0       //1       //2

function eatFruit(fruit, index, fruits){
  console.log(index+1, 'nohmmm nohmmm nooohmmm ', fruit);
}

function getLengthofFruit(fruit){
  console.log(fruit, fruit.length);
}

function forEach(array, callback){
  for(var i=0; i<array.length; i++){
    callback(array[i], i, array);
  }
}

forEach(fruits, eatFruit);
forEach(fruits, function(fruit){
  console.log(fruit, fruit.length);
});

['ford', 'dodge', 'tesla'].forEach(function(car, index, cars){
  console.log('Car number', index+1, ' out of ', cars.length);
  console.log('Car: ', car);
});

var coffeeVendors = ['dunkin', 'methodical', 'due south'];

coffeeVendors.forEach(function(vendor){
  console.log(vendor);
});


// ************ MAP ******************

var productPrices = [10.50, 12, 20];
// var salesPrices = productPrices.forEach(function(){});

function decreaseThePrice(price){
  return Math.floor(price * 0.9);
}

function map(array, callback){
  var newArray = [];

  for(var i=0; i<array.length; i++){
    newArray.push(callback(array[i], i, array));
  }

  return newArray;
}

var salesPrices = map(productPrices, decreaseThePrice);
console.log(salesPrices);

var newPrices = productPrices.map(function(item, index, originalArray){
  // we have to return a value
  return item * 0.9;
});

// Create a new array with true/false indicating if each number
// is greater than 3, using map.
var smallNumbers = [4, 6, 1, 3, 2, 5];

function overThree(number){
  return number>3;
}

var isGreaterThanThree = smallNumbers.map(overThree);

console.log(isGreaterThanThree);

// ************ REDUCE ******************
// var productPrices = [10.50, 12, 20];

var totalPrice = productPrices.reduce(function(previousValue, item){
  return previousValue + item;
}, 100);

var sepValues = productPrices.reduce(function(previousValue, item){
  return previousValue + '~' + item;
});

console.log(sepValues);
