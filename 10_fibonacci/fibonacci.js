const fibonacci = function(times) {
     if (times <= 1){
        return times;
     }
     return fibonacci(times - 1) + fibonacci(times - 2);
};

// Do not edit below this line
module.exports = fibonacci;
