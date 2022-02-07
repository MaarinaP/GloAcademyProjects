'use strict';

//обьявление переменных
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = Number(prompt("Сколько это будет стоить?"));
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = Number(prompt("Сколько это будет стоить?"));

let rollback = 15;
let allServicePrices, fullPrice, servicePercentPrice;
//let allServicePrices = servicePrice1 + servicePrice2
//let fullPrice = screenPrice + allServicePrices;
//let rollbackAmount = fullPrice * (rollback/100);
//let servicePercentPrice = Math.ceil(fullPrice - rollbackAmount);

//описание функционала
const showTypeOf = function(variable) {    
    console.log(variable, typeof variable);
};

//Расчет скидки; price = getFullPrice()
const getRollbackMessage = function(price) {
    if (price < 0 || isNaN(price)) {
        return "Что то пошло не так";
    } else if (price >= 500) {
        return "Даю скидку в 10%";
    } else if (price < 500 && price >= 300) {
        return "Даю скидку в 5%";
    } else if (price < 300 && price >= 0) {
        return "Скидка не предусмотрена";
    }
};

const getAllServicePrices = function(price1, price2) {  
    return price1 + price2;
};

function getFullPrice(price, servicePrice) {
    return price + servicePrice;
}

function getTitle() {
    title = title.trim().toLowerCase();
    title = title.charAt(0).toUpperCase() + title.slice(1);
    console.log("Название вашего проекта:", title);
}

function getServicePercentPrices(price, percent) {
    return Math.ceil(price - (price * (percent/100)));
}

//блок функционала

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

getTitle();

//мусорный блок

console.log("Выбранные вами типы экранов:", screens);
console.log(getRollbackMessage(fullPrice));
console.log("Данная работа обойдется клиенту в", fullPrice, "фунтов");
console.log("С вычетом отката посреднику я получу", servicePercentPrice, "фунтов");


/*prompt check
console.log(typeof title);
console.log(typeof screens);
console.log(typeof screenPrice, screenPrice);
console.log(typeof adaptive);
console.log(service1, typeof servicePrice1, servicePrice1);
console.log(service2, typeof servicePrice2, servicePrice2);*/