const Ship = require("./Ship");


class Port {
    constructor(name) {
        this.name = name;
        this.ships = [];
    };

    addShip(ship) {
        this.ships.push(ship)
    }

    removeShip(ship) {
        const shipIndex = this.ships.indexOf(ship);
        this.ships.splice(shipIndex, 1);

        // this.ships.splice(ship, 1)
        // added const shipIndex = this.ships.indexOf(ship); despite test passing
        

    }
};
 
// store multiple items on a Port object (create variable), 
// and the ability to add to that collection of items (.push to append to end of array).

// .pop remove item from an array

module.exports =  Port;