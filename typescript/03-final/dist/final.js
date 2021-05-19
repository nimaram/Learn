"use strict";
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
function sayNallehSarSahar(track1, setTrack2) {
    let res;
    res = setTrack2(track1);
}
sayNallehSarSahar(1, (id) => {
    console.log("naleeeeeeeeeeh");
    console.log(id);
});
let havij;
let mooz;
let piaz;
piaz = "piaz";
console.log(typeof piaz);
function bedeError(mess, code) {
    throw { message: mess, errorCode: code };
}
const buttonRegister = document.getElementById("register");
buttonRegister.addEventListener("click", () => {
    console.warn("You Clicked!");
});
function get(data) {
    console.log(data);
}
let f;
function getData(name) {
    return name;
}
let res = getData("hello typescript");
let res2 = getData(5);
console.log(res, res2);
const Food = {
    name: "ghorma sabzi",
    comments: [{ id: 1, body: "nice food" }]
};
let users;
class User {
    constructor(usern, ab, password) {
        this.username = usern;
        this.about = ab;
        this.password = password;
        this.comments = undefined;
    }
    create_user() {
        users.push({
            username: this.username,
            about: this.about,
            password: this.password,
            comments: this.comments
        });
        return "success";
    }
}
let user1 = new User("majidOnline", "majid is good boy", "123");
let user2 = new User("majidOnline2", "majid is good boy", "123456");
console.log(user1, user2);
const bye = (data) => {
    console.log(data);
};
function byePlus(data) {
    return data;
}
bye({ name: "majid", age: 20 });
const b = {
    uid: 1,
    yui: {}
};
const c = {
    uid: 1,
    yui: ["test"]
};
//# sourceMappingURL=final.js.map