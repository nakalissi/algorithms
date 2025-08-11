function search(list, query) {
    return list
        .filter(item => item.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) => a.localeCompare(b))
        .slice(0, 3) || [];
}
console.time("search");
console.log(search(['mobile', 'Mouse', 'moneypot', 'monitor', 'mousepaD'], 'D'));
console.timeEnd("search");

