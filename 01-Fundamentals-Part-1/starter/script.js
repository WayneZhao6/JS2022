
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(`The bill is ${bill}, the tip is ${tip}, and the total value is ${bill + tip}`);
♾

/*
const day = 'sunday';

switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Engjy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');
*/

/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins > 100) {
    console.log('Dolphin team wins!');
} else if (scoreDolphins < scoreKoalas && scoreKoalas > 100) {
    console.log('Koala team winds!');
} else if (scoreDolphins === scoreKoalas && scoreKoalas > 100 && scoreDolphins > 100{
    console.log('It is a draw :D');
} else {
    console.log('No one wins the trophy');
}
*/

/*
let markWeight = 78;
let johnWeight = 88;
let markHeight = 1.8;
let johnHeight = 1.8;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higner than John's`);
} else {
    console.log(`John's BMI is higher than Mark's`);
}

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}
*/


/*
const firstName = 'Wayne';
const job = 'TPM';
const birthYear = 1986;
const year = 2037;

const jonas = "i'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const wayneNew = "I'm ${firstName}";
console.log(wayneNew);

console.log(`String
multiple
lines`)


console.log('')
/*


/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Zhao';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x += 4;
console.log(x)
*/