// Function default parameter
function number(num1, num2=2){
    return num1 + num2;
}
console.log(number(5));


const firstName = "Sabbir";
const lastName = "Ahmed";
const fullName = `${firstName} ${lastName}`;
const multiLine =`
                    Name: Sabbir Ahmed
                    Father's name: Habibul Haque
                    Phone number: 01710195661`
console.log(multiLine);
class Persons{
    constructor(name, id, age){
        this.Name = name;
        this.Id = id;
        this.Age = age;
        this.schoolName = "Baitus Salam Madrasa"
    }
}
console.log(new Persons("sabbir", 2, 3))
console.log(new Persons("Mukit", 4, 5))