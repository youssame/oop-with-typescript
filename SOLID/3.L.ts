// Liskov Substitution Principle
/*
Subclasses should be substitutable for their base classes. 
*/

class Bird {
    //...
    eat() {
        //...
    }
    fly() {
        //...
    }
}

class Eagle extends Bird {
    //...
}
const eagle: Bird = new Eagle();
eagle.eat();
eagle.fly();

class Penguin extends Bird {
    //..
}

const penguin = new Penguin();
penguin.fly();//WRONG


/*

 
                    <------ Eagle
 Bird (fly, eat)   
                    <------ Penguin


 Bird(eat)          <------ FlyableBird (fly) <------------ Eagle
                    <------ Penguin
*/