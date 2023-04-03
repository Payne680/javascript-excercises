//functions
function Person () {
    this.name =  'malone'
}
const person1 = new Person();
console.log(Person.prototype);
Person.prototype.age = 20;
console.log(Person.prototype);

Person.prototype = {age: 50, gender: "male", name: 'malone'}
const person3 = new Person();
console.log(person3.age)

Person.prototype.age = 24;
console.log(Person.prototype)
console.log(Person.__proto__);
console.log(Person.prototype.age)
console.log(person3.__proto__)
console.log(person3.age)

const a = isNaN(9);
console.log(a)

const b = isNaN(4- 'hello');
console.log(b)












































