// union types
function combine(first, second) {
    let resault;
    if (typeof first == "number" && typeof second == "number") {
        resault = first + second;
    }
    else {
        resault = first.toString() + second.toString();
    }
    return resault;
}
const combinedAge = combine(200, 500);
const combinedName = combine("majid", "abbas");
console.log(combinedAge, combinedName);
