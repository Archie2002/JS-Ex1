let m = 9;
let n = Math.abs(m / 2);
let s = '';
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}
for (i = n + 1; i < m; i++) {
    for (j = 0; j < m - i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);