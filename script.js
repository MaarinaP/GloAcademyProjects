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

//в price1,2 передаем servicePrice1,2
const getAllServicePrices = function(price1, price2) {  
    let allServicePrices = price1 + price2;
    return allServicePrices;
};

//в price передаем screenPrice, в callback - getAllServicePrices
function getFullPrice(price, callback) {
    let fullPrice = price + callback;
    return fullPrice;
}

function getTitle() {
    title = title.trim().toLowerCase();
    title = title.charAt(0).toUpperCase() + title.slice(1);
    console.log("Название вашего проекта:", title);
}

//в callback - getFullPrice(); v percent - rollback
function getServicePercentPrices(callback, percent) {
    let servicePercentPrice = Math.ceil(callback - function() {
        return callback * (percent/100);
    });
    return servicePercentPrice;
}

//блок функционала
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

getTitle();

//мусорный блок

console.log("Выбранные вами типы экранов:", screens);
console.log(getRollbackMessage(getFullPrice(screenPrice, getAllServicePrices(servicePrice1, servicePrice2))));
console.log("Данная работа обойдется клиенту в", getFullPrice(screenPrice, getAllServicePrices(servicePrice1, servicePrice2)), "фунтов");
console.log("С вычетом отката посреднику я получу", getServicePercentPrices(getFullPrice(screenPrice, getAllServicePrices(servicePrice1, servicePrice2)), rollback), "фунтов");


/*prompt check
console.log(typeof title);
console.log(typeof screens);
console.log(typeof screenPrice, screenPrice);
console.log(typeof adaptive);
console.log(service1, typeof servicePrice1, servicePrice1);
console.log(service2, typeof servicePrice2, servicePrice2);*/