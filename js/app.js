'use strict';

// let shopLists = document.getElementById('seattledata');


// let hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// let shopOne = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   randomCusts: function () {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   calcCookieTimesCusts: function () {
//     this.randomCusts();
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.cookiesPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCookieSale));
//       this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
//     }
//   },
// }
let allShops = [];



function ShopSales(location, minCust, maxCust, avgCookieSale) {
  this.storeLocation = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHour = 0;
  allShops.push(this);
}

let seattle = new ShopSales('Seattle', 23, 65, 6.3);
let tokyo = new ShopSales('Tokyo', 3, 24, 1.2);
let dubai = new ShopSales('Dubai', 11, 38, 3.7);
let paris = new ShopSales('Paris', 20, 38, 2.3);
let lima = new ShopSales('Lima', 2, 16, 4.6);


function randomCusts(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

ShopSales.prototype.randomize = function () {
  this.cookiesPerHour = Math.round((randomCusts(this.minCust, this.maxCust)) * this.avgCookieSale);
};

seattle.randomize();
tokyo.randomize();
dubai.randomize();
paris.randomize();
lima.randomize();



let seattleHourlyCookies = [`${allShops[0].cookiesPerHour} cookies`];

console.log(seattleHourlyCookies)



// below is a for loop that will call the seattle tokyo dubai function to randomize.
// for (let i = 0; i < allShops.length; i++) {
//   let currentStore = allShops[i];
//   currentStore.randomize();
// }










// let shopOne = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookSale: 6.3,
//   avgCookiesPerHour: function () {
//     return Math.round(randomNumber(this.minCust, this.maxCust) * this.avgCookSale);
//   },
//   cookiesArray: [`6am: ${ this.avgCookiesPerHour } cookies`, `7am: ${ this.avgCookiesPerHour } cookies`, `8am: ${ this.avgCookiesPerHour } cookies`, `9am: ${ this.avgCookiesPerHour } cookies`, `10am: ${ this.avgCookiesPerHour } cookies`, `11am: ${ this.avgCookiesPerHour } cookies`, `12pm: ${ this.avgCookiesPerHour } cookies`, `1pm: ${ this.avgCookiesPerHour } cookies`, `2pm: ${ this.avgCookiesPerHour } cookies`, `3pm: ${ this.avgCookiesPerHour } cookies`, `4pm: ${ this.avgCookiesPerHour } cookies`, `5pm: ${ this.avgCookiesPerHour } cookies`, `6pm: ${ this.avgCookiesPerHour } cookies`, `7pm: ${ this.avgCookiesPerHour } cookies`],
//   //need to calculate total cookies - create a for loop using elements of cookiesArray and sum them together
// }

// when doing DOM manipulation start higher in html for DOM window then work down to the ul, we want it at the <body> because we need to create multiple articles to fill in the multiple lists for different cities.  


// for (let i = 0; i < shopOne.cookiesArray.length; i++) {
//   let hourList = shopOne.cookiesArray[i];
//   let liElem = document.createElement('li');
//   liElem.textContent = hourList;
// }



// this was WIP to get 6am to noon with avgCookiesPerHour function
// for (let i = 6; i < 13; i++) {
//   let cookiesSixToNoon = `${ [i] } am: ${ this.avgCookiesPerHour } cookies`;
//   if ([i] == 12) {
//     let cookiesSixToNoon = `${ [i] } pm: ${ this.avgCookiesPerHour } cookies`;
//   }
// }



// function randomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }










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