// Shows drink preference container and rotate arrow 180deg
const drinkPreferences = document.querySelector('#preferences');
const arrows = document.querySelectorAll('.preference-arrow')
drinkPreferences.classList.add('show');
arrows[0].classList.add('rotate');

// Hides all other containers
const headingContainer = document.querySelectorAll('.preference-heading-container');
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
    price: {
        priceWeekly: [7.20, 13.00, 22.00],
        priceBiWeekly: [9.60, 17.00, 32.00],
        priceMonthly: [12.00, 22.00, 42.00]
    }
};

const weeklyParagraph = document.querySelector('#weekly-price');
const biWeeklyParagraph = document.querySelector('#bi-weekly-price');
const monthlyParagraph = document.querySelector('#monthly-price');

let total;

//Order Summary constructor
const orderSummary = document.querySelector('.order-summary-content');
let drinkType = '...',
    coffeeType = '...',
    amount = '...',
    grinds = '...',
    frequency = '...';

// Initial Sentence 
const orderPara = () => {
   orderSummary.innerHTML = `
    <h5 class="order-summary-heading">Order Summary</h5>
    <p class=order-summary-paragraph>"I drink my coffee as <span class="order-span">${drinkType}</span>, 
    with a <span class="order-span">${coffeeType}</span> type of bean. <span class="order-span">${amount}</span> ground 
    ala <span class="order-span">${grinds}</span>, sent to me <span class="order-span">${frequency}</span>."</p>
    `
}

orderPara()

// Sentence for capsule selection
const capsuleOption = () => {
    orderSummary.innerHTML = `
    <h5 class="order-summary-heading">Order Summary</h5>
    <p class=order-summary-paragraph>"I drink my coffee using <span class="order-span">${drinkType}s</span>, 
    with a <span class="order-span">${coffeeType}</span> type of bean. <span class="order-span">${amount}</span>, sent to me <span class="order-span">${frequency}</span>."</p>
    `
}

// Html for checkout summary
const checkoutSummary = document.querySelector('.checkout-summary');
const checkoutModal = () => {
    if (capsuleCheck) {
        checkoutSummary.innerHTML = `
        <p class=checkout-summary-paragraph>"I drink my coffee using <span class="order-span">${drinkType}s</span>, 
        with a <span class="order-span">${coffeeType}</span> type of bean. <span class="order-span">${amount}</span>, sent to me <span class="order-span">${frequency}</span>."</p>
        `
    } else {
        checkoutSummary.innerHTML =  `
        <p class=checkout-summary-paragraph>"I drink my coffee <span class="order-span">${drinkType}</span>, 
        with a <span class="order-span">${coffeeType}</span> type of bean. <span class="order-span">${amount}</span> ground 
        ala <span class="order-span">${grinds}</span>, sent to me <span class="order-span">${frequency}</span>."</p>
        `
    };
};

let priceOutput =  document.querySelectorAll('.price-output');
console.log(priceOutput)

// Sets all intial preferences to false
let drinkPreference = false;
let coffeePreference = false;
let amountPreference = false;
let grindPreference = false;
let deliverPreference = false;
const grindOption = document.querySelector('#grind-option')

// Disables 'create plan' button on bottom
const orderButton = document.querySelector('.order-button');
orderButton.classList.add('disabled');

// Function to check to see if all options are selected. 
// Once all options are valid the 'create plan' button is enabled.
const checkPreferences = () => {
    if (drinkPreference && coffeePreference && 
        amountPreference && grindPreference && deliverPreference) {
        orderButton.classList.remove('disabled');
        orderButton.classList.add('color');
    } else if (drinkPreference && coffeePreference 
        && amountPreference && deliverPreference) {
        orderButton.classList.remove('disabled');
        orderButton.classList.add('color');
    } else if (!drinkPreference && !coffeePreference &&
        !amountPreference && !grindPreference && !deliverPreference) {
        orderButton.classList.remove('color');
    }
}

//Drink Types
const capsule = document.querySelector('#capsule');
const filter = document.querySelector('#filter');
const espresso = document.querySelector('#espresso');

// Sets capsule selection to false
let capsuleCheck = false;

capsule.addEventListener('click', () => {
    capsuleCheck = true;
    grindOption.classList.add('disabled')
    grindOption.children[1].classList.remove('show')
    grindOption.children[1].classList.add('hide')
    console.log(grindOption.children[1])
    drinkPreference = true;
    capsule.classList.toggle('color');
    filter.classList.remove('color');
    espresso.classList.remove('color');
    drinkType = options.brewType[0];
    capsuleOption();
    checkPreferences();
});

