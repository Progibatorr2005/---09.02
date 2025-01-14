function repeat(a: string, b: number): void {
    let z = "";
    for (let i = 0; i < b; i++) {
        z += a;
    }
    console.log(z);
}

repeat('sometext', 2); // sometextsometext
repeat('wo', 3);       // wowowo

