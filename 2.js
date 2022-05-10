let col = 4;
let row = 4;
let s = '';
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
        if (i === 1 || j === 1 || i === row || j === col) s += '*';
        else s += ' ';
    }
    s += '\n';
}
console.log(s);