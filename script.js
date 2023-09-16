const body = document.querySelector('body');
const menuBtn = document.querySelector('.hamburger');
const menuNav = document.querySelector('.mobile-nav');
const logo = document.querySelector('.logo');
const popUp = document.querySelector('.pop-up');
const mobileNav = document.querySelector('.tag-1');
const mobileNavTwo = document.querySelector('.tag-2');
const mobileNavThree = document.querySelector('.tag-3');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  menuNav.classList.toggle('is-active');
  body.classList.toggle('active');
  logo.classList.toggle('active');
});

mobileNav.addEventListener('click', () => {
  menuBtn.classList.remove('is-active');
  menuNav.classList.remove('is-active');
  body.classList.remove('active');
  logo.classList.remove('active');
});

mobileNavTwo.addEventListener('click', () => {
  menuBtn.classList.remove('is-active');
  menuNav.classList.remove('is-active');
  body.classList.remove('active');
  logo.classList.remove('active');
});

mobileNavThree.addEventListener('click', () => {
  menuBtn.classList.remove('is-active');
  menuNav.classList.remove('is-active');
  body.classList.remove('active');
  logo.classList.remove('active');
});

const firstPop = `
  <div class="pop-up-head">
    <h2 class="project-name">Land Rover: E-Commerce</h2>
    <i class="fa-solid fa-xmark"></i>
  </div>
  <ul class="pop-ul-li">
    <li class="pop-cooler">Land Rover</li>
    <li class="pop-cooler"><img src="images/Counter.png"></li>
    <li class="pop-cooler">Full-Stack</li>
    <li class="pop-cooler"><img src="images/Counter.png"></li>
    <li class="pop-cooler">2023</li>
  </ul>
  <div id="slider">
    <input type="radio" class="radio" name="slider" id="s1" checked>
    <input type="radio" class="radio" name="slider" id="s2">
    <input type="radio" class="radio" name="slider" id="s3">
    <input type="radio" class="radio" name="slider" id="s4">
    <input type="radio" class="radio" name="slider" id="s5">

    <label for="s1" id="slider1"><img src="images/front-1.png" class="popup-img"></label>
    <label for="s2" id="slider2"><img src="images/1694684248903.png" class="popup-img"></label>
    <label for="s3" id="slider3"><img src="images/1694684248913.png" class="popup-img"></label>
    <label for="s4" id="slider4"><img src="images/1694684248926.png" class="popup-img"></label>
    <label for="s5" id="slider5"><img src="images/1694684248942.png" class="popup-img"></label>
  </div>

  <div class="pop-flex">
    <p class="pop-p">Land Rover - our brand-new E-commerce App, designed to redefine your car buying experience! Whether you're an adventure seeker, a tech enthusiast, or simply in search of luxury, our app has been meticulously crafted to cater to your every need.</p>
    <div class="pop-tech-con">
      <ul class="pop-tech-list">
        <li class="pop-tech">react-redux</li>
        <li class="pop-tech">css</li>
        <li class="pop-tech">ruby on rails</li>
      </ul>
      <div class="line"></div>
      <div class="source">
        <button class="project-btn">See Source</button>
        <button class="project-btn">See Live</button>
      </div>
    </div>
  </div>
`;

const SecondPop = `
  <div class="pop-up-head">
    <h2 class="project-name">Weather App</h2>
    <i class="fa-solid fa-xmark"></i>
  </div>
  <ul class="pop-ul-li">
    <li class="pop-cooler">Weather</li>
    <li class="pop-cooler"><img src="images/Counter.png"></li>
    <li class="pop-cooler">Front-End</li>
    <li class="pop-cooler"><img src="images/Counter.png"></li>
    <li class="pop-cooler">2023</li>
  </ul>
  <div id="slider">
    <input type="radio" class="radio" name="slider" id="s1" checked>
    <input type="radio" class="radio" name="slider" id="s2">
    <input type="radio" class="radio" name="slider" id="s3">
    <input type="radio" class="radio" name="slider" id="s4">
    <input type="radio" class="radio" name="slider" id="s5">

    <label for="s1" id="slider1"><img src="images/weather/1694850034176.png" class="popup-img"></label>
    <label for="s2" id="slider2"><img src="images/weather/1694850034191.png" class="popup-img"></label>
    <label for="s3" id="slider3"><img src="images/weather/1694850034206.png" class="popup-img"></label>
    <label for="s4" id="slider4"><img src="images/weather/1694850034228.png" class="popup-img"></label>
    <label for="s5" id="slider5"><img src="images/weather/1694850034246.png" class="popup-img"></label>
  </div>

  <div class="pop-flex">
    <p class="pop-p">Discover the latest weather conditions and access comprehensive weather updates, detailed forecasts, and a wealth of pertinent information for cities worldwide with our weather app.</p>
    <div class="pop-tech-con">
      <ul class="pop-tech-list">
        <li class="pop-tech">react-redux</li>
        <li class="pop-tech">css</li>
        <li class="pop-tech">html</li>
      </ul>
      <div class="line"></div>
      <div class="source">
        <button class="project-btn">See Source</button>
        <button class="project-btn">See Live</button>
      </div>
    </div>
  </div>
`;

