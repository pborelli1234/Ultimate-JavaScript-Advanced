// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('draw circle');
//     }
// }

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {
            console.log('move circle');
        }
    }

    // Instance Method
    draw() {
        console.log('draw circle');
    }

    // Static Method
    static parse(str) {
        console.log(str);
    }
}

const c1 = new Circle(10);