'use strict';

//обьявление переменных

const appData = {
    rollback: 15,
    title: "", 
    screens: [],
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0, 
    fullPrice: 0, 
    servicePercentPrice: 0, 
    services: {},
    asking: function() {

        do {
            appData.title = prompt("Как называется ваш проект?", "  пРоЕкт  ");
        } while (!isString(appData.title));
        

        for (let i = 0; i < 2; i++){
            let name;
            do {
                name = prompt("Какие типы экранов нужно разработать?");
            } while (!isString(name));
            
            let price = 0;
    
            do {
                price = prompt("Сколько будет стоить данная работа?");
            } while (!isNumber(price));
    
            price = Number(price);
            appData.screens.push({id:i, name: name, price: price});
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");

        for (let i = 0; i < 2; i++){

            let name;
            let price = 0;

            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            } while (!isString(name));
            
    
            do {
                price = prompt("Сколько будет стоить данная работа?");
            } while (!isNumber(price));
    
            price = Number(price);
            appData.services[i+". "+name] = price;
        }
    },
    addPrices: function() {

        appData.screenPrice = appData.screens.reduce(function(sum, item) {
            return sum + item.price;
        }, 0);
        
        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }

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
    getFullPrice: function() {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function() {
        appData.title = appData.title.trim().toLowerCase();
        appData.title = appData.title.charAt(0).toUpperCase() + appData.title.slice(1);
    }, 
    getServicePercentPrices: function() {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100)));
    },
    start: function() {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },
    logger: function() {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    }

};

//описание функционала

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const isString = function(string) {
    return isNaN(string);
};

//блок функционала

appData.start();

//мусорный блок


