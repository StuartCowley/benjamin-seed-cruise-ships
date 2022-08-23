
class Ship {
    constructor(startingPort, setSail) {
        this.startingPort = 'Dover';
    };
};

Ship.prototype.setSail = function (startingPort) {
    this.startingPort = startingPort;
}



module.exports = Ship;