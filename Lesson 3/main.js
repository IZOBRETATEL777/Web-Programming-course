//alert('hello')
/*
console.log('hello');
console.log(true);
console.log([1, 3, 5, 7]);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.table([1, 3, 5, 7]);
*/
/*
console.error('This is an error!');
console.warn('Warning message!');
console.time('starting time');
    console.log('hello');
    console.log(true);
    console.log([1, 3, 5, 7]);
    console.log({a:1, b:2});
    console.table({a:1, b:2});
console.timeEnd('starting time');
*/

// var, let, const
/*
var name1 = 'Anna';
var name1 = 'John';
console.log(name1);
*/
/*
const name2 = 'Erik';
name2 = 'Emily';
console.log(name2);
*/
/*
const obj1 = {a: 'Asif', b: 'Anar'};
obj1.c = 'Narmina';
console.log(obj1);

let bb = "Samir";
bb = "Asmar";
console.log(bb);
*/

// DATA TYPES
// Primitives
/*
const sname = "Alyans";
const age = 44;
const hasKids = true;
const car = null;
let married;
// married = 2;
console.log(married);

// REFERENCE TYPES
// Arrays
const hobbies = ["movies", "music"];

const address = {
    city: "Baku",
    capital: true
}

console.log(address.city, address["capital"]);

console.log(typeof address);
console.log(typeof(hobbies));
*/
/*
const sname = "Aliyeva";
const age = 44;
const hasKids = true;

console.log(String(age));
console.log(Number('55'));
*/
/*
let val;
val = Math.PI;
console.log(val);
*/

// STRING methods
/*
const firstName = "Alim";
const lastName = 'Qasimov';
const age = 55;

let val;

val = firstName + ' ' + lastName;
val = 'Hello, my name is ' + firstName + ' and surname is ' + lastName;  
val = 'That\'s awesome!';  // var = "That's awesome!"
console.log(val.length);
console.log(val);

// indexOf()
console.log(val.indexOf('h'));
console.log(val.lastIndexOf('e'));

// charAt()
console.log(val.charAt(4));

console.log(val.slice(0, 5));
console.log(val.split(' ')); // Change string into an array
console.log(val.includes('it'));
*/

// Template literals
/*
const firstName = "Alim";
const lastName = 'Qasimov';
const age = 55;

let html;
// html = '<ul><li>' + firstName + '</li><li>' + lastName + '</li><li>' + age + '</li></ul>';
html = `<ul><li> ${firstName} </li><li> ${lastName} </li><li> ${age} </li></ul>`;
document.body.innerHTML = html;
*/

/*
const array1 = ["apple", "grape", "pomegranate"];
const array2 = [22, 'hello', true, undefined, null, {a:1, b:2}];
console.log(array1.length);
console.log(Array.isArray(array2));

array1.push("melon");
console.log(array1);
*/

/*
const array1 = ["apple", "grape", "pomegranate"];
const array3 = ["cherry"];
//console.log(array1.concat(array3));

// ES-6 version
const array_comb = [...array1, ...array3, "watermelon"];
console.log(array_comb);
*/

// Object literals
/*
const person = {
    firstName: "Alim",
    lastName: "Qasimov",
    age: 66,
    email: "alim@gmail.com",
    address: 
    {
        city: "Baku",
        region: "Absheron"
    },
    getBirthYear: function()
    {
        return 2022 - this.age;
    }
}

console.log(person.lastName, person.address.city);
console.log(person.getBirthYear());
*/

// Conditional operators
/*
const name1 = "Anar";
const age = 50;

if (age > 0 || age < 55)
{
    console.log('Yes, I am young.');
}
else
{
    console.log('No, I am old.');
}

console.log(age < 70 ? "young" : "old");
*/

// FUNCTIONS
/*
function greet(firstName, lastName)
{
    if (firstName === undefined)
    {
        firstName = "Alim";
    }
    if (lastName === undefined)
    {
        lastName = "Aliyev";
    }

    return firstName + ' ' + lastName;
}

console.log(greet());


function greet2(firstName, lastName)
{
    return ((firstName === undefined ? "Alim" : firstName) + ' ' + (lastName === undefined ? "Aliyev" : lastName));
}
console.log(greet2());

// Functional expressions
const square = function(x)
{
    return x**2;
}

console.log(square(3));

// immidiately invokable function
(function(myname)
{
    console.log("Greet you, " + myname);
}
)("Alim");
*/
/*
const todo = {
    add: function()
    {
        console.log(`Add todo...`)
    },
    edit: function(id)
    {
        console.log(`Edit todo ${id}`)
    }
}

todo.add();
todo.edit(5);
*/

// LOOPS 
/*
for (let i = 0; i < 10; i++)
{
    if (i === 2)
    {
        console.log('2 is my favourite number');
        continue;
    }
    console.log('number' + i);
}
*/
/*
let i = 0;

while(i < 10)
{
    console.log('number' + i);
    i++;
}
*/

const arr2 = ["cherry", "lada", "bmw"];
/*
for (i = 0; i < arr2.length; i++)
{
    console.log(arr2[i]);
}
*/

arr2.forEach(function(car, index)
{
    console.log(index, car);
});

const user = {
    firstName: 'John',
    lastName: 'Doe'
}

for(x in user)
{
    console.log(`${x}: ${user[x]}`);
}
