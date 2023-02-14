// create separate js object literals for each shop location

let seattle = {
  name: 'Seattle',
  minHrCust: 23,
  maxHrCust: 65,
  avgCookiePerCust: 6.3,
  cookiesBought: [],
  function randomHourlyCustomer(minHrCust,maxHrCust){
    return Math.floor(Math.random() * (maxHrCust - minHrCust +1) + min);
  }
   let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
};

let tokyo = {
  name: 'Tokyo',
  minHrCust: 23,
  maxHrCust: 65,
  avgCookiePerCust: 6.3,
  cookiesBought: [],
  generateCookies: function(){
    // calculation
  }
};

let dubai = {
  name: 'Dubai',
  minHrCust: 23,
  maxHrCust: 65,
  avgCookiePerCust: 6.3,
  cookiesBought: [],
  generateCookies: function(){
    // calculation
  }
};

let paris = {
  name: 'Paris',
  minHrCust: 23,
  maxHrCust: 65,
  avgCookiePerCust: 6.3,
  cookiesBought: [],
  generateCookies: function(){
    // calculation
  }
};

let lima = {
  name: 'Lima',
  minHrCust: 23,
  maxHrCust: 65,
  avgCookiePerCust: 6.3,
  cookiesBought: [],
  generateCookies: function(){
    // calculation
  }
};








// ********** GLOBALS **************

let kittenSection = document.getElementById('kitten-profiles');

console.dir(kittenSection);

// ********** HELPER FUNCTIONS/UTILITES *********

function randomAge(min,max){
  // got this from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ********** OBJECT LITERALS **********


let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['wet food', 'cat nip', 'mice toys'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/frankie.jpeg',
  getAge: function(){
    this.age = `${randomAge(3,12)} months`;
  },
  render: function(){
    // ***** DOM MANIPULATION *****

    // STEP 2: Create element
    let articleElem = document.createElement('article');
    // STEP 3: Add it to the dom
    kittenSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);


    // ! USEFUL FOR LAB
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let pElem = document.createElement('p');
    pElem.textContent = this.age;
    articleElem.appendChild(pElem);


    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    articleElem.appendChild(imgElem);
  }
};


let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['dry food', 'treats', 'fish toys'],
  isGoodWithCats: true,
  isGoodWithDogs: false,
  isGoodWithKids: false,
  photo: 'img/jumper.jpeg',
  randomAge: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAge: function(){
    this.age = `${this.randomAge(3,12)} months`;
  },
  render: function(){
    // ***** DOM MANIPULATION *****

    // STEP 2: Create element
    let articleElem = document.createElement('article');
    // STEP 3: Add it to the dom
    kittenSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let pElem = document.createElement('p');
    pElem.textContent = this.age;
    articleElem.appendChild(pElem);


    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    articleElem.appendChild(imgElem);
  }
};

let serena = {
  name: 'Serena',
  age: 0,
  interests: ['mice', 'lasers', 'hunting'],
  isGoodWithCats: false,
  isGoodWithDogs: false,
  isGoodWithKids: false,
  photo: 'img/serena.jpeg',
  randomAge: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAge: function(){
    this.age = `${this.randomAge(3,12)} months`;
  },
  render: function(){