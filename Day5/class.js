class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let janis = new Person("rhea");
let name = janis.getName();
console.log(name); 