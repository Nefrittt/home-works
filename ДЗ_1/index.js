console.log("Hello World!");

let num = 23; //Number
let str = "string"; //String
let bool = false; // Boolean
let empty = null; // Null, но выдаст тип object, потому что null это объект с незаданной структурой
let obj = {}; // Object
let notFind = undefined; // Undefined
let id = Symbol("id"); // Symbol
let bigInt = 100n;
console.log(num, str, bool, empty, obj, notFind, id, bigInt);
console.log(
   typeof num,
   typeof str,
   typeof bool,
   typeof empty,
   typeof obj,
   typeof notFind,
   typeof id,
   typeof bigInt
);

const isLanguage = false;
console.log((isLanguage = true)); // Выдаст ошибку, переменные объявленные через const нельзя изменять

let personLet = {
   name: "Daniil",
   age: "29",
};
const personConst = {
   name: "Ivan",
   age: "27",
};
var personVar = {
   name: "Marina",
   age: "21",
};

personLet = "string";
console.log(personLet); // Ошибки не будет, переменная объявлена через let
personConst = 24;
console.log(personConst); // Выдаст ошибку, переменные объявленные через const нельзя изменять(За исключением изменения свойств объекта)
personVar = false;
console.log(personVar); // Ошибки не будет, переменная объявлена через var
