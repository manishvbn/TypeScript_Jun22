// What should we do to use Object.values method in TypeScript?

const person = { id: 1, name: "Manish", city: "Pune" };

console.log(Object.values(person));

// Solution: Change the lib section in tsconfig.json file to include ES2017
