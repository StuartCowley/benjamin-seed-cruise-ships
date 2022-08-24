
class Ship {
    constructor(currentPort) {
        this.currentPort = currentPort;
    };

    setSail() {
        this.currentPort = null;
    }
    // see dependency inversion
    dock(port) {
        this.currentPort = port;
    }
};
// a falsy value is false, 0, null, NaN etc


module.exports = Ship;