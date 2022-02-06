'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = Number(prompt("Сколько это будет стоить?"));
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = Number(prompt("Сколько это будет стоить?"));

/*prompt check
console.log(title);
console.log(screens);
console.log(typeof screenPrice, screenPrice);
console.log(adaptive);
console.log(service1, typeof servicePrice1, servicePrice1);
console.log(service2, typeof servicePrice2, servicePrice2);*/

let rollback = 15;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log("Данная работа обойдется клиенту в", fullPrice, "фунтов");

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));
console.log("Процент отката посреднику за работу =", (fullPrice * (rollback/100)), "фунтов");
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



