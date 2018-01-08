// arguments object - no longer bound with arrow functions

// const add = function(a, b){
//     console.log(arguments);
//     return a + b;
// }

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}


console.log(add(55, 1, 111));

const user = {
    name: 'Gabriele',
    cities: ['Milano', 'Varese', 'Como'],
    printPlacesLived(){
        // console.log(this.name);
        // console.log(this.cities);

        // this.cities.forEach(function(city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });

       const cityMessage = this.cities.map((city) => this.name + ' has lived in ' + city );
        return cityMessage;
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    // number - array of number
    // multiply - single number
    // multiply - return a new array where the number been multiplied

    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply(){
        const multipliedMessage = this.numbers.map((number) => this.multiplyBy * number);
        return multipliedMessage;
    }


};

console.log(multiplier.multiply());