'use strict';

//обьявление переменных

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const rollbackRange = document.querySelector(".rollback");
const rollbackInput = document.querySelector(".rollback input");
const rollbackSpan = document.querySelector(".rollback span");

const button = document.getElementsByClassName("handler_btn");
const buttonStart = button[0];
const buttonReset = button[1];

const total = document.getElementsByClassName("total-input");
const totalScreenPrice = total[0];
const totalScreenCount = total[1];
const totalServicePrices = total[2];
const totalFullPrice = total[3];
const totalWithRollback = total[4];

let screenList = document.querySelectorAll(".screen");


const appData = {
    rollback: 0,
    title: "", 
    screens: [],
    screenPrice: 0,
    screenCount: 0,
    adaptive: true,
    servicePricesPercent: 0, 
    servicePricesNumber: 0, 
    fullPrice: 0, 
    servicePercentPrice: 0, 
    servicesPercent: {},
    servicesNumber: {},
    //запуск функции
    init: function() {
        this.addTitle();
        this.start = this.start.bind(this);
        buttonStart.addEventListener("click", this.start);
        buttonPlus.addEventListener("click", this.addScreenBlock);
        //обработка ползунка "Откат посреднику"
        rollbackRange.addEventListener("input", () => {
            rollbackSpan.textContent = rollbackInput.value + "%";
            this.rollback = rollbackInput.value;
        });
    },
    addTitle: function() {
        document.title = title.textContent;
    },
    //метод для кнопки Рассчитать
    start: function() {
        if (this.validateFields()) {

            this.addScreens();
            this.addServices();
            this.addPrices();
            this.showResult();
        }
    },
    //обработка кнопки "+" и добавление полей экранов
    addScreenBlock: function(){
        const cloneScreen = screenList[0].cloneNode(true);
        cloneScreen.querySelector("input").value = null;
        screenList = document.querySelectorAll(".screen");
        screenList[screenList.length - 1].after(cloneScreen);
    },
    //вывод итоговых сум в конце экрана
    showResult: function() {
        totalScreenPrice.value = this.screenPrice;
        totalScreenCount.value = this.screenCount;
        totalServicePrices.value = this.servicePricesPercent + this.servicePricesNumber;
        totalFullPrice.value = this.fullPrice;
        totalWithRollback.value = this.servicePercentPrice;
    },
    //Проверка на заполненность полей экранов
    validateFields: function() {
        const selectScreen = document.querySelectorAll(".screen select");
        const inputScreen = document.querySelectorAll(".screen input");
        let valid = true;

        for (let item in selectScreen) {
            if(selectScreen[item].value == 0) {
                valid = false;
            }
        }

        for (let item in inputScreen) {
            if(inputScreen[item].value == 0) {
                valid = false;
            }
        }

        if (!valid) {
            alert("Проверьте что все поля экранов правильно заполнены");
        }
        return valid;
    },
    //добавление информации в массив screens
    addScreens: function(){
        screenList = document.querySelectorAll(".screen");

        screenList.forEach( (screen, index) => {
            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            const selectName = select.options[select.selectedIndex].textContent;
            const count = input.value;

            this.screens.push({
                id: index, 
                name: selectName, 
                count: Number(count),
                price: Number(select.value) * Number(input.value)
            });
        });
    },
    //добавление информации в обьекты servicesPercent и servicesNumber
    addServices: function() {
        
        otherItemsPercent.forEach( (item) => {

            const check = item.querySelector("input[type=checkbox]");
            const label = item.querySelector("label").textContent;
            const input = item.querySelector("input[type=text]").value;

            if(check.checked) {
                this.servicesPercent[label] = Number(input);
            }
        });

        otherItemsNumber.forEach((item) => {

            const check = item.querySelector("input[type=checkbox]");
            const label = item.querySelector("label").textContent;
            const input = item.querySelector("input[type=text]").value;

            if(check.checked) {
                this.servicesNumber[label] = Number(input);
            }
        });
    },
    //метод для всех расчетов
    addPrices: function() {

        for(let screen of this.screens) {
            this.screenPrice += screen.price;
            this.screenCount += screen.count;
        }
        
        for(let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for(let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key]/100);
        }

        this.fullPrice = this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;

        this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback/100)));

    },
    logger: function() {
        console.log(this.fullPrice);
        console.log(this.servicePercentPrice);
        console.log(this.screens);
    }

};

//описание функционала

//блок функционала

appData.init();

//мусорный блок

