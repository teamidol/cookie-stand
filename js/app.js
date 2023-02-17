'use strict'

//--------------------GLOBAL VARIABLES/IMPORTS

// let salmonCookiesProfile = document.getElementById('salmon-cookies-profile');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let allStores = [];
let tableElement = document.getElementById('stats');

//--------------------CONSTRUCTORS

function StoreBuilding(location, minCust, maxCust, avgCookiePerPerson) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerPerson = avgCookiePerPerson;

  this.cookieSales = [];
  this.totalSales = 0;
  allStores.push(this);
}

//--------------------CONSTRUCTOR METHODS

StoreBuilding.prototype.getCustNum = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

}

StoreBuilding.prototype.getCookieNum = function () {
  for (let i = 0; i < hours.length; i++) {
    let randCust = this.getCustNum();
    let randCookies = Math.floor(randCust * this.avgCookiePerPerson);
    this.cookieSales.push(randCookies);
    this.totalSales += randCookies;
  }
}

StoreBuilding.prototype.render = function () {
  let storeRow = document.createElement('tr');
  tableElement.appendChild(storeRow);

  let nameCell = document.createElement('th');
  storeRow.appendChild(nameCell);
  nameCell.textContent = this.location;

  for (let i = 0; i < this.cookieSales.length; i++) {
    let dataNum = document.createElement('td');
    storeRow.appendChild(dataNum);
    dataNum.textContent = this.cookieSales[i];
  }

  let totalCell = document.createElement('td');
  storeRow.appendChild(totalCell);
  totalCell.textContent = this.totalSales;

}

//--------------------FUNCTIONS
function generateStores() {
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].getCookieNum();
    allStores[i].render();
  }
}

function makeHeader() {
  let tableHead = document.createElement('thead');
  tableElement.appendChild(tableHead);
  let headerRow = document.createElement('tr');
  tableHead.appendChild(headerRow);

  let firstCell = document.createElement('th');
  headerRow.appendChild(firstCell);
  firstCell.textContent = 'Location';

  for (let i = 0; i < hours.length; i++) {
    let timeCell = document.createElement('th');
    headerRow.appendChild(timeCell);
    timeCell.textContent = hours[i];

  }

  let headerEnd = document.createElement('th');
  headerRow.appendChild(headerEnd);
  headerEnd.textContent = 'Total';



}

function makeFooter() {
  let tableFoot = document.createElement('tfoot');
  tableElement.appendChild(tableFoot);
  let footerRow = document.createElement('tr');
  tableFoot.appendChild(footerRow);

  let firstCell = document.createElement('th');
  footerRow.appendChild(firstCell);
  firstCell.textContent = 'Totals';

  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < allStores.length; j++) {
      let data = allStores[j].cookieSales[i];
      hourlyTotal += data;
      grandTotal += data;
    }
    console.log(grandTotal);
    let totalCell = document.createElement('th');
    footerRow.appendChild(totalCell);
    totalCell.textContent = hourlyTotal;
  }

  let grandTotalCell = document.createElement('th');
  footerRow.appendChild(grandTotalCell);
  grandTotalCell.textContent = grandTotal;

}



//--------------------EVENT LISTENERS
//--------------------EVENT HANDLERS
//--------------------FUNCTION CALLS     

new StoreBuilding("Seattle", 23, 65, 6.3);
new StoreBuilding("Tokyo", 3, 24, 1.2);
new StoreBuilding("Dubai", 11, 38, 3.7);
new StoreBuilding("Paris", 20, 38, 2.3);
new StoreBuilding("Lima", 2, 16, 4.6);

generateStores();
makeHeader();
makeFooter();
console.log(allStores);

// **************************** ( lab09, start) **********************

let franchReport = document.getElementById('franchForm');

function handlesClick(event) {
  event.preventDefault();
  console.log(event);

  let location = event.target.location.value;
  console.log(location);

  let minCust = +event.target.minCust.value;
  console.log(minCust);

  let maxCust = +event.target.maxCust.value;
  console.log(maxCust);

  let avgCookiePerPerson = +event.target.avgCookiePerPerson.value;
  console.log(avgCookiePerPerson);

  let newStore = new StoreBuilding(location, minCust, maxCust, avgCookiePerPerson);
  allStores.push(newStore);
  
  newStore.getCustNum();
  newStore.getCookieNum();
  newStore.render();

  franchReport.reset();

}

franchReport.addEventListener('submit', handlesClick);

// function StoreBuilding(location, minCust, maxCust, avgCookiePerPerson) {
//   this.location = location;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookiePerPerson = avgCookiePerPerson;

//   this.cookieSales = [];
//   this.totalSales = 0;
//   allStores.push(this);
// }
// ***************************** ( lab09 constructor, moved up )

// let newStore = new StoreCreator(location, minCust, maxCust, avgCookiesBought);
// cookiesBought.push(newStore);

