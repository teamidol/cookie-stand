'use strict'

let salmonCookiesProfile = document.getElementById('salmon-cookies-profile');

console.dir(salmonCookiesProfile);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//  ************************* (stores) ********************
let seattle = {
  name: 'Seattle',
  minHrCust: 23,
  maxHrCust: 65,
  avgCookiePerCust: 6.3,
  cookiesSold: [],
  totalCookies: 0,

  render: function () {
    let articleElem = document.createElement('article');
    salmonCookiesProfile.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      this.cookiesSold.push(Math.floor(randomHourlyCustomer(this.minHrCust, this.maxHrCust) * this.avgCookiePerCust));
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
      ulElem.appendChild(liElem);
      
      this.totalCookies += this.cookiesSold[i];
    };
    
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.totalCookies}`;
    articleElem.appendChild(totalLi);
  }
}

let tokyo = {
  name: 'Tokyo',
  minHrCust: 3,
  maxHrCust: 24,
  avgCookiePerCust: 1.2,
  cookiesSold: [],
  totalCookies: 0,

  render: function () {
    let articleElem = document.createElement('article');
    salmonCookiesProfile.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    
    for (let i = 0; i < hours.length; i++) {
      this.cookiesSold.push(Math.floor(randomHourlyCustomer(this.minHrCust, this.maxHrCust) * this.avgCookiePerCust));
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
      ulElem.appendChild(liElem);
      
      this.totalCookies += this.cookiesSold[i];
    };
    
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.totalCookies}`;
    articleElem.appendChild(totalLi);
  }
}

let dubai = {
  name: 'Dubai',
  minHrCust: 11,
  maxHrCust: 38,
  avgCookiePerCust: 3.7,
  cookiesSold: [],
  totalCookies: 0,

  render: function () {
    let articleElem = document.createElement('article');
    salmonCookiesProfile.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      this.cookiesSold.push(Math.floor(randomHourlyCustomer(this.minHrCust, this.maxHrCust) * this.avgCookiePerCust));
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
      ulElem.appendChild(liElem);

      this.totalCookies += this.cookiesSold[i];
    };

    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.totalCookies}`;
    articleElem.appendChild(totalLi);
  }
}

let paris = {
  name: 'Paris',
  minHrCust: 20,
  maxHrCust: 38,
  avgCookiePerCust: 2.3,
  cookiesSold: [],
  totalCookies: 0,

  render: function () {
    let articleElem = document.createElement('article');
    salmonCookiesProfile.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      this.cookiesSold.push(Math.floor(randomHourlyCustomer(this.minHrCust, this.maxHrCust) * this.avgCookiePerCust));
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
      ulElem.appendChild(liElem);

      this.totalCookies += this.cookiesSold[i];
    };

    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.totalCookies}`;
    articleElem.appendChild(totalLi);
  }
}

let lima = {
  name: 'Lima',
  minHrCust: 2,
  maxHrCust: 16,
  avgCookiePerCust: 4.6,
  cookiesSold: [],
  totalCookies: 0,

  render: function () {
    let articleElem = document.createElement('article');
    salmonCookiesProfile.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      this.cookiesSold.push(Math.floor(randomHourlyCustomer(this.minHrCust, this.maxHrCust) * this.avgCookiePerCust));
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
      ulElem.appendChild(liElem);

      this.totalCookies += this.cookiesSold[i];
    };

    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.totalCookies}`;
    articleElem.appendChild(totalLi);
  }
}

// ******************* (renders and functions, start) **************
seattle.render();
console.log(seattle);
tokyo.render();
console.log(tokyo);
dubai.render();
console.log(dubai);
paris.render();
console.log(paris);
lima.render();
console.log(lima);

function randomHourlyCustomer(minHrCust, maxHrCust) {
  return Math.floor(Math.random() * (maxHrCust - minHrCust + 1) + minHrCust);
}



// ******************** (renders and functions, end) ***************



