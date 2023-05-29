const arr1 = ["1", "2", "3", "4"];
let [b = "bbb", c = "ccc"] = arr1.slice(1, arr1.length);
console.log(b, c)