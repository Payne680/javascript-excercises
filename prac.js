// let x = 10 / 5;
// x += 10
// x++
// console.log(x)


//strings and Template Literals
// const firstName = "malone"
// const job = 'Web Developer'
// const birthYear = 2000
// const year = 2022

// // const malone = " I'm " + firstName + ' ,a ' + (year -  birthYear) +  ' years old '  + job + '!'
// // console.log(malone)

// const maloneNew = `I'm ${firstName} ,a ${year - birthYear} year old ${job}`
// console.log(maloneNew)

// const age = 14
// if (age >= 18) {
//     console.log(`malone can start his driving license🚗`)
// } else {
//     yearsLeft = 18 - age
//     console.log(`Malone is too young. please wait another ${yearsLeft} years 😉`)
// }

const birthYear = 1999
let century

if(birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(`was born in the ${century} century`)