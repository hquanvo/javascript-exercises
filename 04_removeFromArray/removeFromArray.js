const removeFromArray = function(arr, ...args) {
    const newArr = arr.filter(ele => !args.includes(ele));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
