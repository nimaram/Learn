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
console.log(+"25" + +"41");
function checkStatus(status) {
    if (status == "draft") {
        console.log("drafted");
    }
    else if (status == "posted") {
        console.log("posted");
    }
    else {
        throw new Error("give status as a correct format");
    }
}
checkStatus("posted");
const descTerminal = "anything...";
// void
// defining return value type
function divine(n1, n2) {
    const resault = n1 / n2;
    return resault;
}
console.log(divine(10, 4));
let myFunction;
myFunction = (a) => a * a;
console.log(myFunction(5));
let myFunction2;
myFunction2 = (b) => b + " s";
console.log(myFunction2("toy"));
