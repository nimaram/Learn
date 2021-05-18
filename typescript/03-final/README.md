# Typescript 
## 03-final 
**Final**

- what is unions?
  - used for making ```or``` with ```|``` in defining
- how make with literal types in typescript:
  - ```javascript
    admin: "notAdmin" | "yesAdmin" ,
    ```  
- types is good thing to create our custom types:
  - ```javascript
    type Any = string | number;
    type Post = "posted" | "drafted";
    ```
- function types:
  - ```javascript
    let myFunction: Function;
    myFunction = (a: number): number => a * a

    let myFunction2: (b: string) => string;
    myFunction2 = (b) => b + " s";

  - or we can use type void in non-returning value 
- type never in functions:
  - never raturn a/an object or variable
  - simply used for generating errors