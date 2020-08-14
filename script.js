// Function default parameter
function number(num1, num2 = 2) {
    return num1 + num2;
}
console.log(number(5));

// I can use ${} into  `` what i show output
const firstName = "Sabbir";
const lastName = "Ahmed";
const fullName = `${firstName} ${lastName} ${5+ 5 + 5}`;
console.log(fullName);

// I can use multiline in programming without + \n
const multiLine =`
                    Name: Sabbir Ahmed
                    Father's name: Habibul Haque
                    Phone number: 01710195661`
console.log(multiLine);

