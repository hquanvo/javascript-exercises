const fibonacci = function(val) {
    let processed = 0;
    if (typeof val === 'string') processed = parseInt(val);
    else processed = val;
    if (processed < 0) return "OOPS";
    if (processed === 1 || processed === 2) return 1;
    else return fibonacci(processed-1) + fibonacci(processed-2);
};

// Do not edit below this line
module.exports = fibonacci;
