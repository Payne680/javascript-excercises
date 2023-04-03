/*
write a program that uses console.log to print all the number from 1 to 100 with two 
 */

let num =10;
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write('#')
    }
    console.log(' ');
}

let text = '#'
for (let i = 0; i < Array.length; i++) {
    console.log(text);
    text += '#';
}