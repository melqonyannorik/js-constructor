// Array.prototype.last = function () {
//   if (this.length === 0) {
//     return -1;
//   }
//   return this[this.length - 1];
// };
// let arr = [1, 4, 5, 6];
// let arr1 = arr.last();

// console.log(arr1);

//1.    Перевернуть строку Написать функцию,
//которая принимает строку и возвращает ее в обратном
//порядке. Например, если входная строка "hello",
//то функция должна вернуть "olleh".

// function chengString(str) {
//   let str2 = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     str2 = str2 + str[i];
//   }
//   return str2;
// }
// console.log(chengString("barev"));

//2.Найти наибольшее число в массиве Написать функцию,
//  которая принимает массив чисел и возвращает
//   наибольшее число в массиве. Например,
//    если входной массив [4, 2, 7, 1, 9],
//  то функция должна вернуть 9.

// Array.prototype.bigNum = function () {
//   let arr1 = 0;
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] > arr1) {
//       arr1 = this[i];
//     }
//   }
//   return arr1;
// };

// let arr = [4, 2, 7, 1, 9];

// console.log(arr.bigNum());

// 3. Реализовать функцию подсчета суммы элементов
//  в массиве Написать функцию, которая принимает массив
//  чисел и возвращает сумму всех элементов в массиве.
//  Например, если входной массив [2, 4, 6],
// то функция должна вернуть 12.

// Array.prototype.sumNumbers = function () {
//   let arr1 = 0;
//   for (let i = 0; i < this.length; i++) {
//     arr1 = arr1 + this[i];
//   }
//   return arr1;
// };

// let arr = [2, 4, 6];

// console.log(arr.sumNumbers());

//4.Реализовать функцию поиска дубликатов в массиве
//Написать функцию, которая принимает массив
//и возвращает новый массив, содержащий только уникальные
// элементы из входного массива. Например, если входной
//массив [1, 2, 2, 3, 4, 4, 5],
//то функция должна вернуть [1, 2, 3, 4, 5].

// Array.prototype.uniqueNumber = function () {
//   let arr1 = [];
//   artaqin: for (let i = 0; i < this.length; i++) {
//     for (let j = 0; j < arr1.length; j++) {
//       if (this[i] === arr1[j]) {
//         continue artaqin;
//       }
//     }
//     arr1[arr1.length] = this[i];
//   }
//   return arr1;
// };
// let arr = [1, 2, 2, 3, 4, 4, 5];
// console.log(arr.uniqueNumber());

//5.Найти первое неповторяющееся число в массиве
//Написать функцию, которая принимает массив чисел
//и возвращает первое число в массиве, которое не
//повторяется. Например, если входной
//массив [1, 2, 3, 2, 4, 1], то функция должна вернуть 3.

// Array.prototype.nonRepeatingNumber = function () {
//   let obj = {};
//   for (let i = 0; i < this.length; i++) {
//     if (obj[this[i]] === undefined) {
//       obj[this[i]] = 1;
//     } else {
//       obj[this[i]]++;
//     }
//   }
//   for (const key in obj) {
//     if (obj[key] === 1) {
//       return key;
//     }
//   }
// };

// let arr = [3, 4, 5, 6, 7, 5, 3, 7];
// console.log(arr.nonRepeatingNumber());
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]] === undefined) {
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]]++;
//   }
// }

// console.log(obj);

// for (const key in obj) {
//   if (obj[key] === 1) {
//     console.log(key);
//     break;
//   }
// }

//1.Реализовать функцию поиска элемента в массиве
//Написать функцию, которая принимает массив и элемент,
//который нужно найти, и возвращает индекс элемента
// в массиве, если элемент найден, или -1,
//если элемент не найден. Например, если входной
// массив [1, 2, 3, 4, 5] и элемент 3,
//то функция должна вернуть 2.

// Array.prototype.myIndex = function (num) {
//   let index;
//   for (let i = 0; i < this.length; i++) {
//     index = i;
//     if (index === num) {
//       return this[i];
//     }
//   }
// };
// let arr = [2, 3, 4, 5, 4, 6, 7];
// console.log(arr.myIndex(6));
