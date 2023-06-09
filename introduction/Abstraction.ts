// Simplify Reality

abstract class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log(this.name);
    }

    abstract find(name: string): Person;
}

class Employee extends Person {
    empCode: number;
    constructor(name: string, empCode: number) {
        super(name);
        this.empCode = empCode;
    }

    find(name: string): Person {
        return new Employee(name, 1234);
    }
}

let emp: Person = new Employee("Youssef", 12345);
emp.display();

let emp2 = emp.find("GOGO");