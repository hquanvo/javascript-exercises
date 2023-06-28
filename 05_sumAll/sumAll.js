const sumAll = function(first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second) || 
    first < 0 || second < 0) return "ERROR";
    let lower;
    let upper;
    if (first <= second) {
        lower = first;
        upper = second;
    } else {
        upper = first;
        lower = second;
    }

    let numberOfNums = upper - lower + 1;
    if (numberOfNums % 2) {
       return (upper + lower) * Math.floor(numberOfNums/2) + (upper + lower)/2;
    } else {
        return (upper + lower) * numberOfNums/2;
    }
};

// Do not edit below this line
module.exports = sumAll;
