var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.ssn, " ").concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person(1756452265, 'jhon', 'doe');
document.writeln(person.getFullName());
