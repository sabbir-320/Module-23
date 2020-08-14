// Destructure in object 3 way
const person = {
    name: "Usama",
    age: 20,
    relation: "single",
    address: "Dhaka",
    salary: 20000
}
console.log(person.salary, person.relation);

const nam = person.name
const add = person.address
console.log(nam, add);

const {age, name, salary, relation, address} = person;
console.log(name, age, relation, address, salary);

// destructure in array 
const arrayPerson = ["mukit", "sabbir", 32, 77]

const[a, , b, ...c] = arrayPerson;
console.log(a,b,c);

console.log(arrayPerson[2]);



