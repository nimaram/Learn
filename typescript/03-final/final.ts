// union types
type AnyType = number | string;
type Posted = "posted";
type Draft = "draft";
type PostText = "posted" | "draft";

function combine(first: number | string, second: number | string) {
  let resault: any;
  if (typeof first == "number" && typeof second == "number") {
    resault = first + second
  }
  else {
    resault = first.toString() + second.toString()
  }
  return resault
}

const combinedAge = combine(200, 500)
const combinedName = combine("majid", "abbas")

console.log(combinedAge, combinedName)

console.log(+"25" + +"41")

function checkStatus(status: PostText ) {
  if (status == "draft") {
      console.log("drafted")
  }
  else if (status == "posted") {
      console.log("posted")
  }
  else {
    throw new Error("give status as a correct format")
  }
}
checkStatus("posted")

const descTerminal: AnyType = "anything...";


// void
// defining return value type
function divine(n1: number, n2: number): number {
  const resault = n1 / n2;
  return resault;
}
console.log(divine(10, 4))

let myFunction: Function;
myFunction = (a: number): number => a * a
console.log(myFunction(5))

let myFunction2: (b: string) => string;
myFunction2 = (b) => b + " s";

console.log(myFunction2("toy"))
