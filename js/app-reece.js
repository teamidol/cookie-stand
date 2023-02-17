// //***********************************  (reece's code, start)

// // ****** GLOBAL VARIABLES *****
// // store all store objects

// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm'];


// let salesSection = document.getElementById('salmon-cookies-profile'); // window to the dom

// // salmonImg(); // prints salmon to page MAKE SURE ABOVE THE TABLE ELEMENT CREATION TO KEEP IMG ABOVE
// let tableElem = document.createElement('table');
// salesSection.appendChild(tableElem);

// // ******** CONSTRUCTOR ********
// function StoreCreator(name, minCust, maxCust, avgCookiesBought) {
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookiesBought = avgCookiesBought;
//   this.cookiesBought = [];
//   this.dailyTotal = 0;
// }
// // creates new objects by using constructor above
// let seattle = new StoreCreator('Seattle', 23, 65, 6.3);
// let tokyo = new StoreCreator('Tokyo', 3, 24, 1.2);
// let dubai = new StoreCreator('Dubai', 11, 38, 3.7);
// let paris = new StoreCreator('Paris', 20, 38, 2.3);
// let lima = new StoreCreator('Lima', 2, 16, 4.6);

// let storeLocations = [seattle, tokyo, dubai, paris, lima];
// //********* HELPER FUNCTIONS  ***********/
// // // todo: create header and footer row functions as stand alone functions, header will be the times
// // for loop to invoke each function needed and render to page
// function renderAll() {
//   for (let i = 0; i < storeLocations.length; i++) {
//     storeLocations[i].custNum();
//     storeLocations[i].cookieNum();
//     storeLocations[i].render();
//   }
// }

// function tableHeader() {
//   let trElem = document.createElement('tr'); // row attaches to table
//   tableElem.appendChild(trElem);

//   let thElem = document.createElement('th'); // th attaches to row
//   trElem.appendChild(thElem);


//   for (let i = 0; i < hours.length; i++) {
//     let tdElem = document.createElement('td'); // td attaches to TR
//     tdElem.textContent = hours[i];
//     trElem.appendChild(tdElem);
//   }

//   let td2Elem = document.createElement('td');
//   td2Elem.textContent = 'Daily Location Total';
//   trElem.appendChild(td2Elem);

// }
// // // todo: FOOTER for table is going to have to have 2 for loops that iterate over the cookies by hour AND the store location to then be stored by the hour index position and have to sum the cookies for each location at that hour I think
// function tableFooter() {
//   let tfooter = document.createElement('tfoot'); // th attaches to row
//   tableElem.appendChild(tfooter);

//   let footRow = document.createElement('tr');
//   tfooter.appendChild(footRow);

//   let footCell = document.createElement('td');
//   footCell.textContent = 'Hourly Total:';

//   footRow.appendChild(footCell);
//   let grandTotal = 0; // DOES NOT RESET ON LOOP COMPLETION, HOLDS ALL VALUES to print grand total
//   for (let i = 0; i < hours.length; i++) {
//     let totalHourly = 0; // resets to 0 on j loop completion on each iteration
//     for (let j = 0; j < storeLocations.length; j++) {
//       totalHourly += storeLocations[j].cookiesBought[i];
//       grandTotal += storeLocations[j].cookiesBought[i];
//     }
//     let totalElem = document.createElement('td');
//     totalElem.textContent = totalHourly;
//     footRow.appendChild(totalElem);
//   }
//   let grandTotalCell = document.createElement('td');
//   grandTotalCell.textContent = grandTotal;
//   footRow.appendChild(grandTotalCell);
//   console.log(grandTotal);
// }

// // ******* PROTOTYPE METHODS *********

// StoreCreator.prototype.custNum = function () {
//   return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
// };

// StoreCreator.prototype.cookieNum = function () {
//   for (let i = 0; i < hours.length; i++) {
//     let cookieCount = Math.floor(this.custNum() * this.avgCookiesBought);
//     this.cookiesBought.push(cookieCount);
//     this.dailyTotal += cookieCount;
//   }
// };
// // // TODO UPDATE ELEMENTS TO BE TABLES
// StoreCreator.prototype.render = function () {

//   // !! Syntax for appendChild
//   // !! elementToBeTheParent.appendChild(elementToBecomeChild);
//   //empty row being attached to table
//   let trElem = document.createElement('tr');
//   tableElem.appendChild(trElem);
//   // th attaches to row, creating the Store names, Seattle, Tokyo etc.
//   let thElem = document.createElement('th');
//   thElem.textContent = this.name;
//   trElem.appendChild(thElem);

//   // td attaches to TR, this generates the cookies bought across the row
//   for (let i = 0; i < this.cookiesBought.length; i++) {
//     let tdElem = document.createElement('td');
//     tdElem.textContent = this.cookiesBought[i];
//     trElem.appendChild(tdElem);
//   }
//   // new td element to create
//   let td2Elem = document.createElement('td');
//   td2Elem.textContent = this.dailyTotal;
//   trElem.appendChild(td2Elem);

// };


// // ***** NEW CONSTRUCTOR EXECUTABLE CODE ****
// console.log(storeLocations);
// tableHeader();
// renderAll();
// tableFooter();



// // ********************************* ( reece code, end)**************************************