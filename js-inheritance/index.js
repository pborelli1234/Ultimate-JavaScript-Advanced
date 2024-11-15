function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate shape');
}

function extend(Child, Parent) {    
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    //call shape constructor
    Shape.call(this, color);

    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw circle');
}

// override base method - polymorphism
Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this);

    console.log('duplicate circle');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function() {    
    console.log('duplicate square');
}

const shape = new Shape();
const c1 = new Circle(1, 'red');
const sq = new Square(10);

const shapes = [
    new Circle(),
    new Square()
]

for (let shape of shapes) {
    shape.duplicate();
}