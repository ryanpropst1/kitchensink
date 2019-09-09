// created a variable and initialized it to my name
let myFullName = "Ryan Propst";

//create const varialbe for the total number of states in the US - will not change
const UNITED_STATES = 50;

//created a variable to hold the sum of the calculation 5 + 4
let lovePotionNumNine = 5 + 4;

// Calls the 'sayHello' function.
sayHello();

// created a function that when called displays an alert wtih text Hello World!
function sayHello() {
  alert("Hello World!");
}

// creates an array of favourite vegetables and assigns it to the variable favVeg
let favVeg = [
  "Cavolo Nero",
  "Brussel Sprouts",
  "Peas",
  "Spinach",
  "Gai Lan",
  "Broad Beans"
];

//iterates thru the favVeg array and displays each veg to the console
for (var i = 0; i < favVeg.length; i++) {
  console.log(favVeg[i]); // Displays each item in 'favVeggies' array.
}

var Fritha = {
  name: "Fritha",
  age: 19
};

var Chris = {
  name: "Chris",
  age: 28
};

var Steve = {
  name: "Steve",
  age: 20
};

var Miriam = {
  name: "Miriam",
  age: 35
};

var Veronica = {
  name: "Veronica",
  age: 40
};

var myFriends = [Fritha, Chris, Steve, Miriam, Veronica];

for (var i = 0; i < myFriends.length; i++) {
  checkAge(myFriends[i].name, myFriends[i].age);
}

function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  } else {
    // Do nothing.
  }
}

//

function getLength(anyWord) {
  let wordLength = anyWord.length;
  if (wordLength % 2 == 0) {
    console.log("The world is even!"); // Even.
  } else {
    console.log("The world is an odd place!"); // Odd.
  }
}

getLength("Hello World");