filter.addEventListener('click', () => {
    capsuleCheck = false;
    grindOption.classList.remove('disabled');
    drinkPreference = true;
    filter.classList.toggle('color')
    capsule.classList.remove('color')
    espresso.classList.remove('color')
    drinkType = options.brewType[1];
    orderPara();
    checkPreferences();
});

espresso.addEventListener('click', () => {
    capsuleCheck = false;
    grindOption.classList.remove('disabled');
    drinkPreference = true;
    espresso.classList.toggle('color')
    filter.classList.remove('color')
    capsule.classList.remove('color')
    drinkType = options.brewType[2];
    orderPara();
    checkPreferences();
});

//Coffee Types
const singleOrigin = document.querySelector('#single-origin');
const decaf = document.querySelector('#decaf');
const blended = document.querySelector('#blended');

singleOrigin.addEventListener('click', () => {
    coffeePreference = true;
    singleOrigin.classList.toggle('color')
    decaf.classList.remove('color')
    blended.classList.remove('color')
    coffeeType = options.coffeeType[0];
    // isCapsuleCheck();
    checkPreferences();
});

decaf.addEventListener('click', () => {
    coffeePreference = true;
    decaf.classList.toggle('color')
    singleOrigin.classList.remove('color')
    blended.classList.remove('color')
    coffeeType = options.coffeeType[1];
    checkPreferences();
});

blended.addEventListener('click', () => {
    coffeePreference = true;
    blended.classList.toggle('color')
    singleOrigin.classList.remove('color')
    decaf.classList.remove('color')
    coffeeType = options.coffeeType[2]
    checkPreferences();
});

//Amounts
const quarter = document.querySelector('#quarter');
const half = document.querySelector('#half');
const full = document.querySelector('#full');
let isQuarter, isHalf, isFull;
let isWeekly, isBiWeekly, isMonthly;

// this is causing issues on the modal page
const amountCheckWeekly = () => {
    if(isQuarter && isWeekly) {
        total = options.price.priceWeekly[0];
        console.log(total)
    } else if(isHalf && isWeekly) {
        total = options.price.priceWeekly[1];
        console.log(total)
    } else if (isFull && isWeekly) {
        total = options.price.priceWeekly[2];
        console.log(total)
    }
}
const amountCheckBiWeekly = () => {
    if(isQuarter && isBiWeekly) {
        total = options.price.priceBiWeekly[0];
    } else if(isHalf && isBiWeekly) {
        total = options.price.priceBiWeekly[1];
    } else if (isFull && isBiWeekly) {
        total = options.price.priceBiWeekly[2];
    }
}
const amountCheckMonthly = () => {
    if(isQuarter && isMonthly) {
        total = options.price.priceMonthly[0];
    } else if(isHalf && isMonthly) {
        total = options.price.priceMonthly[1];
    } else if (isFull && isMonthly) {
        total = options.price.priceMonthly[2];
    }
}


quarter.addEventListener('click', () => {
    isQuarter = true;
    isHalf = false;
    isFull = false;
    amountPreference = true;
    quarter.classList.toggle('color');
    half.classList.remove('color');
    full.classList.remove('color');
    amount = options.coffeeAmount[0];

    checkPreferences();
    console.log(total)
    // Maybe a for loop to refactor
    weeklyParagraph.textContent = `$${options.price.priceWeekly[0]}`;
    biWeeklyParagraph.textContent = `$${options.price.priceBiWeekly[0]}`;
    monthlyParagraph.textContent = `$${options.price.priceMonthly[0]}`;
});

half.addEventListener('click', () => {
    isQuarter = false;
    isHalf = true;
    isFull = false;
    console.log(isQuarter, isHalf)
    amountPreference = true;
    half.classList.toggle('color');
    quarter.classList.remove('color');
    full.classList.remove('color');
    amount = options.coffeeAmount[1];
    checkPreferences();
    console.log(total)
    weeklyParagraph.textContent = `$${options.price.priceWeekly[1]}`;
    biWeeklyParagraph.textContent = `$${options.price.priceBiWeekly[1]}`;
    monthlyParagraph.textContent = `$${options.price.priceMonthly[1]}`;
});

