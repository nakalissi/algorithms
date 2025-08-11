function fat(x) {
    console.log("Calculando fatorial de: " + x);
    
    if (x === 1) {
        return 1;
    } else {
        return x * fat(x - 1);
    }
}

console.log(fat(5)); // 120
