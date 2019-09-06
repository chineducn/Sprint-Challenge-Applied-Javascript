// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(date, title, temperature) {
    const divCreator = document.createElement('div');
    const span1Creator = document.createElement('span');
    const headingCreator = document.createElement('h1');
    const span2Creator = document.createElement('span');

    divCreator.classList.add('header');
    span1Creator.classList.add('date');
    span2Creator.classList.add('temp');

    span1Creator.textContent = date;
    headingCreator.textContent = title;
    span2Creator.textContent = temperature;

    divCreator.appendChild(span1Creator);
    divCreator.appendChild(headingCreator);
    divCreator.appendChild(span2Creator);

    return divCreator;
}

const headerComponent = Header('SMARCH 28, 2019', 'Lambda Times', '98°');

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(headerComponent);