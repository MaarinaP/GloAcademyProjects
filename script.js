'use strict';

//обьявление переменных
let rollback = 15;

let title, 
    screens,
    screenPrice,
    adaptive,
    allServicePrices, 
    fullPrice, 
    servicePercentPrice, 
    service1,
    service2,
    servicePrice;

//описание функционала

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
    title = prompt("Как называется ваш проект?", "  пРоЕкт  ");
    screens = prompt("Какие типы экранов нужно разработать?", "Разные");
    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice));
    screenPrice = Number(screenPrice);
    adaptive = confirm("Нужен ли адаптив на сайте?");   
};

const getAllServicePrices = function() {  
    let sum = 0;
   
    for (let i = 0; i < 2; i++){

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }

        do {
            servicePrice = prompt("Сколько будет стоить данная работа?");
        } while (!isNumber(servicePrice));

        servicePrice = Number(servicePrice);

        sum += servicePrice;
    }

    return sum;
};

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

function getFullPrice(price, servicePrice) {
    return price + servicePrice;
}

function getTitle() {
    title = title.trim().toLowerCase();
    return title.charAt(0).toUpperCase() + title.slice(1);
}

function getServicePercentPrices(price, percent) {
    return Math.ceil(price - (price * (percent/100)));
}

//блок функционала

asking();
//allServicePrices = servicePrice1 + servicePrice2
allServicePrices = getAllServicePrices();
//fullPrice = screenPrice + allServicePrices;
fullPrice = getFullPrice(screenPrice, allServicePrices);
//servicePercentPrice = Math.ceil(fullPrice - rollbackAmount);
//rollbackAmount = fullPrice * (rollback/100);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive); 
// showTypeOf(screens);
// showTypeOf(allServicePrices); 
// showTypeOf(fullPrice); 
// showTypeOf(servicePercentPrice); 
// showTypeOf(service1);
// showTypeOf(service2);
// showTypeOf(servicePrice);

//мусорный блок

console.log("Название проекта: ", title);
console.log("Цена за основную услугу:", screenPrice);
console.log("Стоимость дополнительных услуг: ", allServicePrices);
console.log("Выбранные вами типы экранов:", screens);
console.log(getRollbackMessage(fullPrice));
console.log("Данная работа обойдется клиенту в", fullPrice, "фунтов");
console.log("С вычетом отката посреднику я получу", servicePercentPrice, "фунтов");
