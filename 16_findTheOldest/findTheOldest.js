const findTheOldest = function(people) {
    let oldest = people[0];
    function getAge(person) {
        if (person.yearOfDeath === undefined) {
            return new Date().getFullYear() - person.yearOfBirth;
        } else {
            return person.yearOfDeath - person.yearOfBirth;
        }
    }
    for (let i = 1; i < people.length; i++) {
        if (getAge(oldest) < getAge(people[i])) {
            oldest = people[i];
        }
    }
    return oldest;
}
// Do not edit below this line
module.exports = findTheOldest;