full.addEventListener('click', () => {
    isQuarter = false;
    isHalf = false;
    isFull = true;
    console.log(isQuarter, isHalf, isFull)
    amountPreference = true;
    full.classList.toggle('color');
    half.classList.remove('color');
    quarter.classList.remove('color');
    amount = options.coffeeAmount[2];
    checkPreferences();
    console.log(total)
    weeklyParagraph.textContent = `$${options.price.priceWeekly[2]}`;
    biWeeklyParagraph.textContent = `$${options.price.priceBiWeekly[2]}`;
    monthlyParagraph.textContent = `$${options.price.priceMonthly[2]}`;
});



//Grinds 
const wholeBean = document.querySelector('#whole-bean');
const filterGrind = document.querySelector('#filter-grind');
const cafetiere = document.querySelector('#cafetiere');

wholeBean.addEventListener('click', () => {
    grindPreference = true;
    wholeBean.classList.toggle('color');
    filterGrind.classList.remove('color');
    cafetiere.classList.remove('color');
    grinds = options.grindType[0]
    orderPara();
    checkPreferences();
});

filterGrind.addEventListener('click', () => {
    grindPreference = true;
    filterGrind.classList.toggle('color');
    wholeBean.classList.remove('color');
    cafetiere.classList.remove('color');
    grinds = options.grindType[1]
    orderPara();
    checkPreferences();
});

cafetiere.addEventListener('click', () => {
    grindPreference = true;
    cafetiere.classList.toggle('color');
    filterGrind.classList.remove('color');
    wholeBean.classList.remove('color');
    grinds = options.grindType[2]
    orderPara();
    checkPreferences();
});

//Deliveries
//checkout
const weekly = document.querySelector('#weekly');
const biWeekly = document.querySelector('#bi-weekly');
const monthly = document.querySelector('#monthly');

weekly.addEventListener('click', () => {
    deliverPreference = true;
    isWeekly = true;
    isBiWeekly = false;
    isMonthly = false;
    weekly.classList.toggle('color');
    biWeekly.classList.remove('color');
    monthly.classList.remove('color');
    frequency = options.deliverFreq[0];
    amountCheckWeekly();
    displayTotal();
    displayTotalMobile();
    checkPreferences();
});

biWeekly.addEventListener('click', () => {
    deliverPreference = true;
    isWeekly = false;
    isBiWeekly = true;
    isMonthly = false;
    biWeekly.classList.toggle('color');
    weekly.classList.remove('color');
    monthly.classList.remove('color');
    frequency = options.deliverFreq[1];
    amountCheckBiWeekly();
    displayTotal();
    displayTotalMobile();
    checkPreferences();
});

monthly.addEventListener('click', () => {
    deliverPreference = true;
    isWeekly = false;
    isBiWeekly = false;
    isMonthly = true;
    monthly.classList.toggle('color');
    biWeekly.classList.remove('color');
    weekly.classList.remove('color');
    frequency = options.deliverFreq[2];
    amountCheckMonthly();
    displayTotal();
    displayTotalMobile();
    checkPreferences();
});

const overlay = document.querySelector('.overlay');
// Click event listener to toggle overlay
orderButton.addEventListener('click', () => {
    amountCheckWeekly();
    amountCheckBiWeekly();
    amountCheckMonthly();
    checkoutModal();
    displayTotal();
    overlay.classList.toggle('visible');
})


//Function to display price for checkout 
const planPrice = document.querySelector('.checkout-total');
const displayTotal = () => {
    planPrice.innerHTML = `$${total} / mo`
};
const displayTotalMobile = () => {
    checkoutBtnMobile.textContent = `Checkout - $${total} / mo`
};

// Event listener to toggle overlay on checkout button.
const checkoutBtn = document.querySelector('.checkout-finalize-button');
const checkoutBtnMobile = document.querySelector('.checkout-finalize-button-mobile');
checkoutBtn.addEventListener('click', () => {
    overlay.classList.toggle('visible');
});
checkoutBtnMobile.addEventListener('click', () => {
    overlay.classList.toggle('visible');
});

// TODO:

// 1. populate order summary with selections that are selected  **DONE but should refactor/dry up**
// 2. create modal/order confirmation **Done but still buggy**
// 3. disable delivery preference until all is selected. **DONE**
/* 4. create mobile navigation. **DONE but need to fix media query- 
bug where navlist is still open on resize or when changing page ** */
// 5. Dry up code/refactor. 