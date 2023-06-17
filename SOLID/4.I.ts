// Interface Segregation Principle
/*
    No code should be forced to depend on methods it does not use.
*/

interface Charger {
    TypeC();
    NormalUSB();
    CableX();
}

class SamsungCharger implements Charger {
    TypeC() {
        throw new Error("Method not implemented.");
    }
    NormalUSB() {
        throw new Error("Method not implemented.");
    }
    CableX() {
        throw new Error("Method not implemented.");
    }

}

// Solution: Segregate the interface
interface ITypeC{}
interface INormalUSB{}
interface ICableX{}

class SamsungCharger_ implements ITypeC {

}