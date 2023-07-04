const findTheOldest = function(people) {
    oldestAge = 0;
    oldexIndex = 0;
    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        if (!("yearOfDeath" in person)) {
            person["yearOfDeath"] = new Date().getFullYear();
        }
        let age = person["yearOfDeath"] - person["yearOfBirth"]; 
        if (age > oldestAge) {
            oldestAge = age;
            oldexIndex = i;
        }
    }
    return people[oldexIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
