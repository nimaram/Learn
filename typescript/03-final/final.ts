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


function sayNallehSarSahar(track1: number, setTrack2: (id: number) => void) {
  let res: any;
  res = setTrack2(track1);
}

sayNallehSarSahar(1, (id) => {
  console.log("naleeeeeeeeeeh");
  console.log(id);
})


let havij: unknown; /* unknown */
let mooz: unknown;  /* unknown */
let piaz: unknown;  /* unknown */

piaz = "piaz";
console.log(typeof piaz);





function bedeError(mess: string, code: number): never {
  throw { message: mess, errorCode: code }
}

// bedeError("moshkel", 100)




// some elements

const buttonRegister: HTMLElement = document.getElementById("register")!;

buttonRegister.addEventListener("click", () => {
  console.warn("You Clicked!")
})

function get(data: any) {
  console.log(data)
}

let f: unknown;

// generics


function getData<V>(name: V): V {
  return name;
}

type magicFunc = <type>(data: type) => type;

let res = getData<string>("hello typescript");
let res2 = getData<AnyType>(5);
console.log(res, res2)


// working more classes
interface FoodInter{
  name: string;
  comments: object[];
}


const Food: FoodInter = {
  name: "ghorma sabzi",
  comments: [{id: 1, body : "nice food"}]
}

interface successReturn{
  create_user(): string;
}

let users: object[];
class User implements successReturn{
  protected username: string;
  public about: string;
  readonly password: string;
  private comments:  undefined | object[]

  constructor(usern: string, ab: string, password: string) {
    this.username = usern
    this.about = ab
    this.password = password
    this.comments = undefined
  }

   create_user(){
     users.push({
       username: this.username,
       about: this.about,
       password: this.password,
       comments: this.comments
      })
      return "success"
  }
}

let user1 = new User("majidOnline", "majid is good boy", "123")
let user2 = new User("majidOnline2", "majid is good boy", "123456")

console.log(user1, user2)


const bye = <v extends {name: string}>(data: v) => {
  console.log(data)
}
function byePlus<T>(data: T): T {
  return data;
}
  
bye({ name: "majid", age: 20 })

interface bb<RIP>{
  uid: number;
  yui: RIP;
}

const b: bb<object> = {
  uid: 1,
  yui: {}
}

const c: bb<string[]> = {
  uid: 1,
  yui: ["test"]
}