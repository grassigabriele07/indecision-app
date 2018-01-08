//car
//make
//model
//vin
//getDescription


// Setup constructuro to 

class Person {
    // funzione costruzione
    constructor(name = 'Anonymous', age = 0){
        // this.name = name || 'test';
        this.name = name;
        this.age = age;
    }

    getGretting(){
        // return this.name;
        return `Hi, I am ${this.name}!`;
    }

    getDescription(){
        // return this.name + ' is ' + this.age + ' years old';
        return `${this.name} is ${this.age} year(s) old.`
    }    
}

// estendere metodi di una class
class Student extends Person {

    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let desciption = super.getDescription();

        if(this.hasMajor()){
            desciption = desciption += ` Their major is ${this.major}`;
        }

        return desciption;
    }

}


// traveler -> person
// add support for homeLocation
// ovveride getGretting

class Traveler extends Person {

    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation
    }

    getGretting(){
        let gretting = super.getGretting();

        if(this.homeLocation){
            gretting += ` I am visiting form ${this.homeLocation}.`;  
        }

        return gretting;
    }

}

// const me = new Student('Gabriele Grassi', 27, 'Computer Science');
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());


const me = new Traveler('Gabriele Grassi', 27, 'Milano');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());