// ..................(ms. patterson's code, start)
//     let newKitten = new Kitten(kittyName, interests, isGoodWithCats, isGoodWithDogs,isGoodWithKids, photo);          <<< Kitten = function
//     kittenCaboodle.push(newKitten);  <<< kittenCaboodle = empty table
//     newKitten.getAge();
//     newKitten.render();
//   .................(ms. patterson's code, end)


// *************************** ( lab09, end ) *********************

 //************************* (stores) ********************
// let seattle = {
//   name: 'Seattle',
//   minHrCust: 23,
//   maxHrCust: 65,
//   avgCookiePerCust: 6.3,
//   cookiesSold: [],
//   totalCookies: 0,

// render: function () {
//   let tableElem = document.createElement('table');
//   salmonCookiesProfile.appendChild(tableElem);

//   let trElem = document.createElement('tr');
//   trElem.textContent = 'tr1Here';
//   tableElem.appendChild(trElem);

// let tr2Elem = document.createElement('tr');
// trElem.textContent = 'trElemHere';
// thElem.appendChild(tr2Elem);

// for (let i = 0; i < hours.length; i++) {
//   this.cookiesSold.push(Math.floor(randomHourlyCustomer(this.minHrCust, this.maxHrCust) * this.avgCookiePerCust));
//   let thElem = document.createElement('th');
//   thElem.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
//   trElem.appendChild(thElem);

//   this.totalCookies += this.cookiesSold[i];
// };

//     let totalLi = document.createElement('li');
//     totalLi.textContent = `Total: ${this.totalCookies}`;
//     articleElem.appendChild(totalLi);
//   }
// }

// let tokyo = {
//   name: 'Tokyo',
//   minHrCust: 3,
//   maxHrCust: 24,
//   avgCookiePerCust: 1.2,
//   cookiesSold: [],
//   totalCookies: 0,

//   render: function () {
//     let articleElem = document.createElement('article');
//     salmonCookiesProfile.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesSold.push(Math.floor(randomHourlyCustomer(this.minHrCust, this.maxHrCust) * this.avgCookiePerCust));
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
//       ulElem.appendChild(liElem);

//       this.totalCookies += this.cookiesSold[i];
//     };

//     let totalLi = document.createElement('li');
//     totalLi.textContent = `Total: ${this.totalCookies}`;
//     articleElem.appendChild(totalLi);
//   }
// }

// let dubai = {
//   name: 'Dubai',
//   minHrCust: 11,
//   maxHrCust: 38,
//   avgCookiePerCust: 3.7,
//   cookiesSold: [],
//   totalCookies: 0,

//   render: function () {
//     let articleElem = document.createElement('article');
//     salmonCookiesProfile.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesSold.push(Math.floor(randomHourlyCustomer(this.minHrCust, this.maxHrCust) * this.avgCookiePerCust));
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
//       ulElem.appendChild(liElem);

//       this.totalCookies += this.cookiesSold[i];
//     };

//     let totalLi = document.createElement('li');
//     totalLi.textContent = `Total: ${this.totalCookies}`;
//     articleElem.appendChild(totalLi);
//   }
// }

// let paris = {
//   name: 'Paris',
//   minHrCust: 20,
//   maxHrCust: 38,
//   avgCookiePerCust: 2.3,
//   cookiesSold: [],
//   totalCookies: 0,

//   render: function () {
//     let articleElem = document.createElement('article');
//     salmonCookiesProfile.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesSold.push(Math.floor(randomHourlyCustomer(this.minHrCust, this.maxHrCust) * this.avgCookiePerCust));
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
//       ulElem.appendChild(liElem);

//       this.totalCookies += this.cookiesSold[i];
//     };

//     let totalLi = document.createElement('li');
//     totalLi.textContent = `Total: ${this.totalCookies}`;
//     articleElem.appendChild(totalLi);
//   }
// }

// let lima = {
//   name: 'Lima',
//   minHrCust: 2,
//   maxHrCust: 16,
//   avgCookiePerCust: 4.6,
//   cookiesSold: [],
//   totalCookies: 0,

//   render: function () {
//     let articleElem = document.createElement('article');
//     salmonCookiesProfile.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesSold.push(Math.floor(randomHourlyCustomer(this.minHrCust, this.maxHrCust) * this.avgCookiePerCust));
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
//       ulElem.appendChild(liElem);

//       this.totalCookies += this.cookiesSold[i];
//     };

//     let totalLi = document.createElement('li');
//     totalLi.textContent = `Total: ${this.totalCookies}`;
//     articleElem.appendChild(totalLi);
//   }
// }

// // ******************* (renders and functions, start) **************
// seattle.render();
// console.log(seattle);
// tokyo.render();
// console.log(tokyo);
// dubai.render();
// console.log(dubai);
// paris.render();
// console.log(paris);
// lima.render();
// console.log(lima);

// function randomHourlyCustomer(minHrCust, maxHrCust) {
//   return Math.floor(Math.random() * (maxHrCust - minHrCust + 1) + minHrCust);
// }



// ******************** (renders and functions, end) ***************




