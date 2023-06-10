// The Single Responsibility Principle
/*
    A class should do one thing and therefore it should have only a single reason to change
*/

// Create a Book Class
class Book {
    constructor(public name: string, public isbn: string, public pirce: number) {}
}


// Create an invoice class for a book with print and saveToFile methods
class Invoice {
    constructor(public book: Book, public qte: number, public discount: number, public taxes: number) {}
    
    calculateTotal(): number {
        return (this.book.pirce * this.qte) + this.taxes - this.discount;
    }


    // print and saveToFile violate the SRP 
    print() {
        console.log(
            {
                Book: this.book,
                Quantity: this.qte,
                Discount: this.discount,
                Taxes: this.taxes
            }
        )
    }

    saveToFile() {
        // Save the invoice in a PDF file ...
    }
}

// Solution is create a InvoicePrinter and In InvoicePersistence classes
class InvoicePrinter {
    constructor(invoice: Invoice) {}
    print() {
        //....
    }
}
class InvoicePersistence {
    constructor(invoice: Invoice) {}
    persist() {
        //....
    }
}
