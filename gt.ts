class Person{
    ssn;
    firstName;
    lastName;
    constructor(ssn,firstName,lastName)
    {
        this.ssn=ssn;
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFullName(){
        return `${this.ssn} ${this.firstName} ${this.lastName}`;
    }
}
let person=new Person(1756452265,'jhon','doe');
console.log(person.getFullName());