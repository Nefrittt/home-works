// 1. Сделайте функцию, которая возвращает квадрат числа. Число
// передается параметром

// const square = (num) =>  num**2;
// console.log(square(8));

// 2. Сделайте функцию, которая возвращает сумму двух чисел.

// const sum = (num1, num2) => num1 + num2;
// console.log(sum(5, 9));

// 3. Сделайте функцию, которая отнимает от первого числа второе
// и делит на третье

// const sumAndDivide = (num1,num2,num3) => (num1 - num2) / num3;
// console.log(sumAndDivide(10,4,2))

// 4. Сделайте функцию, которая принимает параметром число от 1
// до 7, а возвращает день недели на русском языке.

// const dayOfTheWeek = (num) => {
//     let days = ['пн','вт','ср','чт','пт','сб','вс'];
    
//     return days[num-1] ?  days[num-1] : 'Число превышает кол-во дней в неделе';
// }
// console.log(dayOfTheWeek(3))

// 5. Сделайте функцию, которая параметрами принимает 2 числа.
// Если эти числа равны - пусть функция вернет true, а если не
// равны - false.

// const theyEquel = (num1, num2) => (num1 === num2) ? true : false;
// console.log(theyEquel(5,6))

// 6. Сделайте функцию, которая параметрами принимает 2 числа.Если их сумма больше 10 - пусть вернет true, а если нет то -false',

// const moreThenTen = (num1,num2) => (num1 + num2) > 10 ? true : false;
// console.log(moreThenTen(4,8))

// '7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное -пусть функция вернет true, а если нет - false',

// const isPositive = (num) => num >= 0 ? true : false
// console.log(isPositive(-1))

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше10. Если это так - пусть функция возвращает true, если не так -false.
    
// const isNumberInRange = (num) => (num > 0 && num < 10) ? true : false;
// console.log(isNumberInRange(10))

// 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи

// const isNumberInRange = (num) => (num > 0 && num < 10) ? true : false;
// const newArray = Array.from([5,-4,13,15,21,6,7].filter((elem) => isNumberInRange(elem)));
// console.log(newArray)

// 10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// const getDigitsSum = (digit) => Array.from(String(digit)).reduce((acc, item) => +acc + +item) 
// console.log(getDigitsSum(56896))

// 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// const getDigitsSum = (digit) => Array.from(String(digit)).reduce((acc, item) => +acc + +item) 

// for(let i = 1;i <= 2020;i++) {
//     if(getDigitsSum(i) === 13) console.log(i)
// }

// 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет.
// Если четное - пусть функция возвращает true, если нечетное - false.

// const isEven = (num) => num % 2 === 0
// console.log(isEven(3))

// 13. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// const isEven = (num) => num % 2 === 0
// console.log(Array.from([14,15,8,6,43,22,-12]).filter((elem) => isEven(elem)))

// 14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// const getDivisors = (num) => {
//     let arr = []
//     for(let i = 1; i <= num;i++) {
//         if(num % i === 0) arr.push(i)
//     }
//     return arr;
// }
// console.log(getDivisors(14))

// 15. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// const thenMoreNine = (digit) => {
//     let newDigit = Array.from(String(digit)).reduce((acc, item) => +acc + +item);
//     if(newDigit > 9) {
//         thenMoreNine(newDigit)
//     }
//     return newDigit  
// }
// console.log(thenMoreNine(26898))

// 16. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.

// const isPalindrom = (str) => str.split('').reverse().join('').toLowerCase().replaceAll(' ', '') === str.toLowerCase().replaceAll(' ', '') ? true : false
// console.log(isPalindrom('Я иду с мечем судия'))
