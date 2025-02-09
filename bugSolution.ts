function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Correctly handles the array
console.log(greeter(user.join(" "))); // Another way to solve the problem