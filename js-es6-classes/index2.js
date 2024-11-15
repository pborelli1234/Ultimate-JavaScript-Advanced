// make members private
const _radius = Symbol();
const _move = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }

    draw() {
        console.log('draw circle ' + this[_radius]);
    }
}

const c1 = new Circle(7);