// console.log("кот" > "код") // Будет true, проверяется посимвольно: к = к, о = о, т > д , потому что 
// console.log("2" + 2 * "2") // Выведет 24 потому что сначала выполниться умножение и даст 4 после произойдет конкатенация к строке
// console.log(undefined == null); // true  - специальное правило языка
// console.log(undefined != null) // false - потому что значения равны 
// console.log(null == 0) // false - undefined и null - равны друг другу и не равны ничему другому, поэтому null не равно 0
// console.log(2 > "3");// false - При сравнении разных типов оба значения приводятся к числу 2 не больше 3 
// console.log(null - false + true) // 0 - 0 + 1 получим 1 , разные типы при сравнении приводятся к числу
// console.log(1 / "l")// NaN - число нельзя поделить на букву
// console.log("2" * "3") // 6 - при умножении строка приводится к числу
// console.log(4 + 5 + "O") // 90 - если 1 из типов строка при + произойдет конкатенация
// console.log("l" + 4 + 5) // l45 - если 1 из типов строка при + произойдет конкатенация
// console.log("4" - 2) // 2 - строка привелась к числу 4 - 2 = 2
// console.log("4" - "4x")// NaN - строку '4x' нелзя привести к числу
// console.log('23' == 23) // true - нестрогое сравнение не проверяет на тип 
// console.log(null == false) // true - особенность языка
// console.log(" -4 "/ 0 + 1) // -infinity - -4\0 дает -infinity
// console.log(null + 1) // 1 - При сравнении разных типов оба значения приводятся к числу
// console.log(undefined + null) // NaN - null приводится к 0 а undefined так и остается
// 1 === “1” // false строгое сравнение проверяет еще и типы, тут типы разные
// console.log('2' > 10) // false 2 приводится к числу 
// console.log(NaN == undefined) // false - NaN частный случай типа Number



//                                                               Работа с if-else

// Если переменная a равна нулю, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.

// const a = [1,0,-3];

// for(let i = 0;i < a.length;i++) {
//    if(a[i] === 0){
//       console.log('Верно');
//    } else {
//       console.log('Неверно');
//    }
// }

// Если переменная a больше нуля, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.

// const a = [1,0,-3];

// for(let i = 0;i < a.length;i++) {
//    if(a[i] > 0){
//       console.log('Верно');
//    } else {
//       console.log('Неверно');
//    }
// }

// Если переменная a меньше нуля, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.

// const a = [1,0,-3];

// for(let i = 0;i < a.length;i++) {
//    if(a[i] < 0){
//       console.log('Верно');
//    } else {
//       console.log('Неверно');
//    }
// }

// Если переменная a больше или равна нулю, то выведите
// 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
// при a, равном 1, 0, -3.

// const a = [1,0,-3];

// for(let i = 0;i < a.length;i++) {
//    if(a[i] >= 0){
//       console.log('Верно');
//    } else {
//       console.log('Неверно');
//    }
// }

// Если переменная a меньше или равна нулю, то выведите
// 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
// при a, равном 1, 0, -3.

// const a = [1,0,-3];

// for(let i = 0;i < a.length;i++) {
//    if(a[i] <= 0){
//       console.log('Верно');
//    } else {
//       console.log('Неверно');
//    }
// }

// Если переменная a не равна нулю, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.

// const a = [1,0,-3];

// for(let i = 0;i < a.length;i++) {
//    if(a[i] != 0){
//       console.log('Верно');
//    } else {
//       console.log('Неверно');
//    }
// }

// Если переменная a равна 'test', то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 'test', 'тест', 3.

// const a = ['test','тест',3];

// for(let i = 0;i < a.length;i++) {
//    if(a[i] === 'test'){
//       console.log('Верно');
//    } else {
//       console.log('Неверно');
//    }
// }

// Если переменная a равна '1' и по значению и по типу, то
// выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу
// скрипта при a, равном '1', 1, 3.

// const a = ['1',1,3];

// for(let i = 0;i < a.length;i++) {
//    if(a[i] === '1'){
//       console.log('Верно');
//    } else {
//       console.log('Неверно');
//    }
// }

//                                                  Работа с логическими переменными

// Если переменная test равна true, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при test,
// равном true, false. Напишите два варианта скрипта - с короткой
// записью и с длинной.

// 1 вариант
// const test = [true,false];

// for(let i = 0; i < test.length;i++) {
//    if(test[i]) {
//       console.log('Верно');
//    } else {
//       console.log('Неверно');
//    }

// }
// 2 вариант
// const testTrue = true ? console.log('Верно') : console.log('Неверно');
// const testFalse = false ? console.log('Верно') : console.log('Неверно');

// Если переменная test не равна true, то выведите 'Верно',
// иначе выведите 'Неверно'. Проверьте работу скрипта при test,
// равном true, false. Напишите два варианта скрипта - с короткой
// записью и с длинной.

// 1 вариант
// const test = [true,false];

// for(let i = 0; i < test.length;i++) {
//    if(!test[i]) {
//       console.log('Верно');
//    } else {
//       console.log('Неверно');
//    }
// }
// 2 вариант
// const testTrue = true ? console.log('Неверно') : console.log('Верно');
// const testFalse = false ? console.log('Неверно') : console.log('Верно');

//                                                       Работа с && (и) и || (или)

