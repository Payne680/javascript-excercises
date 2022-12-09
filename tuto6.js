// program to check if a variable is undefined or null

function checkVariable(variable) {

    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}

let newVariable;

checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);



let name = 'Smith';
{
    
    let name = 'Jack';

    console.log(name); 
}
console.log(name);

class Person {
    constructor(name){
        this.name = name;
    }
}


const person1 = new Person('Smith');
const person2 = new Person('Jack');
console.log(person1.name)
