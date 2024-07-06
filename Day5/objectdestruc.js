let person = {
    firstName: 'Janis',
    lastName: 'Rhea',
    middleName: 'J',
    currentAge: 21
};

let { firstName,  lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName); 
