const num1 = 50;
const num2 = 110;
let resault;
let myName = "Nima";
function addAndGetResault(first, second) {
    if (typeof num1 != "number" && typeof num2 != "number") {
        throw new Error("Values must be number!");
    }
    return resault = first + second;
}
resault = addAndGetResault(num1, num2);
console.log(resault);
// object type
const AdminTemplate = {
    name: "majid",
    family: "majidi",
    age: 31,
    isBanned: false
};
const SecondAdminTemplate = {
    name: "majid",
    family: "majidi",
    age: 31,
    isBanned: false
};
const ThirdAdminTemplate = {
    name: "majid",
    family: "majidi",
    age: 31,
    isBanned: false
};
const person = {
    name: "nimbit",
    languages: ["Persian", "English"]
};
let Langs;
Langs = ["Go"];
let Numbers = [250, 300, 400];
// union
let Union = ["string", 1];
// tuple object
const myTuple = ["hello", "make a good day!"];
// enum
var Friend;
(function (Friend) {
    Friend["NAME"] = "abbas";
    Friend[Friend["AGE"] = 20] = "AGE";
})(Friend || (Friend = {}));
;
const user = {
    name: "ali",
    age: 22,
    hisNiceFriend: Friend.NAME
};
