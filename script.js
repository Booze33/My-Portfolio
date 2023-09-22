const scrollToTopSmoothly = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

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
  scrollToTopSmoothly();
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
    <h2 class="project-name pop-name">Land Rover: E-Commerce</h2>
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
        <a class="project-btn btn-2" href="https://github.com/VelzckC0D3/Land-Rover-E-Commerce" target="_blank" rel="noopener">See Source<i class="fa-brands fa-github"></i></a>
        <a class="project-btn btn-2" href="https://land-rover-e.netlify.app/" target="_blank" rel="noopener">See Live <i class="fa-solid fa-play"></i></a>
      </div>
    </div>
  </div>
`;

const SecondPop = `
  <div class="pop-up-head">
    <h2 class="project-name pop-name">Weather App</h2>
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
        <a class="project-btn btn-2" href="https://github.com/Booze33/weather-react" target="_blank" rel="noopener">See Source<i class="fa-brands fa-github"></i></a>
        <a class="project-btn btn-2" href="https://weather-web-bp0r.onrender.com/" target="_blank" rel="noopener">See Live <i class="fa-solid fa-play"></i></a>
      </div>
    </div>
  </div>
`;

const thirdPop = `
  <div class="pop-up-head">
    <h2 class="project-name pop-name">Expense Tracker</h2>
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
        <a class="project-btn btn-2" href="https://github.com/Booze33/budget-app" target="_blank" rel="noopener">See Source<i class="fa-brands fa-github"></i></a>
        <a class="project-btn btn-2" href="https://budgetapp-v6n9.onrender.com/" target="_blank" rel="noopener">See Live <i class="fa-solid fa-play"></i></a>
      </div>
    </div>
  </div>
`;

const fourthPop = `
  <div class="pop-up-head">
    <h2 class="project-name pop-name">Recipe App</h2>
    <i class="fa-solid fa-xmark"></i>
  </div>
  <ul class="pop-ul-li">
    <li class="pop-cooler">Food</li>
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

    <label for="s1" id="slider1"><img src="images/recipe/1695155361498.png" class="popup-img"></label>
    <label for="s2" id="slider2"><img src="images/recipe/1695155361519.png" class="popup-img"></label>
    <label for="s3" id="slider3"><img src="images/recipe/1695155361481.png" class="popup-img"></label>
    <label for="s4" id="slider4"><img src="images/recipe/1695155361561.png" class="popup-img"></label>
    <label for="s5" id="slider5"><img src="images/recipe/1695155361541.png" class="popup-img"></label>
  </div>

  <div class="pop-flex">
    <p class="pop-p">Craft fresh culinary creations and distribute them digitally. You have the option to keep them exclusive and generate a convenient shopping list for your delectable recipes.</p>
    <div class="pop-tech-con">
      <ul class="pop-tech-list">
        <li class="pop-tech">ruby on rails</li>
        <li class="pop-tech">css</li>
        <li class="pop-tech">html</li>
      </ul>
      <div class="line"></div>
      <div class="source">
        <a class="project-btn btn-2" href="https://github.com/rashedarman/rails-recipe-app" target="_blank" rel="noopener">See Source<i class="fa-brands fa-github"></i></a>
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

const projectBtnFour = document.querySelector('.project-btn-4');
projectBtnFour.addEventListener('click', () => {
  body.classList.toggle('active');
  PopUp.classList.toggle('active');
  overlay.classList.toggle('active');
  popUp.innerHTML = fourthPop;

  const PopClose = document.querySelector('.fa-xmark');

  PopClose.addEventListener('click', () => {
    body.classList.remove('active');
    overlay.classList.toggle('active');
    PopUp.classList.remove('active');
  });
});

const toggleBtn = document.querySelector('.fa-angle-one');
toggleBtn.addEventListener('click', () => {
  const languageHide = document.querySelector('.lang-show');
  toggleBtn.classList.toggle('active');
  languageHide.classList.toggle('active');
});

const toggleBtnTwo = document.querySelector('.fa-angle-two');
toggleBtnTwo.addEventListener('click', () => {
  const languageHide = document.querySelector('.lang-show-two');
  toggleBtnTwo.classList.toggle('active');
  languageHide.classList.toggle('active');
});

const toggleBtnThree = document.querySelector('.fa-angle-three');
toggleBtnThree.addEventListener('click', () => {
  const languageHide = document.querySelector('.lang-show-three');
  toggleBtnThree.classList.toggle('active');
  languageHide.classList.toggle('active');
});

const form = document.getElementById('form');
const InputEmail = document.getElementById('email');
const InputName = document.getElementById('same');
const InputMessage = document.getElementById('message');

export default form;
// get item
const myFormData = JSON.parse(localStorage.getItem('myFormData'));

if (myFormData) {
  InputName.value = myFormData.name;
  InputEmail.value = myFormData.email;
  InputMessage.value = myFormData.message;
}

form.addEventListener('input', () => {
  // get values

  const email = InputEmail.value.trim();
  const name = InputName.value.trim();
  const message = InputMessage.value.trim();

  // if value
  if (!name || !email || !message) {
    return;
  }

  // save object
  const myFormData = {
    name,
    email,
    message,
  };

  // set item
  localStorage.setItem('myFormData', JSON.stringify(myFormData));
});
