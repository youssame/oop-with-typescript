// Dependency Inversion Principle
/*
high-level modules should not depend on low-level modules. Instead, both should depend on abstractions.
*/
class UserService {
    private database: MongoDB;

    constructor() {
        this.database = new MongoDB(); // Dependency on a concrete implementation
    }

    getUsers(): User[] {
        return this.database.query('SELECT * FROM users');
    }
}

class MongoDB {
    // Database implementation details
}


/*
In the above example, the UserService class depends directly on the MongoDB class, which is a concrete implementation. 
This violates the Dependency Inversion Principle because a high-level module (UserService) 
depends on a low-level module (MongoDB).

SOLUTION : 
To fix this violation, we need to introduce an abstraction and have both the high-level and low-level modules depend on it. 
Here's an updated version that adheres to the DIP:
*/
interface Database {
    query(query: string): any[];
}

class UserService {
    private database: Database;

    constructor(database: Database) {
        this.database = database; // Dependency injection through constructor
    }

    getUsers(): User[] {
        return this.database.query('SELECT * FROM users');
    }
}


class MongoDB implements Database {
    // Database implementation details
}
