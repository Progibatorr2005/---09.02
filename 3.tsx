function getHiddenCard(num: string, stars?: number = 4) {
    const a = '*'.repeat(stars);
    const b = num.slice(-4);
    return a + b;
}

console.log(getHiddenCard('1234567812345678', 2)); // "**5678"
console.log(getHiddenCard('1234567812345678', 3)); // "***5678"
console.log(getHiddenCard('1234567812345678'));    // "****5678"
console.log(getHiddenCard('2034399002121100', 1)); // "*1100"