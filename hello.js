

// Strings
var brand = "Amigoscode"
console.log(typeof brand)
console.log(brand.length)
console.log(brand.toUpperCase())
console.log(brand.substring(0, 6))

var a = "Amigos"
var b = "code"
console.log(a + " " + b)
console.log(`${a} ${b}`)

// Objects
//Objetos ficam dentro do {}
var person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    }
};
console.log(person.firstName);
console.log(person.age);
console.log(person.balance);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person))

// Boolean
var isAdult = true

if (!isAdult) {
    console.log("is not an adult :( ")
} else {
    console.log("is adult :)")
}

console.log(!true)
console.log(!false)

// Arrays
var names = [
    "Alex",
    "Jamila", 
    "Joe", 
    "Aisha"
];
console.log(names);
console.log("Index 0 - " + names[0]);
console.log("Index 1 - " + names[1]);
console.log("Index 2 - " + names[2]);
console.log("Index 3 - " + names[3]);
console.log("Index 4 - " + names[4]);
console.log("Size = " + names.length);

// Arithmetic Operators
var addition = 2 + 2;
var subtraction = 2 - 2;
var division = 10 / 2;
var multiplication = 10 * (2 + 1) * 0;
var resto = 10 % 7;
var exponentation = 3 ** 3;

console.log(addition);
console.log(subtraction);
console.log(division);
console.log(multiplication);
console.log(resto);
console.log(exponentation);

// Functions
function addNumbers(number1, number2) {
    var addition = number1 + number2;
    return addition;
}

var result1 = addNumbers(10, 10);
var result2 = addNumbers(7, 3);

console.log(result1);
console.log(result2);

//Another Function
var person = {
    name: "Jamila"
}
console.log(Object.values(person));
console.log(Object.keys(person));

console.log("Jamila".toUpperCase());
console.log("Jamila".toLocaleLowerCase());
console.log("Jamila".indexOf("i"));

// Loops
var names = [
    "Alex",
    "Jamila", 
    "Joe", 
    "Aisha",
    "Bob"
];

console.log("fori");

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log();
console.log("for of");

for (const name of names) {
    console.log(name);
}

console.log();
console.log("forEach");

names.forEach(function(name) {
    console.log(name)
});

// While Loops
var names = [
    "Alex",
    "Jamila",
    "Joe",
    "Aisha",
    "Bob"
];

var index = 0;

while(index < names.length) {
    console.log(names[index]);
    index = index + 1;
}

// Do While Loops
do {
    console.log("hello");
} while(true);