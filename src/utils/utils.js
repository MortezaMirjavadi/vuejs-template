export function UniqueItems(arr, key) {
    let seen = new Set();
    return arr.filter(item => {
        let k = key(item);
        return seen.has(k) ? false : seen.add(k);
    });
}