// Если переменная a больше нуля и меньше 5-ти, то выведите
// 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
// при a, равном 5, 0, -3, 2.

// const a = [5,0,-3,2];

// for(let i = 0; i < a.length;i++) {
//    if(a[i] > 0 && a[i] < 5) {
//       console.log('Верно');
//    } else {
//       console.log('Неверно');
//    }
// }

// Если переменная a равна нулю или равна двум, то прибавьте
// к ней 7, иначе поделите ее на 10. Выведите новое значение
// переменной на экран. Проверьте работу скрипта при a, равном
// 5, 0, -3, 2.

// const a = [5,0,-3,2];

// for(let i = 0;i < a.length;i++) {
//    if(a[i] == 0 || a[i] == 2) {
//       console.log(a[i] + 7);
//    } else {
//       console.log(a[i] / 10);
//    }
// }

// Если переменная a равна или меньше 1, а переменная b
// больше или равна 3, то выведите сумму этих переменных,
// иначе выведите их разность (результат вычитания). Проверьте
// работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// const a = [1,3,0];
// const b = [6,3,5];

// for(let i = 0;i < a.length;i++) {
//    for(let j = 0;j < b.length; j++){
//       if(a[i] <= 1 && b[j] >= 3) {
//          console.log(a[i] + ' + ' + b[j] + ' = ' + (a[i] + b[j]) + ' сложение');
//       } else {
//          console.log(a[i] + ' - ' + b[j] + ' = ' + (a[i] - b[j]) + ' разность');
//       }
//    }
// }

// Если переменная a больше 2-х и меньше 11-ти, или
// переменная b больше или равна 6-ти и меньше 14-ти, то
// выведите 'Верно', в противном случае выведите 'Неверно'.

// const a = 2;
// const b = 6;

// if(a > 2 && a < 11 || b >= 6 && b < 14) {
//    console.log('Верно');
// } else {
//    console.log('Неверно');
// }

//                                                            На switch-case

// Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем
// 'зима', если имеет значение '2' – 'весна' и так далее. Решите
// задачу через switch-case.

// const num = [1,2,3,4];

// for(let i = 0;i < num.length;i++) {
//    switch (num[i]) {
//       case 1:
//          console.log('Зима')
//          break;
//       case 2:
//          console.log('Весна')
//          break;
//       case 3:
//          console.log('Лето')
//          break;
//       case 4:
//          console.log('Осень')
//          break;
//       default:
//          console.log('Нет значений')
//    }
// }

//                                                                          Общие задачи

// В переменной day лежит какое-то число из интервала от 1 до
// 31. Определите в какую декаду месяца попадает это число (в
// первую, вторую или третью).

// const day = 31;

// if(day > 0 && day <= 10) {
//    console.log('Первая декада')
// } else if(day > 10 && day <= 20) {
//    console.log('Вторая декада')
// } else if(day > 20 && day <= 30) {
//    console.log('Третья декада')
// } else {
//    console.log('Ваша дата не входит в диапазон')
// }

// В переменной month лежит какое-то число из интервала от 1
// до 12. Определите в какую пору года попадает этот месяц
// (зима, лето, весна, осень).

// const month = 12;

// if(month == 12 || month > 0 && month < 3) {
//    console.log('Зима')
// } else if(month >= 3 && month < 6) {
//    console.log('Весна')
// } else if(month >= 6 && month < 9) {
//    console.log('Лето')
// } else if(month >= 9 && month < 12) {
//    console.log('Осень')
// } else {
//    console.log('Введено некорректное число');
// }

//                                                       Циклы while и for
//                                  Решите эти задачи сначала через цикл while, а затем через цикл for.

// Выведите столбец чисел от 1 до 100.

// Через while

// let i = 1
// while(i <= 100) {
//    console.log(i)
//    i++
// }
// Через for

// for(let i = 1;i <= 100;i++) {
//    console.log(i)
// }

// Выведите столбец чисел от 11 до 33.

// Через while

// let i = 11;
// while(i <= 33) {
//    console.log(i)
//    i++
// }
// Через for

// for(let i = 11;i <= 33;i++) {
//    console.log(i)
// }

// Выведите столбец четных чисел в промежутке от 0 до 100.

// Через while

// let i = 0;

// while(i <= 100) {
//    if(i % 2 == 0) {
//       console.log(i)
//    }
//    i++
// }
// Через for

// for(let i = 0; i <= 100;i++) {
//    if(i % 2 == 0) {
//       console.log(i)
//    }
// }

// С помощью цикла найдите сумму чисел от 1 до 100.

// Через while

// let i = 1;
// let count = 0;

// while(i <= 100) {
//    count += i;
//    i++
// }

// console.log(count)
// Через for

// let count = 0;
// for(let i = 1;i <= 100;i++) {
//    count += i;
// }
// console.log(count)

//                                                                           Задачи общие.

// Дано число n=1000. Делите его на 2 столько раз, пока
// результат деления не станет меньше 50. Какое число
// получится? Посчитайте количество итераций, необходимых
// для этого (итерация - это проход цикла), и запишите его в
// переменную num.

// Через while

// let n = 1000;
// let num = 0;

// while(n >= 50) {
//    num++
//    n /= 2;
// }

// console.log(n,num);

// Через for
// let n = 1000;
// let num;
// for(let i = 1;n >= 50;i++) {
//    num = i;
//    n /= 2;
// }
// console.log(n, num)


