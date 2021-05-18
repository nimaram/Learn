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