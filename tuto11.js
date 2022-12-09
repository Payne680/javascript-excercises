//program to loop through an object 
const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

const person = {
    gender: 'male'
}

// inheriting property
student.__proto__ = person;

for (let key in student) { 
    let value;

    // get the value
    value = student[key];

    console.log(key + " - " +  value);
} 
