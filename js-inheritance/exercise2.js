function HTMLElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HTMLElement.prototype.focus = function() {
    console.log('focused');
}

HTMLElement.prototype.render = function() {
    console.log('render element');
}


function extend(Child, Parent) {
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
}

const htmlelement = new HTMLElement();
console.log(htmlelement);


function HTMLSelectElement(items = []) {
    this.items = items;
    
    this.addItem = function(item) {
        this.items.push(item);
    };

    this.removeItem = function(item) {
        const index = this.items.indexOf(item);
        console.log('remove item ' + index);
        this.items.slice(index, 1);
    };
}

extend(HTMLSelectElement, HTMLElement);

HTMLSelectElement.prototype.render = function() {
    return `
<select>${this.items.map(item => `
    <option>${item}</option>`).join('')}
</select>`;
}

const renderItem = item => `<option>${item}></option>`;

function HTMLImgElement(src) {
    this.src = src;
}

HTMLImgElement.prototype.render = function() {
    return `<img src="${this.src}" />`;
}

const elements = [
    new HTMLSelectElement([1, 2, 7, 8]),
    new HTMLImgElement('http://testimage')
];

for (let element of elements)
   console.log(element.render());