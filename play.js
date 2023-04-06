// /*
// write a program that uses console.log to print all the number from 1 to 100 with two 
//  */

// let num =10;
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < i; j++) {
//         process.stdout.write('#')
//     }
//     console.log(' ');
// }

// let text = '#'
// for (let i = 0; i < Array.length; i++) {
//     console.log(text);
//     text += '#';
// }

function compareTripplet(a, b) {
    let alice = 0;
    let bob = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i]>b[i]){
            alice++;
        }
        else if(b[i]>a[i]){
            bob++
        }
    }
    return[alice, bob]
}
