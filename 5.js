let n = 5;
let string = '';
// Reversed pyramid pattern
for (let i = 0; i < n; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        string += ' ';
    }
    // printing numbers
    for (let k = n - i; k >= 1; k--) {
        string = string + k + ' ';
    }
    string += '\n';
}
//pyramid pattern
for (let i = 0; i < n; i++) {
    // printing spaces
    for (let j = 0; j > n - i; j++) {
        string += ' ';
    }
    // printing numbers
    for (let k = 1; k <= i; k++) {
        string = string + k + ' ';
    }
    string += '\n';
}
console.log(string);