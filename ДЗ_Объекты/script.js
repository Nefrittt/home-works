// 1. Преобразовать строку в массив слов. Напишите функцию
// stringToarray(str), которая преобразует строку в массив слов.

// const stringToArray = (str) => str.replaceAll(/ /g,'').split('')
// console.log(stringToArray('Hello World!'))

// 2. Напишите функцию deleteСharacters(str, length), которая
// возвращает подстроку, состоящую из указанного количества
// символов.

// const deleteСharacters = (str, length) => str.substr(0, length)
// console.log(deleteСharacters('Javascript', 5))

// 3. Напишите функцию insertDash(str), которая принимает строку
// str в качестве аргумента и вставляет тире (-) между словами.
// При этом все символы строки необходимо перевести в
// верхний регистр.

// const insertDash = (str) => str.replaceAll(/ /g,'-').toUpperCase()
// console.log(insertDash('Javascript is a not Java'))

// 4. Напишите функцию, которая принимает строку в качестве
// аргумента и преобразует регистр первого символа строки из
// нижнего регистра в верхний.

// const firstLetterUpper = (str) => str.slice(0,1).toUpperCase() + str.slice(1)
// console.log(firstLetterUpper('hello world'))

// 5. Напишите функцию capitalize(str), которая возвращает строку,
// в которой каждое слово начинается с заглавной буквы.

// const capitalize = (str) => str.split(' ').map(el =>  el.slice(0,1).toUpperCase() + el.slice(1)).join(' ')
// console.log(capitalize('where a big letters'))

// 6. Напишите функцию changeRegister(str), которая принимает в
// качестве аргумента строку и и заменяет регистр каждого
// символа на противоположный. Например, если вводится
// «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ
// оХоТнИк».

// const changeRegister = (str) => [...str].map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('')
// console.log(changeRegister('WhAtEvEr'))

// 7. Напишите функцию removeChar(str), которая возвращает
// строку, очищенную от всех не буквенно-цифровых символов.

// const removeChar = (str) => str.replace(/[^\w\s]/g,'')
// console.log(removeChar('Hel#l*o peop-le for L4fe'))

// 8. Напишите функцию zeros(num, len), которая дополняет нулями
// до указанной длины числовое значение с дополнительным
// знаком «+» или «-» в зависимости от передаваемого
// аргумента.

// const zeros = (num, len) => num > 0 ?'+' + num.toFixed(len - String(num).length) : num.toFixed(++len - String(num).length)
// console.log(zeros(-12,5))

// 9. Напишите функцию comparison(str1, str2), которая сравнивает
// строки без учёта регистра символов.

// const comparison = (str1, str2) => str1.toLowerCase() === str2.toLowerCase()
// console.log(comparison('Tower','tower'))

// 10. Напишите функцию insensitiveSearch(str1, str2), которая
// осуществляет поиск подстроки str2 в строке str1 без учёта
// регистра символов.

// const insensitiveSearch = (str1, str2) => str1.match(new RegExp(`${str2}`,'gi'))
// console.log(insensitiveSearch('JavaScript is a script of SCR','scr'))

// 11. Напишите функцию initCap(str), которая преобразует стиль
// написания составных слов строки в CamelCase, при котором
// несколько слов пишутся слитно без пробелов, при этом каждое
// слово внутри строки пишется с заглавной буквы.

// const initCap = (str) => str.split(' ').map(el => str.indexOf(el) === 0 ? el.toLowerCase() : el[0].toUpperCase() + el.slice(1).toLowerCase()).join('')
// console.log(initCap('create big AMOUNT sale'))

// 12. Напишите функцию initSnake(str), которая преобразует
// стиль написания составных слов строки из CamelCase в
// snake_case, при котором несколько слов разделяются
// символом подчеркивания (_), причём каждое слово пишется с
// маленькой буквы.

// const initSnake = (str) => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
// console.log(initSnake('camelCaseLess'))

// 13. Напишите функцию repeatStr(str, n), которая возвращает
// строку повторяемую определённое количество раз.

// const repeatStr = (str, n) => {
//     newStr = '';
//     while(n > 0) {
//         newStr += str
//         n--
//     }
//     return newStr
// }
// console.log(repeatStr('010', 25))

// 14. Напишите функцию path(pathname), которая возвращает
// имя файла (подстрока после последнего символа "\" ) из
// полного пути к файлу.

const path = (pathName) => pathName.substr(/\w/)