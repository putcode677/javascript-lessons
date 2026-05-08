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


        //arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

const greet = name => "Hello, " + name + "!";
console.log(greet("Alice")); // Hello, Alice!rrr


        //object method
let person = {
    first_name: "Alice",
    last_name:"moshi",
    age:"27",

    my_details: function() {
        return "my name is" +" "+this.first_name + "  " + this.last_name + 
        "  " + "i ahave "+this.age +"years old :";
    }
};

console.log(person.my_details()); 


        //array method
let numbers = [1, 2, 3, 4, 5];

        // using map to create a new array with squared values

let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

        // Array literal
const fruits = ['apple', 'banana', 'cherry'];

        // Array constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Array.from()
const letters = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

// Array.of()
const mixed = Array.of(1, 'two', true, null); // [1, 'two', true, null]

        
            // Iterating over an array
const nums = [1, 2, 3, 4, 5];

// for...of
for (const n of nums) console.log(n);

// forEach
nums.forEach((n, i) => console.log(i, n));

// Classic for loop
for (let i = 0; i < nums.length; i++) console.log(nums[i]);


            // Array methods for transformation and reduction
const nums = [1, 2, 3, 4, 5];

// map — transform each element
nums.map(n => n * 2);            // [2, 4, 6, 8, 10]

// filter — keep matching elements
nums.filter(n => n % 2 === 0);   // [2, 4]

// reduce — accumulate to single value
nums.reduce((sum, n) => sum + n, 0); // 15

// flat & flatMap
[[1, 2], [3, 4]].flat();             // [1, 2, 3, 4]
nums.flatMap(n => [n, n * 2]);       // [1, 2, 2, 4, 3, 6, ...]


            // Array methods for searching and testing
const arr = [10, 20, 30, 40, 50];

arr.indexOf(30);              // 2
arr.includes(20);             // true
arr.find(n => n > 25);        // 30
arr.findIndex(n => n > 25);   // 2
arr.some(n => n > 40);        // true
arr.every(n => n > 5);        // true


// Array methods for sorting and reversing
const letters = ['banana', 'apple', 'cherry'];
letters.sort();                       
letters.reverse();                     

const nums = [10, 1, 5, 3];
nums.sort((a, b) => a - b);          
nums.sort((a, b) => b - a);            

// Array methods for copying and combining
const a = [1, 2, 3];
const b = [4, 5, 6];

const copy    = [...a];              // [1, 2, 3]
const merged  = [...a, ...b];        // [1, 2, 3, 4, 5, 6]
const sliced  = a.slice(1, 3);       // [2, 3] (non-mutating)
const joined  = a.concat(b);         // [1, 2, 3, 4, 5, 6]

// Array methods for filling and modifying
const arr = [1, 2, 3, 4, 5];

arr.fill(0);                      // [0, 0, 0, 0, 0]
arr.fill(9, 1, 4);                // [1, 9, 9, 9, 5]

arr.copyWithin(0, 3);             // [4, 5, 3, 4, 5] (copies last two to start)

// Destructuring assignment
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x]; // x = 2, y = 1

// Array methods for joining and testing
[1, 2, 3].join(' - ');         // '1 - 2 - 3'
Array.isArray([1, 2]);         // true
Array.isArray('hello');        // false

// Fill
new Array(5).fill(0);          // [0, 0, 0, 0, 0]

// Keys, values, entries
const arr = ['a', 'b', 'c'];
[...arr.entries()]; // [[0,'a'], [1,'b'], [2,'c']]




