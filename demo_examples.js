/* JavaScript code snipets */

/* hello world */

alert('Hi Folks!');
console.log('Hi Folks');

/* Variables */

var x; // defines the variable x, the special value “undefined” (not to be confused with an undefined value) is assigned to it by default
var y = 2; // defines the variable y and assigns the value of 2 to it


/* Functions */
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

/* Variadic function */

var sum = function() {
    var i, x = 0;
    for (i = 0; i < arguments.length; ++i) {
        x += arguments[i];
    }
    return x;
}
sum(1, 2, 3); // returns 6

/* Lamda functions */
function adder(x) {
    return function (y) {
        return x + y;
    };
};
add5 = adder(5);
add5(1) == 6
