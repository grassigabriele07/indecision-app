var nameVar = 'Gabriele';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Gabriele';
nameLet = 'Pippo';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);


// block scoping
const fullName = 'Andrew Mead';
let firstName;

if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);