// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


//Actual code

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(articleYes => {
//     debugger
//     })
//     .catch(articleNo => {
//     debugger
// })

//Variable declaration
const cardContainer = document.querySelector('.cards-container');
const cardItem = document.createElement('div');
const headlineItem = document.createElement('div');
const authorContainer = document.createElement('div');
const imageContainer = document.createElement('div');
const imageItem = document.createElement('img');
const authorItem = document.createElement('span');

//Attributing
cardItem.classList.add('card');
headlineItem.classList.add('headline');
authorContainer.classList.add('author');
imageContainer.classList.add('img-container');
imageItem.src = '..';

//Value giving
headlineItem.textContent = 'headline placeholder';


//Appending
imageContainer.appendChild(imageItem);
authorContainer.appendChild(imageContainer);
authorContainer.appendChild(authorItem);
cardItem.appendChild(headlineItem);
cardItem.appendChild(authorContainer);
cardContainer.appendChild(cardItem);






//Test code
console.log(cardItem);
// console.log(headlineItem);
// console.log(authorContainer);
// console.log(imageContainer);
// console.log(imageItem);
// console.log(authorItem);
// console.log(cardContainer)