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

// renaming an object
let person={
name:"charl",
age: 30,
}

person.name="hashm";
console.log(person.name);
