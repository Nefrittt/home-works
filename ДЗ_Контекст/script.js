// 1. Что выведет функция? так как null не объект привязываемся к объекту Window
// function f() {
//   alert(this);
// }
// let user = {
//   g: f.bind(null),
// };
// user.g();

// console.log(null);

// 2. Можем ли мы изменить this дополнительным связыванием? - Нет потому что перезаписать метод bind нельзя
// function f() {
//   alert(this.name);
// }
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f();

// 3. В свойство функции записано значение. Изменится ли оно
// после применения bind? - Нет и вообще не понятно что мы здесь пытаемся сделать "sayHi.test = 5;" ??? В итоге получим только undefined потому что функция ничего не возвращает
// function sayHi() {
//   alert(this.name);
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
//   name: "Вася",
// });
// alert(bound.test);

// 4. Вызов askPassword() в приведённом ниже коде должен
// проверить пароль и затем вызвать user.loginOk/loginFail в
// зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?  -- Потому что методы которые внутри объекта не вызываются а передаются параметрами внутри функции которая не внутри объекта user, поэтому this ссылается на объект Window или если точнее loginOk и ok хот и идентичны , но это 2 разные функции
// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "Вася",
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk, user.loginFail);

// 5. Объект user был изменён. Теперь вместо двух функций
// loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде
// ниже, чтобы она могла вызывать функцию user.login(true) как
// ok и функцию user.login(false) как fail?
// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail(false);
// }
// let user = {
//   name: "John",
//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // Ответ

// 6. Напишите в указанном месте конструкцию с методом bind()
// так, чтобы this внутри функции func всегда указывал на value.
// из переменной elem.
// const elem = { value: "Привет" };
// function func(surname, name) {
//   alert(this.value + ", " + surname + " " + name);
// }
// //Тут напишите конструкцию с bind()
// func = func.bind(elem);

// func("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'

// func("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

// Есть функция которая складывает три числа.Выполните
// каррирование.
// const sum = (a) => (b) => (c) => a + b + c;
// console.log(sum(5)(4)(6));

// 8. Реализовать таймер-функцию используя замыкания. Функция
// принимает два аргумента начальное значение и значение
// завершения. Таймер движется назад.При достижении точки
// завершения в консоль выводится значение таймера и
// сообщение о завершении работы таймера.

// function timeOut(start, end = 0) {
//   let count = start;
//   let timer;
//   return (timer = setInterval(() => {
//     console.log(count);
//     if (count == end) {
//       clearInterval(timer);
//       console.log(count + "- Таймер завершен");
//     }
//     count--;
//   }, 1000));
// }

// timeOut(5);
