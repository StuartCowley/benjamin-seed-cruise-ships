const Port = require('../src/Port.js')

describe('Port', () => {
    describe('with ports', () => {
        let port;
        let ship;
        let titanic;
        let queenMary;
    })

    beforeEach(() => {
         port = new Port('Dover');
         ship = jest.fn();
         titanic = jest.fn();
         queenMary = jest.fn();
    })

    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('port object has a name', () => {
        expect(port.name).toEqual('Dover');
    });

    it('can add a ship', () => {
        port.addShip(ship);
        expect(port.ships).toContain(ship);
    })

    it('can remove a ship', () => {
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    })
});