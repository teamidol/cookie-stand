'use strict'
// ***************** GLOBALS ******************
let salmonCookiesProfile = document.getElementById('salmon-cookies-profiles');

console.dir(salmonCookiesProfile);



// function randomHourlyCustomer(this.minHrCust, this.maxHrCust) {
//   return Math.floor(Math.random() * (this.maxHrCust - this.minHrCust + 1) + this.minHrCust);
// }






// let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];


// // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ( my code ) ^^^^^^^^^^^^^^^^^^^


// let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.interests.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = this.interests[i];
//       ulElem.appendChild(liElem);
//     }

//     let pElem = document.createElement('p');
//     pElem.textContent = this.age;
//     articleElem.appendChild(pElem);


//     let imgElem = document.createElement('img');
//     imgElem.src = this.photo;
//     imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     articleElem.appendChild(imgElem);


// // vvvvvvvvvvvvvvvvvvvvvv ( my code ) vvvvvvvvvvvvvvvvvvvvvv    

let seattle = {
  name: 'Seattle',
  minHrCust: 23,
  maxHrCust: 65,
  avgCookiePerCust: 6.3,
  let hours =['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  render: function () {
    let articleElem = document.createElement('article');
    salmonCookiesProfile.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.hours[i];
      ulElem.appendChild(liElem);

  // randomHourlyCustomer(this.minHrCust, this.maxHrCust);
    }
  }
};

// calculation this.cookiesBought.push();

// let tokyo = {
//   name: 'Tokyo',
//   minHrCust: 3,
//   maxHrCust: 24,
//   avgCookiePerCust: 1.2,
//   cookiesBought: [],
//   render: function () {
//     let articleElem = document.createElement('article');
//     salmonCookiesProfile.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);
//   }

// };

// **************** EXECUTABLE CODE *******************
seattle.render();
console.log(seattle);
// tokyo.render();
// console.log(tokyo);
// dubai.render();
// console.log(dubai);
// paris.render();
// console.log(paris);
// lima.render();
// console.log(lima);






// // vvvvvvvvvvvvvvvvvvvvvv ( lecture notes ) vvvvvvvvvvvvvvvvvvvvv



// // ********** GLOBALS **************

// let kittenSection = document.getElementById('kitten-profiles');

// console.dir(kittenSection);

// // ********** HELPER FUNCTIONS/UTILITES *********

// function randomAge(min,max){
//   // got this from MDN docs
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // ********** OBJECT LITERALS **********


// let frankie = {
//   name: 'Frankie',
//   age: 0,
//   interests: ['wet food', 'cat nip', 'mice toys'],
//   isGoodWithCats: true,
//   isGoodWithDogs: true,
//   isGoodWithKids: true,
//   photo: 'img/frankie.jpeg',
//   getAge: function(){
//     this.age = `${randomAge(3,12)} months`;
//   },
//   render: function(){
//     // ***** DOM MANIPULATION *****

//     // STEP 2: Create element
//     let articleElem = document.createElement('article');
//     // STEP 3: Add it to the dom
//     kittenSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);


//     // ! USEFUL FOR LAB
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.interests.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = this.interests[i];
//       ulElem.appendChild(liElem);
//     }

//     let pElem = document.createElement('p');
//     pElem.textContent = this.age;
//     articleElem.appendChild(pElem);


//     let imgElem = document.createElement('img');
//     imgElem.src = this.photo;
//     imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     articleElem.appendChild(imgElem);
//   }
// };


// let jumper = {
//   name: 'Jumper',
//   age: 0,
//   interests: ['dry food', 'treats', 'fish toys'],
//   isGoodWithCats: true,
//   isGoodWithDogs: false,
//   isGoodWithKids: false,
//   photo: 'img/jumper.jpeg',
//   randomAge: function(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   getAge: function(){
//     this.age = `${this.randomAge(3,12)} months`;
//   },
//   render: function(){
//     // ***** DOM MANIPULATION *****

//     // STEP 2: Create element
//     let articleElem = document.createElement('article');
//     // STEP 3: Add it to the dom
//     kittenSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.interests.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = this.interests[i];
//       ulElem.appendChild(liElem);
//     }

//     let pElem = document.createElement('p');
//     pElem.textContent = this.age;
//     articleElem.appendChild(pElem);


//     let imgElem = document.createElement('img');
//     imgElem.src = this.photo;
//     imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     articleElem.appendChild(imgElem);
//   }
// };

// let serena = {
//   name: 'Serena',
//   age: 0,
//   interests: ['mice', 'lasers', 'hunting'],
//   isGoodWithCats: false,
//   isGoodWithDogs: false,
//   isGoodWithKids: false,
//   photo: 'img/serena.jpeg',
//   randomAge: function(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   getAge: function(){
//     this.age = `${this.randomAge(3,12)} months`;
//   },
//   render: function(){