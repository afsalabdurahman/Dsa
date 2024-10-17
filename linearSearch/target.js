function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}


let arr = [4, 2, 10, 5, 8];
let target = 5;
console.log(linearSearch(arr, target)); 