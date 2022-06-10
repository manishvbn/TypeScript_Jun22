// Enum allow us to define a set of named constants. 
// Using enum, we can make it easier to document intent, or create a set of distinct cases.

// function Open(mode: string) {
//     console.log(`File Opened in "${mode}" mode`);
// }

// function Open(mode: string) {
//     switch (mode) {
//         case "Read":
//         case "Write":
//         case "ReadWrite":
//             console.log(`File Opened in "${mode}" mode`);
//             break;
//         default:
//             throw new Error(`Wrong File Mode`);
//     }
// }

// Open("Read");
// Open("Write");
// Open("ReadWrite");
// Open("Manish");

// -----------------------------------------------------------

// enum Mode { Read, Write, ReadWrite }
// enum Mode { Read = 10, Write = 20, ReadWrite }
enum Mode { Read = "Read", Write = "Write", ReadWrite = "ReadWrite" }
// enum Mode { Read = "Read", Write = 20, ReadWrite = "ReadWrite" }
// enum Mode { Read = "Read", Write = 20, ReadWrite }

function Open(mode: Mode) {
    console.log(`File Opened in "${mode}" mode`);
}

Open(Mode.Read);
Open(Mode.Write);
Open(Mode.ReadWrite);

// -----------------------------------------

function f1(x: number) {

}

function f2(x: number | string) {

}

function f3(x: (number | string)[]) {

}

function f4(x: [number, string]) {

}