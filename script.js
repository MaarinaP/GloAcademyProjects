'use strict';

let title = "My Learning Project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 500;
let rollback = 15;
let fullPrice = 1000;
let adaptive = true;

// console.log("Надпись в консоле");
// alert("Нажми на Ок");

console.log("Тип данных в переменной title - " + typeof(title));
console.log(`Тип данных в переменной fullPrice - ${typeof(fullPrice)}`);
console.log("Тип данных в переменной adaptive -", typeof(adaptive));

console.log("Длина строки переменной screens равна", screens.length);
console.log("Стоимость верстки экранов", screenPrice, "фунтов");
console.log("Стоимость разработки сайта", fullPrice,  "фунтов");

console.log(screens.toLowerCase().split(", "));

console.log("Процент отката посреднику за работу =", (fullPrice * (rollback/100)), "фунтов");