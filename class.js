class Father{
    constructor(){
        this.place = 5.4;
    }
}
class Sons extends Father {
    constructor(name, age){
        super()
        this.name = name;
        this.age = age;
        this.default = "Good Person"
    }
    myFun(a, b){
        return a *b;
    }
}

console.log(new Sons().myFun(3, 3));
console.log(new Sons("Umor", 7));


