// Pure function
// const pureAdd = (num1, num2) => {
//     return (num1 + num2);
// }

// console.log(pureAdd(3, 3));
// console.log(pureAdd(3, 3));
// console.log(pureAdd(3, 3));

// Impure function
// let a = 0;

// const impureAdd = (num3) => {
//     return (a += num3);
// }

// console.log(impureAdd(5));
// console.log(impureAdd(5));
// console.log(impureAdd(5));


// Change fontsize
// let fontSize = 16;
// let button = document.getElementById('container');

// button.addEventListener('click', (text) => {
//     let el = text.target.id;

//     if (el == 'plus')
//     {
//         fontSize++;
//     }
//     else if (el == 'minus')
//     {
//         fontSize--;
//     }

//     document.getElementById('text').style.fontSize = fontSize + 'px';
// });


// Time functions
// setTimeOut(), setInterval()

// function sayHi()
// {
//     alert('salam');
// }

// setTimeout(sayHi, 2000);
// setTimeout( ()=> alert('salam'), 2000 );

// let timerId = setInterval( ()=> alert('salam'), 3000);

// setTimeout( ()=> {clearInterval(timerId); alert('stop')}, 5000 );


// Task
// Method 1:
// function printNum(from, to)
// {
//     for (let i = from; i <= to; i++)
//     {
//         setTimeout(() => 
//         {
//             console.log(i)
//         }, i * 2000);
//     }
// }

// printNum(2, 16);

// Method 2:
// function printNum(from, to)
// {
//     let current = from;

//     let timerId = setInterval(function()
//     {
//         console.log(current);

//         if (current == to)
//         {
//             clearInterval(timerId);
//         }

//         current++;
//     }, 2000);
// }

// printNum(3, 6);


// Closures in JS
// function outerFunc()
// {
//     let msg = 'Outer Function';

//     function innerFunc()
//     {
//         console.log(msg)
//     }
    
//     return innerFunc;
// }

// let mm = outerFunc();
// mm();

// function extraOuterFunc()
// {
//     let mm = outerFunc();

//     mm();
// }

// extraOuterFunc();