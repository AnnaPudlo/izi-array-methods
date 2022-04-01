const users = [
    {
        name: 'Bob',
        age: 27,
        address: {
            country: 'USA',
            city: 'LA'
        },
        marks: [2, 3, 5, 4, 2, 3, 1, 5]
    },
    {
        name: 'July',
        age: 21,
        address: {
            country: 'Ukraine',
            city: 'Kiev'
        },
        marks: [4, 4, 5, 4, 3, 4, 3, 5]
    },
    {
        name: 'Monya',
        age: 15,
        address: {
            country: 'Ukraine',
            city: 'Odessa'
        },
        marks: [5, 1, 5, 1, 5, 1, 5, 1]
    },
    {
        name: 'Vsevolod',
        age: 19,
        address: {
            country: 'Ukraine',
            city: 'Lviv'
        },
        marks: [3, 4, 5, 3, 1, 2, 4, 6]
    },
];

// 1. Create variable isNotAdult and get into it student object with age < 18:
const isNotAdult = users.find(function(e) {return e.age < 18});
console.log('isNoteAdult = ', isNotAdult);

/* This solution works if we need to find only one person. 
   In other case we should use something like this:

    const isNotAdults = users.filter(function(e) {return e.age > 18});
    console.log(isNotAdults); 
*/

// 2. Create a foreignStudents variable and get an array of non-Ukrainian students there:
const foreignStudents = users.filter(function(e) {return e.address.country !== 'Ukraine'});
console.log('foreignStudents = ', foreignStudents);

// 3. Get a new array of users. 
//    Each user should have a new boolean property isAdult
//    and new property averageMark with the user's average score.
const usersNew = users.map(function(user){
    user.isAdult = user.age < 18 ? false : true;
    user.averageMark = user.marks.reduce((acc,mark) => acc += mark, 0) / user.marks.length;
    return user;
});
console.log('usersNew =', usersNew);

// 4. Create an averageMark variable and get the average mark for all users
const averageMark = users.reduce(function(acc, user){
   return acc += user.marks.reduce((acc, mark) => acc += mark, 0) / user.marks.length;
}, 0) / users.length;

console.log('averageMark =', averageMark);

/* Other option: we already have usersNew with averageMark property for every user.
  
    const averageMark =  users.reduce((acc, user) => acc += user.averageMark, 0) / users.length;
    console.log('averageMark =', averageMark);
*/

// 5. Create a new variable adresses from the array of users 
// and return a new object with two fields:
//    1) countries - an array of user countries
//    2) cities -  an array of user cities.

const addresses = {
    countries: users.map((user) => user.address.country),
    city: users.map((user) => user.address.city)
}

console.log ('addresses =', addresses);

/* One more solution using reduce method:

    const addresses = users.reduce(function(acc, user) {
        acc.countries.push(user.address.country);
        acc.cities.push(user.address.city);
        return acc;
    }, {countries: [], cities: []}); 
    console.log ('addresses =', addresses);
*/


