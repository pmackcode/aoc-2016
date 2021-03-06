class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(coordinate) {
        return new Coordinate(this.x + coordinate.x, this.y + coordinate.y);
    }

    distanceFromOrigin() {
        return Math.abs(this.x) + Math.abs(this.y);
    }

    equals(coordinate) {
        return this.x === coordinate.x && this.y === coordinate.y;
    }
}

module.exports = {
    Coordinate
};