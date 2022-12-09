//using functions  to solve a problem
function Student  (firstName, lastName, age, phoneNumber) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.phoneNumber = phoneNumber
    this.greet = function() {
        return('Wassup' +' '+this.firstName+' ' +'you are'+' '+this.age+' '+'years old')
    }
}

const student1 = new Student('peter', 'smith', 30, 166584004)
const student2 = new Student('jack', 'bob', 45, 886655)
const student3 = new Student('kob', 'jim', 32, 987544)

console.log(student1)
console.log(student2)
console.log(student3)
console.log(student1.greet())
console.log(student2.greet())
console.log(student3.greet())

console.log(student1.age)
student1.age = 98
console.log(student1.age)

console.log(student1.greet())


student1.greet = function() {
    return('How you doing '+' '+this.firstName)
}
console.log(student1.greet())


Student.prototype.greet = function() {
    return('sup'+' '+this.firstName)
}

console.log(student1.greet())


//uncomment the following codes to get the solutions
 /*function greet(name) {
        console.log(`hello ${name}`)
    }

name= 'malone'
greet(name)

function addnum(x, y){
    return x + y
}
let x = 20
let y = 30
//console.log(addnum(x, y))

function square(z){
    return z*z
}
console.log(square(5))*/

// function countDown(num) {
//     console.log(num);
//     const newNum = num - 1
//     if (newNum > 0) {
//         countDown(newNum);
//         }
//     }
//     countDown(10)
// function factorial(x){
// if (x === 0) {
//     return 1;
//     }
//     else {
//     return x * factorial(x - 1);
//     }
// }
//     var num = 5;
//     if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
//     }
