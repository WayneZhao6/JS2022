'use strict';

const wayne = [
    'Wayne',
    'Zhao',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = wayne.length - 1; i >= 0; i--) {
    console.log(i, wayne[i]);
}

let dice = Math.trunc(Math.random() * 6);
console.log(dice);
while (dice !== 6) {
    console.log(`You rolled a ${dice} 🎲`);
    dice = Math.trunc(Math.random());
}


/* 
for (let i = 1; i < 11; i++) {
    console.log(`Lifting weights repetition ${i} 🏋️‍♀️`)
}

for (let i = 1; i < 11; i++) {
    console.log(`Lifting weights repetition 🏋️‍♀️`)
}

const years = [1991, 2009, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);
*/

/*
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function (mass, height) {
        this.BMI = mass / height ** 2;
        return this.BMI;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

if (mark.calcBMI(mark.mass, mark.height) > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.BMI}) is higher than john's (${john.BMI})`);
} else if (mark.calcBMI(mark.mass, mark.height) < john.calcBMI()) {
    console.log(`John's BMI (${john.BMI}) is high than Mark's (${mark.BMI})`)
} else {
    console.log(`John's BMI (${john.BMI}) is equal to Mark's`)
}
*/

/* const wayne = {
    firstName: 'Wayne',
    lastName: 'Zhao',
    birthYear: 2020,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Thomas'],

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    calcDriverLicense: function () {
        this.hasDriverLicense = 2037 - this.birthYear > 18 ? true : false;
        return this.hasDriverLicense;

    }
};

console.log(wayne.calcAge())

console.log(`${wayne['firstName']} is a ${wayne.calcAge()}-year old ${wayne.job}. and he has ${wayne.calcDriverLicense() ? 'a' : 'no'} driver's license`)
*/

/* 
const wayne = {
    firstName: 'Wayne',
    lastName: 'Zhao',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Thomas']
};

console.log(wayne);

console.log(wayne.lastName);
console.log(wayne['lastName']);

const nameKey = 'Name';
console.log(wayne['first' + nameKey]);
console.log(wayne['last' + nameKey]);

const interestedIn = prompt('what do you wnat to know about wayne? choose between firstName, lastName, age, job, and friends');
console.log(wayne[interestedIn]);

if (wayne[interestedIn]) {
    console.log(wayne[interestedIn]);
} else {
    console.log(`wrong request ${interestedIn}`);
}

wayne.location = 'Fremont';
wayne['twitter'] = '@waynezhao';
console.log(wayne);

console.log(`Wayne has ${wayne.friends.length} friends, and his best friends is called ${wayne['friends'][0]}`);
console.log(`Wayne has ${wayne.friends.length} friends, and his best friends is called ${wayne.friends[0]}`);

*/


/* 
const friends = ['Michael', 'Steven', 'Peter']
const friends1 = new Array('Michael', 'Steven', friends[2], friends)
const arrayLength = friends1.length
console.log(friends1)


const calcTip = bill => (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill;
console.log(calcTip(100));

const tips = [calcTip(125), calcTip(555), calcTip(44)];
console.log(tips);

const totals = [125 + calcTip(125), 555 + calcTip(555), 44 + calcTip(44)];
console.log(totals);
*/

/* 
const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAvg(85, 54, 41);
console.log(avgDolphins);
const avgKoalas = calcAvg(23, 34, 27);
console.log(avgKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins > 2 * avgKoalas) {
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas > 2 * avgDolphins) {
//         console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
//     }
// }

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log("No team wins ...")
    }
}

checkWinner(avgDolphins, avgKoalas);
*/

/*
function logger() {
    console.log('My name is Wayne');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

let juice = fruitProcessor(5, 0);
console.log(juice);
console.log(fruitProcessor(5, 0));
*/
