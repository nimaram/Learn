const num1: number = 50;
const num2: number = 110;
let resault: number;
let myName: string = "Nima";

function addAndGetResault(first: number, second: number) {
  if (typeof num1 != "number" && typeof num2 != "number") {
    throw new Error("Values must be number!")
  }
  return resault = first + second;
}

resault = addAndGetResault(num1, num2)
console.log(resault)


// object type

const AdminTemplate: object = {
  name: "majid",
  family: "majidi",
  age: 31,
  isBanned: false
}

const SecondAdminTemplate: {
  name: string;
  family: string;
  age: number;
  isBanned: boolean;
} = {
  name: "majid",
  family: "majidi",
  age: 31,
  isBanned: false
}

interface AdminTemplateTypes{
  name: string;
  family: string;
  age: number;
  isBanned: boolean;
}

const ThirdAdminTemplate: AdminTemplateTypes = {
  name: "majid",
  family: "majidi",
  age: 31,
  isBanned: false
}

const person: object = {
  name: "nimbit",
  languages: ["Persian","English"]
}




let Langs: string[];
Langs = ["Go"];

let Numbers: number[] = [250, 300, 400];

// union
let Union: (number | string)[] = ["string", 1];