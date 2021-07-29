//Query selectors 
//Preference section selectors
const arrows = document.querySelectorAll('.preference-arrow');
const prefHeading = document.querySelectorAll('.preference-heading');
const headingContainer = document.querySelectorAll('.preference-heading-container')
const prefsContainer = document.querySelectorAll('.preference-selection-container');
const prefContainer = document.querySelectorAll('.preference-container');
const prefItem = document.querySelectorAll('.preference-selection-item')
//Order section selectors
const orderSummary = document.querySelector('.order-summary-content');
const orderButton = document.querySelector('.order-button');

//Function to rotate arrows
const rotateArrow = () => arrows.forEach(arrow => {
    arrow.classList.toggle('rotate');
})

//Accordion for preferences
headingContainer.forEach(container => {
    container.addEventListener('click', () => {
        container.nextElementSibling.classList.toggle('show');
        container.children[1].classList.toggle('rotate')
    })
})

//Hides all preferences
for(let i = 0; i < headingContainer.length; i++) {
    headingContainer[i].nextElementSibling.classList.add('hide')
}

const options = {
    brewType: ['capsule', 'filter', 'espresso'],
    coffeeType: ['single origin', 'decaf', 'blended'],
    coffeeAmount: ['250g', '500g', '1000g'],
    grindType: ['wholebean', 'filter', 'cafetiére'],
    deliverFreq: ['every week', 'every 2 weeks', 'every month'],
    price: ['$14.00', '$17.25', '$22.50']
};

//Order Sentence
const initialSentence = () => {
    orderSummary.innerHTML = `
        <h5 class="order-summary-heading">Order Summary</h5>
        <p class=order-summary-paragraph>"I drink my coffee <span class="order-span">...</span>, 
        with a <span class="order-span">...</span> type of bean. <span class="order-span">...</span> ground 
        ala <span class="order-span">...</span>, sent to me <span class="order-span">...</span>."</p>  `
}

initialSentence();


//Order Summary constructor
const orderPara = (drinkType, coffeeType, amount, grinds, frequency) => {
   orderSummary.innerHTML = `
    <h5 class="order-summary-heading">Order Summary</h5>
    <p class=order-summary-paragraph>"I drink my coffee <span class="order-span">${drinkType}</span>, 
    with a <span class="order-span">${coffeeType}</span> type of bean. <span class="order-span">${amount}</span> ground 
    ala <span class="order-span">${grinds}</span>, sent to me <span class="order-span">${frequency}</span>."</p>
    `
}

//checkout
let total;

//Drink Types
const capsule = document.querySelector('#capsule');
const filter = document.querySelector('#filter');
const espresso = document.querySelector('#espresso');

capsule.addEventListener('click', () => {
    capsule.classList.toggle('color');
    filter.classList.remove('color');
    espresso.classList.remove('color');
    drinkType = 'capsule';
    orderPara(drinkType);
});

filter.addEventListener('click', () => {
    filter.classList.toggle('color')
    capsule.classList.remove('color')
    espresso.classList.remove('color')
    drinkType = 'filter'
    orderPara(drinkType)
});

espresso.addEventListener('click', () => {
    espresso.classList.toggle('color')
    filter.classList.remove('color')
    capsule.classList.remove('color')
    drinkType = 'espresso'
    orderPara(drinkType)
});

//Coffee Types
const singleOrigin = document.querySelector('#single-origin');
const decaf = document.querySelector('#decaf');
const blended = document.querySelector('#blended');

singleOrigin.addEventListener('click', () => {
    singleOrigin.classList.toggle('color')
    decaf.classList.remove('color')
    blended.classList.remove('color')
    coffeeType = 'single origin'
    orderPara(drinkType, coffeeType)
});

decaf.addEventListener('click', () => {
    decaf.classList.toggle('color')
    singleOrigin.classList.remove('color')
    blended.classList.remove('color')
    coffeeType = 'decaf'
    orderPara(drinkType, coffeeType)
});

blended.addEventListener('click', () => {
    blended.classList.toggle('color')
    singleOrigin.classList.remove('color')
    decaf.classList.remove('color')
    coffeeType = 'blended'
    orderPara(drinkType, coffeeType)
});

//Amounts
const quarter = document.querySelector('#quarter');
const half = document.querySelector('#half');
const full = document.querySelector('#full');

quarter.addEventListener('click', () => {
    quarter.classList.toggle('color');
    half.classList.remove('color');
    full.classList.remove('color');
    amount = '250g'
    orderPara(drinkType, coffeeType, amount)
});

half.addEventListener('click', () => {
    half.classList.toggle('color');
    quarter.classList.remove('color');
    full.classList.remove('color');
    amount = '500g'
    orderPara(drinkType, coffeeType, amount)
});

full.addEventListener('click', () => {
    full.classList.toggle('color');
    half.classList.remove('color');
    quarter.classList.remove('color');
    amount = '1000g'
    orderPara(drinkType, coffeeType, amount)
});

//Grinds 
const wholeBean = document.querySelector('#whole-bean');
const filterGrind = document.querySelector('#filter-grind');
const cafetiere = document.querySelector('#cafetiere');

wholeBean.addEventListener('click', () => {
    wholeBean.classList.toggle('color');
    filterGrind.classList.remove('color');
    cafetiere.classList.remove('color');
    grinds = 'whole bean'
    orderPara(drinkType, coffeeType, amount, grinds)
});

filterGrind.addEventListener('click', () => {
    filterGrind.classList.toggle('color');
    wholeBean.classList.remove('color');
    cafetiere.classList.remove('color');
    grinds = 'filter'
    orderPara(drinkType, coffeeType, amount, grinds)
});

cafetiere.addEventListener('click', () => {
    cafetiere.classList.toggle('color');
    filterGrind.classList.remove('color');
    wholeBean.classList.remove('color');
    grinds = 'cafetiere'
    orderPara(drinkType, coffeeType, amount, grinds)
});

//Deliveries
const weekly = document.querySelector('#weekly');
const biWeekly = document.querySelector('#bi-weekly');
const monthly = document.querySelector('#monthly');

weekly.addEventListener('click', () => {
    weekly.classList.toggle('color');
    biWeekly.classList.remove('color');
    monthly.classList.remove('color');
    frequency = 'every week'
    orderPara(drinkType, coffeeType, amount, grinds, frequency)
    total = 14;
    console.log(total)
});

biWeekly.addEventListener('click', () => {
    biWeekly.classList.toggle('color');
    weekly.classList.remove('color');
    monthly.classList.remove('color');
    frequency = 'every 2 weeks'
    orderPara(drinkType, coffeeType, amount, grinds, frequency)
    total = 17.25
});

monthly.addEventListener('click', () => {
    monthly.classList.toggle('color');
    biWeekly.classList.remove('color');
    weekly.classList.remove('color');
    frequency = 'every month'
    orderPara(drinkType, coffeeType, amount, grinds, frequency)
    total = 22.50
});


// TODO:

// 1. hide and show selections on click, rotate arrow accordingly **DONE**
// 2. change color of selections on hover **DONE**
// 3. populate order summary with selections that are selected  
// 4. create modal/order confirmation
/* 5. create mobile navigation. **DONE but need to fix media query- 
bug where navlist is still open on resize or when changing page ** */
