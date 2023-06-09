// Hiding data and complexity
/**
 * Encapsulation in object-oriented programming refers to restricting unauthorized access and mutation of specific 
 * properties of an object.
 */

class Pizza {
    static index: number = 3;

    public ingredients: string[];
    private _price: number;
    protected size: number;

    // getter
    get price(): number {
        if (this._price === undefined) throw 'The price is undefined';
        return this._price;
    }

    // setter
    set price(_price: number) {
        if (_price <= 0) throw 'The price can\'t be negative ';
        this._price = this.price;
    }
}

Pizza.index;
const p = new Pizza();
p.price = 1;