const thirdPop = `
  <div class="pop-up-head">
    <h2 class="project-name">Expense Tracker</h2>
    <i class="fa-solid fa-xmark"></i>
  </div>
  <ul class="pop-ul-li">
    <li class="pop-cooler">Expense</li>
    <li class="pop-cooler"><img src="images/Counter.png"></li>
    <li class="pop-cooler">Full-Stack</li>
    <li class="pop-cooler"><img src="images/Counter.png"></li>
    <li class="pop-cooler">2023</li>
  </ul>
  <div id="slider">
    <input type="radio" class="radio" name="slider" id="s1" checked>
    <input type="radio" class="radio" name="slider" id="s2">
    <input type="radio" class="radio" name="slider" id="s3">
    <input type="radio" class="radio" name="slider" id="s4">
    <input type="radio" class="radio" name="slider" id="s5">

    <label for="s1" id="slider1"><img src="images/expense/1694852257085.png" class="popup-img"></label>
    <label for="s2" id="slider2"><img src="images/expense/1694852257072.png" class="popup-img"></label>
    <label for="s3" id="slider3"><img src="images/expense/1694852257057.png" class="popup-img"></label>
    <label for="s4" id="slider4"><img src="images/expense/1694852257045.png" class="popup-img"></label>
    <label for="s5" id="slider5"><img src="images/expense/1694852257034.png" class="popup-img"></label>
  </div>

  <div class="pop-flex">
    <p class="pop-p">An intuitive budgeting app designed to streamline your spending management. Easily categorize your expenses, such as 'Food' or 'Transport,' and effortlessly track your transactions within each category to gain insight into your overall expenditure.</p>
    <div class="pop-tech-con">
      <ul class="pop-tech-list">
        <li class="pop-tech">ruby on rails</li>
        <li class="pop-tech">css</li>
        <li class="pop-tech">html</li>
      </ul>
      <div class="line"></div>
      <div class="source">
        <button class="project-btn">See Source</button>
        <button class="project-btn">See Live</button>
      </div>
    </div>
  </div>
`;

const projectBtn = document.querySelector('.project-btn-1');
const PopUp = document.querySelector('.pop-up');
const overlay = document.querySelector('.overlay');
projectBtn.addEventListener('click', () => {
  body.classList.toggle('active');
  PopUp.classList.toggle('active');
  overlay.classList.toggle('active');
  popUp.innerHTML = firstPop;

  const PopClose = document.querySelector('.fa-xmark');

  PopClose.addEventListener('click', () => {
    body.classList.remove('active');
    overlay.classList.toggle('active');
    PopUp.classList.remove('active');
  });
});

const projectBtnTwo = document.querySelector('.project-btn-2');
projectBtnTwo.addEventListener('click', () => {
  body.classList.toggle('active');
  PopUp.classList.toggle('active');
  overlay.classList.toggle('active');
  popUp.innerHTML = SecondPop;

  const PopClose = document.querySelector('.fa-xmark');

  PopClose.addEventListener('click', () => {
    body.classList.remove('active');
    overlay.classList.toggle('active');
    PopUp.classList.remove('active');
  });
});

const projectBtnThree = document.querySelector('.project-btn-3');
projectBtnThree.addEventListener('click', () => {
  body.classList.toggle('active');
  PopUp.classList.toggle('active');
  overlay.classList.toggle('active');
  popUp.innerHTML = thirdPop;

  const PopClose = document.querySelector('.fa-xmark');

  PopClose.addEventListener('click', () => {
    body.classList.remove('active');
    overlay.classList.toggle('active');
    PopUp.classList.remove('active');
  });
});
