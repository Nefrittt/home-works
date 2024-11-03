// 1. Используя метод map() напишите код, который получает из
// массива строк новый массив, содержащий их длины.

// const wordsLength = (arr) => {
//   const wordsLength = [];
//   arr.map((el) => wordsLength.push(el.length));
//   return wordsLength;
// };

// console.log(wordsLength(["string", "number", "boolean"]));

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17,
//    19]. Использую метод reduce() напишите функцию
//    currentSums(numbers), которая возвращает новый массив из
//    такого же числа элементов, в котором на каждой позиции
//    будет находиться сумма элементов массива numbers до этой
//    позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// const currentSums = (arr) => {
//   const resultArr = [arr[0]];

//   arr.reduce((acc, el) => {
//     resultArr.push(acc + el);
//     return acc + el;
//   });
//   return resultArr;
// };

// console.log(currentSums(numbers));

// 3. Напишите код, который получает из массива чисел новый
// массив, содержащий пары чисел, которые в сумме должны
// быть равны семи: (0:7), (1:6) и т.д.

// const arr = [0, 1, 2, 3, 4, 5, 6, 7];
// const result = [];

// for (let elem of arr) {
//   arr.forEach((el) => (el + elem == 7 ? result.push([el, elem]) : false));
// }
// console.log(result);

// 4. Напишите код, создающий массив, который будет состоять из
// первых букв слов строки str.

// const getFirstLetter = (str) => str.split(" ").map((word) => word[0]);
// console.log(getFirstLetter("HTML is a not programm language"));

// 5. Напишите код, создающий массив, который будет состоять из
// строк, состоящих из предыдущего, текущего и следующего
// символа строки str.

// const strWhat = (str, n) => {
//   const result = str.split("").map((el, index = 1, arr) => {
//     return arr[index - 1] + arr[index] + arr[index + 1];
//   });

//   return result.slice(1, -1);
// };
// console.log(strWhat("Development"));

// 6. Напишите код, преобразующий массив цифр, которые
// располагаются неупорядоченно, в массив цифр
// расположенных по убыванию их значений.

// const numSort = (arr) => arr.sort((a, b) => b - a);

// console.log(numSort([1, 2, 3, 4, 5, 6]));

// 7. Напишите код, объединяющий три массива цифр, и
// располагающий цифры, в полученном массиве, в порядке
// убывания их значений

// const numSort = (arr) => arr.sort((a, b) => b - a);

// const oneArray = (arr1, arr2, arr3) => {
//   return numSort([...arr1, ...arr2, ...arr3]);
// };

// console.log(oneArray([1, 2], [2, 3], [5, 6]));

// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5],
// [6]]. Найдите сумму элементов этого массива. Массив, конечно
// же, может быть произвольным.

// const sumItems = (arr) => {
//   return arr.flat().reduce((acc, el) => acc + el, 0);
// };

// console.log(sumItems([[1, 2, 3], [4, 5], [6]]));

// 9. Дан массив с числами. Не используя метода reverse
// переверните его элементы в обратном порядке.

// const reverse = (arr) => {
//   const result = [];
//   for (let el of arr) {
//     result.unshift(el);
//   }
//   return result;
// };
// console.table(reverse([1, 2, 3]));

// 10. Дан массив с числами. Узнайте сколько элементов с начала
// массива надо сложить, чтобы в сумме получилось больше
// 10-ти.

// const arr = [5, 2, 3, 7, 6, 1];
// let count = 0;
// let acc = 0;
// arr.forEach((el) => {
//   if (acc < 10) {
//     count++;
//     acc += el;
//   }
// });
// console.log(count);

// 11. Напишите функцию arrayFill, которая будет заполнять
// массив заданными значениями. Первым параметром функция
// принимает значение, которым заполнять массив, а вторым -
// сколько элементов должно быть в массиве. Пример:
// arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

const arrayFill = (elem, qty) => Array(qty).fill(elem);

console.log(arrayFill("101", 4));
