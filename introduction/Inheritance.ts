// A class can derive its methods and properties from another class

// BASE CLASS / SUPER CLASS
class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`What's for dinner?`);
    }

    speak() {
        console.log(`My name is ${this.name}, I am ${this.age} years old`);
    }
}

// SUBCLASS
class Chef extends Person {
    occupation: string;
  
    constructor(name:string, age:number, occupation: string){
      super(name, age)
      this.occupation = occupation;
    }
    
    // Overriding
    speak(): void {
      console.log(`I am a ${this.occupation}`);
    }
  
    cook() {
      console.log(`I am cooking`);
    }
  }