// function hello() {
//     console.log("Hello World!");
// }

// // Error: Duplicate function implementation.
// function hello(name: string) {
//     console.log("Hi", name);
// }

// hello();
// hello("Synechron");

// -------------------------------------------------------
function hello(): void;
function hello(name: string): void;

function hello(...args: string[]) {
    if (args.length === 0)
        console.log("Hello World!");
    else if (args.length === 1)
        console.log(`Hello ${args[0]}`);
    else
        throw new Error("Invalid Number of Arguments...");
}

hello();
hello("Synechron");
// hello("Synechron", "Pune");         // Compile Time Error