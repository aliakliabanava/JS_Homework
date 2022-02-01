//Task 1
function Person(name, age) {
    this.name = name;
    var age = age;

    function getFormattedAge() {
        return age + " " + "лет";
    }

    this.showInfo = function () {
        console.log("Привет, меня зовут" + " " + name + ", мне" +  " " + getFormattedAge(age));
    }
}

function Employee(name, age, salary) {
    Person.apply(this, arguments);

    this.salary = salary;

    var personShowInfo = this.showInfo;
    this.showInfo = function (){
        personShowInfo();
        console.log("Моя зарплата" + " " + salary + "$");
        return this;
    }

}

var person1 = new Employee('Vasya', 35, 1000);
person1.showInfo();


//Task 2
function Person(name, age) {
    this.name = name;
    this._age = age;
}

Person.prototype._getFormattedAge = function () {
    return this._age + " " + "лет";
}

Person.prototype.showInfo = function (){
    console.log("Привет, меня зовут" + " " + this.name + ", мне" +  " " + this._getFormattedAge(this._age));
}



function Employee(name, age, salary) {
    Person.apply(this, arguments);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.showInfo = function (){
    Person.prototype.showInfo.apply(this);
    console.log("Моя зарплата" + " " + this.salary + "$");
}



var person1 = new Employee('Vasya', 35, 1000);
person1.showInfo();
