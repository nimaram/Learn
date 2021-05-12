const num1: number = 50;
const num2: number = 110;
let resault: number;

function addAndGetResault(first: number, second: number) {
  if (typeof num1 != "number" && typeof num2 != "number") {
    throw new Error("Values must be number!")
  }
  return resault = first + second;
}

resault = addAndGetResault(num1, num2)
console.log(resault)