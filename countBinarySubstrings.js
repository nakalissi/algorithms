function fn(s) {
    let prev = 0, curr = 1, count = 0;
    for (let i = 0; i < s.length; i++) {
        console.log(s[i] === s[i - 1], s[i], s[i - 1]);
        
        if (s[i] === s[i - 1]) {   
            curr++;
            // console.log(`Current count: ${curr}`);
        } else {
            count += Math.min(prev, curr);
            prev = curr;
            curr = 1;
            // console.log(`Count updated: ${count}`);

        }
        // console.log(Math.min(prev, curr));
    }
    return count + Math.min(prev, curr);
    
}
console.log(fn("00110011")); // Output: 6
