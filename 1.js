let col = 6;
let row = 6;
let s = '';
for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        if (i == j || j == row - i - 1) s += '* ';
        else s += ' ';
    }
    s += '\n';
}
console.log(s);