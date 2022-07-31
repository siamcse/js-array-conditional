var fruits = ['Apple', 'Banana', 'Orange',];

// banana index
var bananaIndex = fruits.indexOf('Banana');
console.log("\n\nBanana index number: ", + bananaIndex);

//replace banana with mango
fruits[bananaIndex] = 'Mango';
console.log("Replace Banana");
console.log(fruits);

//remove orange and add watermelon
fruits.pop();
fruits.push('Watermelon');
console.log("remove orange and add watermelon")
console.log(fruits);

console.log("\n\n")