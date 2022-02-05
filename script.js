'use strict';

//lesson 1
let title = "My Learning Project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 500;
let rollback = 15;
let fullPrice = 1000;
let adaptive = true;

// console.log("Надпись в консоле");
// alert("Нажми на Ок");

// lesson 2
console.log("\n lesson 2 ------------\n");
console.log("Тип данных в переменной title - " + typeof(title));
console.log(`Тип данных в переменной fullPrice - ${typeof(fullPrice)}`);
console.log("Тип данных в переменной adaptive -", typeof(adaptive));

console.log("Длина строки переменной screens равна", screens.length);
console.log("Стоимость верстки экранов", screenPrice, "фунтов");
console.log("Стоимость разработки сайта", fullPrice,  "фунтов");

console.log(screens.toLowerCase().split(", "));

console.log("Процент отката посреднику за работу =", (fullPrice * (rollback/100)), "фунтов");

//lesson 3

console.log("\n lesson 3 ------------\n");

title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать?");
screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = 1 * (prompt("Сколько это будет стоить?"));
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = ~~(prompt("Сколько это будет стоить?"));

/*prompt check
console.log(title);
console.log(screens);
console.log(typeof screenPrice, screenPrice);
console.log(adaptive);
console.log(service1, typeof servicePrice1, servicePrice1);
console.log(service2, typeof servicePrice2, servicePrice2);*/

fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log("Данная работа обойдется клиенту в", fullPrice, "фунтов");

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));
console.log("С вычетом отката посреднику я получу", servicePercentPrice, "фунтов");

if (fullPrice < 0 || isNaN(fullPrice)) {
    console.log("Что то пошло не так");
} else if (fullPrice >= 500) {
    console.log("Даю скидку в 10%");
} else if (fullPrice < 500 && fullPrice >= 300) {
    console.log("Даю скидку в 5%");
} else if (fullPrice < 300 && fullPrice >= 0) {
    console.log("Скидка не предусмотрена");
}



