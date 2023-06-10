// Open-Closed Principle
/*
Classes should be open for extension and closed to modification.
Modification => changing the code of an existing class 
extension => adding new functionality
*/
class Invoice {}

interface InvoicePersistence {
    public save(Invoice invoice): void;
}

// We change the type of InvoicePersistence to Interface and add a save method. 
// Each persistence class will implement this save method.

class DatabasePersistence implements InvoicePersistence {
    public save(Invoice invoice): void {
        // Save to DB
    }
}

class FilePersistence implements InvoicePersistence {
    public save(Invoice invoice): void {
        // Save to file
    }
}
/*
Now our persistence logic is easily extendable. 
If our boss asks us to add another database and have 2 different types of databases like MySQL and MongoDB, 
we can easily do that. 
*/