// HTMLElement - click - prototype - focus
// HTMLSelectElement - array of items [1, 2, 4]
// addItem - removeItem
function HTMLElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HTMLElement.prototype.focus = function() {
    console.log('focused');
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

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const select = new HTMLSelectElement([1, 2, 7, 4]);
console.log(select);

