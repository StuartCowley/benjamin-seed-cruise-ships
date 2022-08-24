/* globals describe it expect */
const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js')
// instantiated = creation of an object
describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    // dependency inversion - an object can depend on other objects
    // but shouldn't know what they are e.g. Ship doesnt know it's a port object
    // making the code more modular
    it('has a starting port', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
    });

    it('set sail from a port', () => {
        const ship = new Ship(Port);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    })

    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);

        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    })

});
