'use strict';

let shopLists = document.getElementById('seattledata');

let shopOne = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookSale: 6.3,
  avgCookiesPerHour: function () {
    return Math.round(randomNumber(this.minCust, this.maxCust) * this.avgCookSale);
  },
  cookiesArray: [`6am: ${this.avgCookiesPerHour} cookies`, `7am: ${this.avgCookiesPerHour} cookies`, `8am: ${this.avgCookiesPerHour} cookies`, `9am: ${this.avgCookiesPerHour} cookies`, `10am: ${this.avgCookiesPerHour} cookies`, `11am: ${this.avgCookiesPerHour} cookies`, `12pm: ${this.avgCookiesPerHour} cookies`, `1pm: ${this.avgCookiesPerHour} cookies`, `2pm: ${this.avgCookiesPerHour} cookies`, `3pm: ${this.avgCookiesPerHour} cookies`, `4pm: ${this.avgCookiesPerHour} cookies`, `5pm: ${this.avgCookiesPerHour} cookies`, `6pm: ${this.avgCookiesPerHour} cookies`, `7pm: ${this.avgCookiesPerHour} cookies`],
}



for (let i = 0; i < shopOne.cookiesArray.length; i++) {
  let hourList = shopOne.cookiesArray[i];
  let liElem = document.createElement('li');
  liElem.textContent = hourList;
}



// this was WIP to get 6am to noon with avgCookiesPerHour function
// for (let i = 6; i < 13; i++) {
//   let cookiesSixToNoon = `${[i]}am: ${this.avgCookiesPerHour} cookies`;
//   if ([i] == 12) {
//     let cookiesSixToNoon = `${[i]}pm: ${this.avgCookiesPerHour} cookies`;
//   }
// }



function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}










// let shopTwo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookSale: 1.2,
// }

// let shopThree = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookSale: 2.3,
// }

// let shopFour = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookSale: 2.3,
// }

// let shopFive = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookSale: 4.6,
// }



// function randomCustNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }