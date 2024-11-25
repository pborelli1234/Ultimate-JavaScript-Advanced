//Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw circle in constructor.');
    }
}

const another = new Circle(7);

console.log(another.radius);