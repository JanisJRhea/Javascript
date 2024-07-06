let john = {name: 'John Doe'},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Drucker'};

let userRoles = new Map();
userRoles.set(john, 'admin');
userRoles.set(lily, 'editor');
userRoles.set(peter, 'subscriber');

console.log(userRoles.get(john));
