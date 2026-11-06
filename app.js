console.log('Cozy Cafe JavaScript is connected!');


const mainTitleEl= document.querySelector('#main-title');


 
mainTitleEl.textContent='Welcome to the Cozy Cafe.'

//----------------------------------------------


const highlightTitleEls = document.querySelectorAll('.highlight-title');

highlightTitleEls.forEach(element => {

    console.log(element.textContent)  
    element.style.fontStyle= 'italic'
    
});

//----------------------------------------------

const p3=document.querySelector('#quote-of-the-day')

p3.textContent='A little coffee, a little conversation.'

p3.classList.add('featured')

//----------------------------------------------

const photo=document.querySelector('#main-photo')

console.log(photo.getAttribute('src'))

photo.setAttribute('src','./assets/berry-cake.jpg')
photo.setAttribute('alt','A berry cake served at the cafe')

const btn = document.querySelector('#bg-color-btn');
const b = document.querySelector('body');

const handleBackgroundChange = () => {
    b.style.backgroundColor = 'lavender';
};

btn.addEventListener('click', handleBackgroundChange);

// PART 5
const roseLatteEl = document.querySelector('#rose-latte')
const croissantEl = document.querySelector('#croissant')
const cheescakeEl = document.querySelector('#cheesecake')
// console.log(roseLatteEl, croissantEl, cheescakeEl)

roseLatteEl.textContent = 'Available'
croissantEl.textContent = 'Sold Out'
cheescakeEl.textContent = 'Available'

// CSS identifiers cannot begin with an unescaped number.
// const button = document.querySelector('[id="0"]')
const roseBtnEl = document.getElementById('0')
const croissantBtnEl = document.getElementById('1')
const cheescakeBtnEl = document.getElementById('2')
// console.log(roseBtnEl, croissantBtnEl, cheescakeBtnEl)

roseBtnEl.addEventListener('click', () => {
    roseLatteEl.textContent = 'Sold Out'
})
croissantBtnEl.addEventListener('click', () => {
    croissantEl.textContent = 'Sold Out'
})
cheescakeBtnEl.addEventListener('click', () => {
    cheescakeEl.textContent = 'Sold Out'
})







 

 