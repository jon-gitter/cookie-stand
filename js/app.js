'use strict';
// the code below I mirrored from the code review today, originally done by Dwight

let storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function randomCustomerNum(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}

let myCities = [];

function City(cityName, minHourlyCustomers, maxHourlyCustomer, avgCookiesPerCustomer) {
  this.cityName = cityName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomer = maxHourlyCustomer;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersPerHour = [];
  this.cookiesPurchasedPerHour = [];
  this.totalCookiesPerDay = 0;
  myCities.push(this);
}

City.prototype.getCustomersPerHour = function () {
  for (let i = 0; i < storeHours.length; i++) {
    let currentHourCustomers = randomCustomerNum(this.minHourlyCustomers, this.maxHourlyCustomer);
    this.customersPerHour.push(currentHourCustomers);
  }
};

City.prototype.getCookiesPurchasedPerHour = function () {
  for (let i = 0; i < storeHours.length; i++) {
    let resultA = this.avgCookiesPerCustomer * this.customersPerHour[i];
    let resultB = Math.ceil(resultA);
    this.cookiesPurchasedPerHour.push(resultB);
  }
};

City.prototype.getTotalCookiesPurchased = function () {
  for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
    this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesPurchasedPerHour[i];
  }
};


let seattle = new City('Seattle', 23, 65, 6.3);
seattle.getCustomersPerHour();
seattle.getCookiesPurchasedPerHour();
seattle.getTotalCookiesPurchased();

let tokyo = new City('Tokyo', 3, 24, 1.2);
tokyo.getCustomersPerHour();
tokyo.getCookiesPurchasedPerHour();
tokyo.getTotalCookiesPurchased();

let dubai = new City('Dubai', 11, 38, 3.7);
dubai.getCustomersPerHour();
dubai.getCookiesPurchasedPerHour();
dubai.getTotalCookiesPurchased();

let paris = new City('Paris', 20, 38, 2.3);
paris.getCustomersPerHour();
paris.getCookiesPurchasedPerHour();
paris.getTotalCookiesPurchased();

let lima = new City('Lima', 2, 16, 4.6);
lima.getCustomersPerHour();
lima.getCookiesPurchasedPerHour();
lima.getTotalCookiesPurchased();


const parentElement = document.getElementById('cookie-table'); // JS window to DOM

function renderTableMain() {
  for (let i = 0; i < myCities.length; i++) {
    let currentCity = myCities[i];
    let currentRow = document.createElement('tr'); // table row
    let tableData = document.createElement('td'); // table cell - styles in bolder text
    tableData.textContent = currentCity.cityName; // adding to parent element
    parentElement.appendChild(currentRow);
    currentRow.appendChild(tableData);
    for (let j = 0; j < currentCity.cookiesPurchasedPerHour.length; j++) {
      let currentDatum = currentCity.cookiesPurchasedPerHour[j];
      let currentDatumCell = document.createElement('td');
      currentDatumCell.textContent = currentDatum;
      currentRow.appendChild(currentDatumCell);
    }
  }
}

function renderTableHeader() {
  let tableHeading = document.createElement('tr');
  let cityHeading = document.createElement('th');
  parentElement.appendChild(tableHeading);
  tableHeading.appendChild(cityHeading);
  cityHeading.textContent = 'City Names';
  for (let i = 0; i < storeHours.length; i++) {
    let currentTime = storeHours[i];
    let currentTableHeader = document.createElement('th');
    currentTableHeader.textContent = currentTime;
    tableHeading.appendChild(currentTableHeader);
  }
}

renderTableHeader();
renderTableMain();













// // window into the DOM 
// let cookieTable = document.getElementById('cookie-table');

// //array for <thead></thead> 
// let tableHeader = ['Location', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];

// let tableRowTwo = [];


// let theadElem = document.createElement('thead');
// cookieTable.appendChild(theadElem);

// let trElem = document.createElement('tr');
// cookieTable.appendChild(trElem);

// //creates loop for as many <th></th> elements I need for the tableheader row
// for (let i = 0; i < tableHeader.length; i++) {
//   let headerCellData = tableHeader[i];
//   let thElem = document.createElement('th');
//   thElem.textContent = headerCellData;
//   trElem.appendChild(thElem);
// }

// //create table body with rows for each city total cookies per hour randomly generated data
// let tBodyElem = document.createElement('tbody');
// cookieTable.appendChild(tBodyElem);
// // the variable name below might impact might not !!!!!!!!!!!
// let trElemTwo = document.createElement('tr');
// cookieTable.appendChild(trElemTwo);

// // this table needs to generate location name, then each hours cookie data.
// // for (let i = 0; i < tableHeader.length; i++) {
// //   let headerCellData = tableHeader[i];
// //   let thElem = document.createElement('th');
// //   thElem.textContent = headerCellData;
// //   trElem.appendChild(thElem);
// // }

// //constructor for stores, and their cookie per hour data
// function Store(location, minCust, maxCust, avgCookieSale) {
//   this.storeLocation = location;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookieSale = avgCookieSale;
//   this.randomCusts = [];
//   this.hourlyCookieSales = [];

// }

// function randomCustGen(min, max) {
//   return Math.ceil(Math.random() * (max - min + 1) + min);
// }








// let seattle = new Store('Seattle', 23, 65, 6.3);
































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
// let allShops = [];



// function ShopSales(location, minCust, maxCust, avgCookieSale) {
//   this.storeLocation = location;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookieSale = avgCookieSale;
//   this.cookiesPerHour = 0;
//   allShops.push(this);
// }

// let seattle = new ShopSales('Seattle', 23, 65, 6.3);
// let tokyo = new ShopSales('Tokyo', 3, 24, 1.2);
// let dubai = new ShopSales('Dubai', 11, 38, 3.7);
// let paris = new ShopSales('Paris', 20, 38, 2.3);
// let lima = new ShopSales('Lima', 2, 16, 4.6);


// function randomCusts(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// ShopSales.prototype.randomize = function () {
//   this.cookiesPerHour = Math.round((randomCusts(this.minCust, this.maxCust)) * this.avgCookieSale);
// };

// seattle.randomize();
// tokyo.randomize();
// dubai.randomize();
// paris.randomize();
// lima.randomize();



// let seattleHourlyCookies = [`${allShops[0].cookiesPerHour} cookies`];

// console.log(seattleHourlyCookies)



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