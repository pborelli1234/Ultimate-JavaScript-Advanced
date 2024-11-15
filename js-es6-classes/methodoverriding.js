class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move shape');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log('draw circle');
    }

    // override the method
    move() {
        super.move();
        console.log('move circle');
    }
}

const c1 = new Circle('red', 8);