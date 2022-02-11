'use strict';

//обьявление переменных

const appData = {
    rollback: 15,
    title: "", 
    screens: "",
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0, 
    fullPrice: 0, 
    servicePercentPrice: 0, 
    service1: "",
    service2: "",
    servicePrice: 0,
    asking: function() {
        appData.title = prompt("Как называется ваш проект?", "  пРоЕкт  ");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Разные");
    
        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!isNumber(appData.screenPrice));
    
        appData.screenPrice = Number(appData.screenPrice);
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");   
    },
    getAllServicePrices: function() {  
        let sum = 0;
       
        for (let i = 0; i < 2; i++){
    
            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
            }
    
            do {
                appData.servicePrice = prompt("Сколько будет стоить данная работа?");
            } while (!isNumber(appData.servicePrice));
    
            appData.servicePrice = Number(appData.servicePrice);
    
            sum += appData.servicePrice;
        }
    
        return sum;
    },
        //Расчет скидки; price = getFullPrice()
    getRollbackMessage: function(price) {
        if (price < 0 || isNaN(price)) {
            return "Что то пошло не так";
        } else if (price >= 500) {
            return "Даю скидку в 10%";
        } else if (price < 500 && price >= 300) {
            return "Даю скидку в 5%";
        } else if (price < 300 && price >= 0) {
            return "Скидка не предусмотрена";
        }
    },
    getFullPrice: function(price, servicePrice) {
        return price + servicePrice;
    },
    getTitle: function() {
        appData.title = appData.title.trim().toLowerCase();
        return appData.title.charAt(0).toUpperCase() + appData.title.slice(1);
    }, 
    getServicePercentPrices: function(price, percent) {
        return Math.ceil(price - (price * (percent/100)));
    },
    start: function() {
        appData.asking();
        //allServicePrices = servicePrice1 + servicePrice2
        appData.allServicePrices = appData.getAllServicePrices();
        //fullPrice = screenPrice + allServicePrices;
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        //servicePercentPrice = Math.ceil(fullPrice - rollbackAmount);
        //rollbackAmount = fullPrice * (rollback/100);
        appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.title = appData.getTitle();
        appData.logger();
    },
    logger: function() {
        for (let key in appData) {
            console.log(key);
        }
    }

};

//описание функционала

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

//блок функционала

appData.start();

//мусорный блок


