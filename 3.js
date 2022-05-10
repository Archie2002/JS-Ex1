let m = 15;
let n = m / 2;
let s = '';
for (let i = Math.round(-1 * n); i < Math.round(n); i++) {
    for (let j = 0; j < m; j++) {
        if (
            Math.abs(i) == j ||
            Math.abs(i) + j == m - 1 ||
            i + j == m - 1 ||
            i + j == 0
        )
            s += '*';
        else s += ' ';
    }
    s += '\n';
}
console.log(s);