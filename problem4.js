var a = 9, b = 8, c= 9;

console.log("\n");

if(a==b && b!=c && c!=a)
    console.log("This is Isosceles");
else if(a!=b && b==c && c!=a)
    console.log("This is Isosceles");
else if(a!=b && b!=c && c==a)
    console.log("This is Isosceles");
else
    console.log("This is not Isosceles");

console.log("\n");
