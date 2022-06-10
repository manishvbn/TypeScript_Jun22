class Control {
    focus(): string {
        return "The control is in focus...";
    }
}

class SelectableControl {
    select(): string {
        return "The control is selected...";
    }
}

// // Classes can only extend a single class.
// class Button extends Control, SelectableControl { }

class Button { }
interface Button extends Control, SelectableControl { }

applyMixins(Button, [Control, SelectableControl]);

const button = new Button();
console.log(button.focus());
console.log(button.select());

function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null)
            );
        });
    });
}