const data = [
    { registration_number: 'T25_03_2170', first_name: 'john', last_name: 'doe' },
    { registration_number: 'T25_03_2171 ', first_name: 'hamisi', last_name: 'martin' },
    { registration_number: 'T25_03_2172', first_name: 'jane', last_name: 'smith' }
];

console.table(data);

var a =10;
var b=28;
var c=a+b;
console.log( "the sum of a and b is " + c  );   


function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Error: divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log("the answer is = " + calculator(5, 6, '/'));

function greet(name){
    return "Hello, " + name;
    greet=("charl");
}

let person={
    name:"charl",
    age: 30,
   
    }
console.log(person);

// renaming an using dt notation object
let person={
name:"charl",
age: 30,
}

person.name="hashm";
console.log(person.name);

//renaming an aobject using bracket notation
let person={
name:"charl",
age: 30,
}

person["name"] = "halima";
console.log(person["name"]);

//array
let colors = ["red", "green", "blue"];
console.log(colors);

//accessing array elements
console.log(colors[0]); // red
console.log(colors[1]); // green
console.log(colors[2]); // blue

//modifying array elements
colors[1] = "yellow";
console.log(colors); // ["red", "yellow", "blue"]

//array length
console.log(colors.length); // 3

//adding an element to the end of the array
colors.push("purple");
console.log(colors); // ["red", "yellow", "blue", "purple"]

//removing the last element of the array
colors.pop();
console.log(colors); // ["red", "yellow", "blue"]

//adding an element to the beginning of the array
colors.unshift("orange");
console.log(colors); // ["orange", "red", "yellow", "blue"]

//removing the first element of the array
colors.shift();
console.log(colors); // ["red", "yellow", "blue"]


//javascrpt functions
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Hello, Alice!


