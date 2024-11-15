const _items = new WeakMap();

class Stack {
    constructor(items = []) {
        _items.set(this, items);
    }

    push(item) {
        _items.get(this).push(item);
    }

    pop() {
        const items =  _items.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty.');

        return items.pop();
    }

    peek() {
        const items =  _items.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty.');

        return items[items.length - 1];
    }
    
    get count() {
        return _items.get(this).length;
    }
}

const st = new Stack();