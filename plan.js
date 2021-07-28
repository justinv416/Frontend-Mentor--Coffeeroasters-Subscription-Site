//Query selectors 
const arrows = document.querySelectorAll('.preference-arrow');
const prefHeading = document.querySelectorAll('.preference-heading');
const headingContainer = document.querySelectorAll('.preference-heading-container')
const prefsContainer = document.querySelectorAll('.preference-selection-container');
const prefContainer = document.querySelectorAll('.preference-container');
const prefItem = document.querySelectorAll('.preference-selection-item')
const orderSummary = document.querySelector('.order-summary');

//Drink Types
const capsule = document.querySelector('#capsule');
const filter = document.querySelector('#filter');
const espresso = document.querySelector('#espresso');

capsule.addEventListener('click', () => {
    capsule.classList.add('color')
    filter.classList.remove('color')
    espresso.classList.remove('color')
});

filter.addEventListener('click', () => {
    filter.classList.add('color')
    capsule.classList.remove('color')
    espresso.classList.remove('color')
});

espresso.addEventListener('click', () => {
    espresso.classList.add('color')
    filter.classList.remove('color')
    capsule.classList.remove('color')
});

//Coffee Types
const singleOrigin = document.querySelector('#single-origin');
const decaf = document.querySelector('#decaf');
const blended = document.querySelector('#blended');

singleOrigin.addEventListener('click', () => {
    singleOrigin.classList.add('color')
    decaf.classList.remove('color')
    blended.classList.remove('color')
});

decaf.addEventListener('click', () => {
    decaf.classList.add('color')
    singleOrigin.classList.remove('color')
    blended.classList.remove('color')
});

blended.addEventListener('click', () => {
    blended.classList.add('color')
    singleOrigin.classList.remove('color')
    decaf.classList.remove('color')
});

//Amounts
const quarter = document.querySelector('#quarter');
const half = document.querySelector('#half');
const full = document.querySelector('#full');

quarter.addEventListener('click', () => {
    quarter.classList.add('color');
    half.classList.remove('color');
    full.classList.remove('color');
});

half.addEventListener('click', () => {
    half.classList.add('color');
    quarter.classList.remove('color');
    full.classList.remove('color');
});

full.addEventListener('click', () => {
    full.classList.add('color');
    half.classList.remove('color');
    quarter.classList.remove('color');
});

//Grinds 
const wholeBean = document.querySelector('#whole-bean');
const filterGrind = document.querySelector('#filter-grind');
const cafetiere = document.querySelector('#cafetiere');

wholeBean.addEventListener('click', () => {
    wholeBean.classList.add('color');
    filterGrind.classList.remove('color');
    cafetiere.classList.remove('color');
});

filterGrind.addEventListener('click', () => {
    filterGrind.classList.add('color');
    wholeBean.classList.remove('color');
    cafetiere.classList.remove('color');
});

cafetiere.addEventListener('click', () => {
    cafetiere.classList.add('color');
    filterGrind.classList.remove('color');
    wholeBean.classList.remove('color');
});

//Deliveries
const weekly = document.querySelector('#weekly');
const biWeekly = document.querySelector('#bi-weekly');
const monthly = document.querySelector('#monthly');

weekly.addEventListener('click', () => {
    weekly.classList.add('color');
    biWeekly.classList.remove('color');
    monthly.classList.remove('color');
});

biWeekly.addEventListener('click', () => {
    biWeekly.classList.add('color');
    weekly.classList.remove('color');
    monthly.classList.remove('color');
});

monthly.addEventListener('click', () => {
    monthly.classList.add('color');
    biWeekly.classList.remove('color');
    weekly.classList.remove('color');
});


// orderSummary.innerHTML = `
// <h5 class="order-summary-heading">Order Summary</h5>
// <p>"I drink my coffee ${}, with a ${} type of bean.${} gorund ala ${}, 
// sent to me ${}"</p>
// `

//somewhat working need to show only respective container
// arrows.forEach(arrow => {
//     arrow.addEventListener('click', () => {
//             arrow.classList.toggle('rotate')
//             let i;
//             for(i = 0; i < arrows.length; i++) {
//                 headingContainer[i].nextElementSibling.classList.toggle('show');

//             }
//         })
//         // toggle children
//         // prefsContainer[0].classList.remove('hide')
//         // prefsContainer[0].classList.add('show')
        
// })

// const options = {
//     brewType: ['capsule', 'filter', 'espresso'],
//     coffeeType: ['single origin', 'decaf', 'blended'],
//     coffeeAmount: ['250g', '500g', '1000g'],
//     grindType: ['wholebean', 'filter', 'cafetiére'],
//     deliverFreq: ['every week', 'every 2 weeks', 'every month']
// };

// hides all preferences
// for(let i = 0; i < prefsContainer.length; i++) {
//     prefsContainer[i].classList.add('hide');
// };


/*

TODO:

1. hide and show selections on click, rotate arrow accordingly 
2. change color of selections on hover 
3. populate order summary with selections that are selected  
4. create modal/order confirmation
5. create mobile navigation

*/