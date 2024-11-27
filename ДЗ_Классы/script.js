// 1. Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия), rate
// (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет
// выводить зарплату работника. Зарплата - это произведение
// (умножение) ставки rate на количество отработанных дней
// days. И метод getFullName() - имя и фамиля работника.

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.days = days;
//     this.rate = rate;
//   }

//   getSalary() {
//     return this.rate * this.days + " - Worker's salary of month";
//   }
//   getFullName() {
//     return this.surname + " " + this.name;
//   }
// }

// const worker = new Worker("Daniil", "Pechkin", 4800, 28);

// console.log(worker.getSalary());
// console.log(worker.getFullName());

// 2. Напишите новый класс Boss, этот класс наследуется от класса
// Worker и прошлого задания. Появляется новые свойство:
// workers - количество работников. И зарплата считается по
// другому: произведение (умножение) ставки rate на количество
// отработанных дней и на количество работников.

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.days = days;
//     this.rate = rate;
//   }

//   getSalary() {
//     return this.rate * this.days;
//   }
//   getFullName() {
//     return this.surname + " " + this.name;
//   }
// }

// class Boss extends Worker {
//   constructor(name, surname, rate, days, workers) {
//     super(name, surname, rate, days);
//     this.workers = workers;
//   }
//   getWorkersSalary() {
//     return super.getSalary() * this.workers;
//   }
// }

// const boss = new Boss("Alena", "Pechkina", 2700, 21, 6);
// console.log(boss.getWorkersSalary());

// 3. Модифицируйте класс Worker из предыдущей задачи
// следующим образом: для свойства rate и для свойства days
// сделайте и методы-сеттеры и методы-геттеры для их чтения.

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.days = days;
//     this.rate = rate;
//   }
//   get getRate() {
//     return this.rate;
//   }
//   get getDays() {
//     return this.days;
//   }
//   set setRate(rate) {
//     this.rate = rate;
//   }
//   set setDays(days) {
//     this.days = days;
//   }

//   getSalary() {
//     return this.rate * this.days;
//   }
//   getFullName() {
//     return this.surname + " " + this.name;
//   }
// }

// const worker1 = new Worker("Artem", "Mokshanov", 720, 19);
// worker1.rate = 4200;
// worker1.days = 14;
// console.log(worker1.rate);
// console.log(worker1.days);

// 4. Реализуйте класс MyString, который будет иметь следующие
// методы: метод reverse(), который параметром принимает
// строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же
// строку, сделав ее первую букву заглавной и метод ucWords,
// который принимает строку и делает заглавной первую букву
// каждого слова этой строки.

// class MyString {
//   reverse(str) {
//     return str.split("").reverse().join("");
//   }
//   ucFirst(str) {
//     return str.slice(0, 1).toUpperCase() + str.slice(1);
//   }
//   ucWords(str) {
//     let result = str.split(" ").map((el) => {
//       return this.ucFirst(el);
//     });
//     return result.join(" ");
//   }
// }

// const strManipulate = new MyString();
// console.log(strManipulate.reverse("water"));
// console.log(strManipulate.ucFirst("small"));
// console.log(strManipulate.ucWords("hello my friend"));

// 5. Реализуйте класс Validator, который будет проверять строки. К
// примеру, у него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или
// нет. Если является - возвращает true, если не является - то
// false. Кроме того, класс будет иметь следующие методы: метод
// isDomain для проверки домена, метод isDate для проверки
// даты и метод isPhone для проверки телефона.

// class Validator {
//   isEmail(email) {
//     let regex =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return regex.test(String(email).toLowerCase());
//   }
//   isDomain(domain) {
//     let regex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
//     return regex.test(String(domain).toLowerCase());
//   }
//   isDate(date) {
//     let regex = /^\d{1,2}[.-]\d{1,2}[.-]\d{4}$/;
//     return regex.test(String(date));
//   }
//   isPhone(number) {
//     let regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
//     return regex.test(String(number));
//   }
// }

// const validate = new Validator();
// console.log(validate.isEmail("bobliarsk@mail.ru"));
// console.log(validate.isDomain("delivery.cantata .ru"));
// console.log(validate.isDate("09.12.2004"));
// console.log(validate.isPhone("+7 909 293 97 95"));

// 6. Реализуйте класс Student (Студент), который будет
// наследовать от класса User, подобно тому, как это сделано в
// теоретической части урока. Этот класс должен иметь
// следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год
// поступления в вуз). Класс должен иметь метод getFullName()
// (наследуется от User), с помощью которого можно вывести
// одновременно имя и фамилию студента. Также класс должен
// иметь метод getCourse(), который будет выводить текущий
// курс студента (от 1 до 5). Курс вычисляется так: нужно от
// текущего года отнять год поступления в вуз. Текущий год
// получите самостоятельно с помощью new Date.

// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   getFullName() {
//     return this.name + " " + this.surname;
//   }
// }
// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   course;
//   getCourse() {
//     let currentDate = new Date();
//     let receiptDate = new Date(String(this.year));
//     this.course = currentDate.getFullYear() - receiptDate.getFullYear();

//     return this.course <= 5 ? this.course : "is a not a student, course > 5";
//   }
// }

// const pechkin = new Student("Daniil", "Pechkin", 2022);
// console.log(pechkin.getCourse());
