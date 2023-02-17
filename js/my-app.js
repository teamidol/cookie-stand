//--------------------GLOBAL VARIABLES/IMPORTS

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
