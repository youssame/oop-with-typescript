// Multiple classes inherit from a parent and override a particular functionality
// The ability of a method or property to exist in different forms.

class A {
    name: string = "Class A"

    print() {
        console.log('I am class A')
    }
}

class B extends A {
    name: string = "Class B"

    print() {
        console.log('I am class B')
    }
}