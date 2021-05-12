const num1 = 50;
const num2 = 110;
let resault;
function addAndGetResault(first, second) {
    if (typeof num1 != "number" && typeof num2 != "number") {
        throw new Error("Values must be number!");
    }
    return resault = first + second;
}
resault = addAndGetResault(num1, num2);
console.log(resault);
