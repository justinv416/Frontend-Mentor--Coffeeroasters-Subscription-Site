// Heading Container
const headingContainer = document.querySelectorAll('.preference-heading-container');
//Hides all preferences
for(let i = 0; i < headingContainer.length; i++) {
    headingContainer[i].nextElementSibling.classList.add('hide');
};

//Accordion for preferences
headingContainer.forEach(container => {
    container.addEventListener('click', () => {
        container.nextElementSibling.classList.toggle('show');
        container.children[1].classList.toggle('rotate');
    });
});

const options = {
    brewType: ['capsule', 'filter', 'espresso'],
    coffeeType: ['single origin', 'decaf', 'blended'],
    coffeeAmount: ['250g', '500g', '1000g'],
    grindType: ['wholebean', 'filter', 'cafetiére'],
    deliverFreq: ['every week', 'every 2 weeks', 'every month'],
    price: [14.00, 17.25, 22.50]
};

let drinkType = '...',
    coffeeType = '...',
    amount = '...',
    grinds = '...',
    frequency = '...';


const orderSummary = document.querySelector('.order-summary-content');
//Order Summary constructor
const orderPara = () => {
   orderSummary.innerHTML = `
    <h5 class="order-summary-heading">Order Summary</h5>
    <p class=order-summary-paragraph>"I drink my coffee <span class="order-span">${drinkType}</span>, 
    with a <span class="order-span">${coffeeType}</span> type of bean. <span class="order-span">${amount}</span> ground 
    ala <span class="order-span">${grinds}</span>, sent to me <span class="order-span">${frequency}</span>."</p>
    `
}

orderPara()

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
    drinkType = options.brewType[0];
    orderPara();
});

filter.addEventListener('click', () => {
    filter.classList.toggle('color')
    capsule.classList.remove('color')
    espresso.classList.remove('color')
    drinkType = options.brewType[1];
    orderPara();
});

espresso.addEventListener('click', () => {
    espresso.classList.toggle('color')
    filter.classList.remove('color')
    capsule.classList.remove('color')
    drinkType = options.brewType[2]
    orderPara();
});

//Coffee Types
const singleOrigin = document.querySelector('#single-origin');
const decaf = document.querySelector('#decaf');
const blended = document.querySelector('#blended');

singleOrigin.addEventListener('click', () => {
    singleOrigin.classList.toggle('color')
    decaf.classList.remove('color')
    blended.classList.remove('color')
    coffeeType = options.coffeeType[0]
    orderPara()
});

decaf.addEventListener('click', () => {
    decaf.classList.toggle('color')
    singleOrigin.classList.remove('color')
    blended.classList.remove('color')
    coffeeType = options.coffeeType[1]
    orderPara()
});

blended.addEventListener('click', () => {
    blended.classList.toggle('color')
    singleOrigin.classList.remove('color')
    decaf.classList.remove('color')
    coffeeType = options.coffeeType[2]
    orderPara()
});

//Amounts
const quarter = document.querySelector('#quarter');
const half = document.querySelector('#half');
const full = document.querySelector('#full');

quarter.addEventListener('click', () => {
    quarter.classList.toggle('color');
    half.classList.remove('color');
    full.classList.remove('color');
    amount = options.coffeeAmount[0]
    orderPara()
});

half.addEventListener('click', () => {
    half.classList.toggle('color');
    quarter.classList.remove('color');
    full.classList.remove('color');
    amount = options.coffeeAmount[1]
    orderPara()
});

full.addEventListener('click', () => {
    full.classList.toggle('color');
    half.classList.remove('color');
    quarter.classList.remove('color');
    amount = options.coffeeAmount[2]
    orderPara()
});

//Grinds 
const wholeBean = document.querySelector('#whole-bean');
const filterGrind = document.querySelector('#filter-grind');
const cafetiere = document.querySelector('#cafetiere');

wholeBean.addEventListener('click', () => {
    wholeBean.classList.toggle('color');
    filterGrind.classList.remove('color');
    cafetiere.classList.remove('color');
    grinds = options.grindType[0]
    orderPara()
});

filterGrind.addEventListener('click', () => {
    filterGrind.classList.toggle('color');
    wholeBean.classList.remove('color');
    cafetiere.classList.remove('color');
    grinds = options.grindType[1]
    orderPara()
});

cafetiere.addEventListener('click', () => {
    cafetiere.classList.toggle('color');
    filterGrind.classList.remove('color');
    wholeBean.classList.remove('color');
    grinds = options.grindType[2]
    orderPara()
});

//Deliveries
const weekly = document.querySelector('#weekly');
const biWeekly = document.querySelector('#bi-weekly');
const monthly = document.querySelector('#monthly');

weekly.addEventListener('click', () => {
    weekly.classList.toggle('color');
    biWeekly.classList.remove('color');
    monthly.classList.remove('color');
    frequency = options.deliverFreq[0]
    orderPara()
    total = 14.00;
    displayTotal()
    console.log(total)
});

biWeekly.addEventListener('click', () => {
    biWeekly.classList.toggle('color');
    weekly.classList.remove('color');
    monthly.classList.remove('color');
    frequency = options.deliverFreq[1]
    orderPara()
    total = 17.25
    displayTotal()
});

monthly.addEventListener('click', () => {
    monthly.classList.toggle('color');
    biWeekly.classList.remove('color');
    weekly.classList.remove('color');
    frequency = options.deliverFreq[2]
    orderPara()
    total = 22.
    displayTotal()
});

const orderButton = document.querySelector('.order-button');
const overlay = document.querySelector('.overlay');
// Click event listener to toggle overlay
orderButton.addEventListener('click', () => {
    overlay.classList.toggle('visible')
    checkoutFinal()
})

// Html for checkout summary
const checkoutSummary = document.querySelector('.checkout-summary');
const checkoutFinal = () => {
    checkoutSummary.innerHTML =  `
    <p class=checkout-summary-paragraph>"I drink my coffee <span class="order-span">${drinkType}</span>, 
    with a <span class="order-span">${coffeeType}</span> type of bean. <span class="order-span">${amount}</span> ground 
    ala <span class="order-span">${grinds}</span>, sent to me <span class="order-span">${frequency}</span>."</p>
    `
}


//Function to display price for checkout 
const planPrice = document.querySelector('.checkout-total');
const displayTotal = () => {
    planPrice.innerHTML = `$${total} / mo`
}

// Event listener to toggle overlay on checkout button.
const checkoutBtn = document.querySelector('.checkout-finalize-button');
checkoutBtn.addEventListener('click', () => {
    overlay.classList.toggle('visible');
})

// TODO:

// 1. hide and show selections on click, rotate arrow accordingly **DONE**
// 2. change color of selections on hover **DONE**
// 3. populate order summary with selections that are selected  **DONE**
// 4. create modal/order confirmation **DONE**
/* 5. create mobile navigation. **DONE but need to fix media query- 
bug where navlist is still open on resize or when changing page ** */
