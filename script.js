const menuBtn = document.querySelector('.hamburger');
const menuNav = document.querySelector('.mobile-nav');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  menuNav.classList.toggle('is-active');
});

const projects = {
  firstDiv: {
    name: 'Tonic',
    image: 'images/Snapshoot Portfolio (3).png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: ['html', 'css', 'javaScript'],
    live: 'https://booze33.github.io/My-Portfolio/',
    source: 'https://github.com/Booze33/My-Portfolio/tree/main',
  },
  secondDiv: {
    name: 'Tonic',
    image: 'images/Snapshoot Portfolio.png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: ['html', 'css', 'javaScript'],
    live: 'https://booze33.github.io/My-Portfolio/',
    source: 'https://github.com/Booze33/My-Portfolio/tree/main',
  },
  thirdDiv: {
    name: 'Tonic',
    image: 'images/Snapshoot Portfolio (1).png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: ['html', 'css', 'javaScript'],
    live: 'https://booze33.github.io/My-Portfolio/',
    source: 'https://github.com/Booze33/My-Portfolio/tree/main',
  },
  fourthDiv: {
    name: 'Tonic',
    image: 'images/Snapshoot Portfolio (2).png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: ['html', 'css', 'javaScript'],
    live: 'https://booze33.github.io/My-Portfolio/',
    source: 'https://github.com/Booze33/My-Portfolio/tree/main',
  },
};

// first div
const click = document.querySelector('.click');
const popup = document.querySelector('.popup');
popup.innerHTML = `
<div class="head">
<h2>Tonic</h2>
<div class="bar-1"></div>
</div>
<ul class="ul-li">
<li class="cooler">CANOPY</li>
<li><img src="images/Counter.png"></li>
<li>Back End Dev</li>
<li><img src="images/Counter.png"></li>
<li>2015</li>
</ul>
<div class="div-img"><img src="images/Snapshoot Portfolio (3).png"></div>
`;
const text = document.createElement('p');
text.innerText = projects.firstDiv.text;
text.className = 'text';
popup.appendChild(text);
const links = document.createElement('div');
links.className = 'nutton';
links.innerHTML = `
<ul class="sec-list">
<li>html</li>
<li>css</li>
<li>javaScript</li>
</ul>
<div class="link-btn">
<div class="divide"></div>
<button class="link"><a href="${projects.firstDiv.live}">See Live<img src="images/Icon.svg"></a></button>
<button class="link"><a href="${projects.firstDiv.source}">See Source<img src="images/Vector (4).svg"></a></button>
</div>
`;
popup.appendChild(links);
const remove = document.querySelector('.bar-1');
const overlay2 = document.querySelector('.overlay-2');

click.addEventListener('click', () => {
  click.classList.add('active');
  overlay2.classList.add('active');
  popup.classList.add('active');
});

remove.addEventListener('click', () => {
  remove.classList.remove('active');
  popup.classList.remove('active');
  overlay2.classList.remove('active');
});

// second div
const clickSecond = document.querySelector('.click-2');
const popupSecond = document.querySelector('.popup-2');
popupSecond.innerHTML = `
<div class="head">
<h2>Tonic</h2>
<div class="bar-1 bar-2"></div>
</div>
<ul class="ul-li">
<li class="cooler">CANOPY</li>
<li><img src="images/Counter.png"></li>
<li>Back End Dev</li>
<li><img src="images/Counter.png"></li>
<li>2015</li>
</ul>
<div class="div-img"><img src="images/Snapshoot Portfolio.png"></div>
`;
const textSecond = document.createElement('p');
textSecond.innerText = projects.firstDiv.text;
textSecond.className = 'text';
popupSecond.appendChild(textSecond);
const linksSecond = document.createElement('div');
linksSecond.className = 'nutton';
linksSecond.innerHTML = `
<ul class="sec-list">
<li>html</li>
<li>css</li>
<li>javaScript</li>
</ul>
<div class="link-btn">
<div class="divide"></div>
<button class="link"><a href="${projects.firstDiv.live}">See Live<img src="images/Icon.svg"></a></button>
<button class="link"><a href="${projects.firstDiv.source}">See Source<img src="images/Vector (4).svg"></a></button>
</div>
`;
popupSecond.appendChild(linksSecond);
const removeSecond = document.querySelector('.bar-2');

clickSecond.addEventListener('click', () => {
  clickSecond.classList.add('active');
  popupSecond.classList.add('active');
  overlay2.classList.add('active');
});
removeSecond.addEventListener('click', () => {
  removeSecond.classList.remove('active');
  popupSecond.classList.remove('active');
  overlay2.classList.remove('active');
});

// third div
const clickThird = document.querySelector('.click-3');
const popupThird = document.querySelector('.popup-3');
popupThird.innerHTML = `
<div class="head">
<h2>Tonic</h2>
<div class="bar-1 bar-3"></div>
</div>
<ul class="ul-li">
<li class="cooler">CANOPY</li>
<li><img src="images/Counter.png"></li>
<li>Back End Dev</li>
<li><img src="images/Counter.png"></li>
<li>2015</li>
</ul>
<div class="div-img"><img src="images/Snapshoot Portfolio (3).png"></div>
`;
const textThird = document.createElement('p');
textThird.innerText = projects.firstDiv.text;
textThird.className = 'text';
popupThird.appendChild(textThird);
const linksThird = document.createElement('div');
linksThird.className = 'nutton';
linksThird.innerHTML = `
<ul class="sec-list">
<li>html</li>
<li>css</li>
<li>javaScript</li>
</ul>
<div class="link-btn">
<div class="divide"></div>
<button class="link"><a href="${projects.firstDiv.live}">See Live<img src="images/Icon.svg"></a></button>
<button class="link"><a href="${projects.firstDiv.source}">See Source<img src="images/Vector (4).svg"></a></button>
</div>
`;
popupThird.appendChild(linksThird);
const removeThird = document.querySelector('.bar-3');

clickThird.addEventListener('click', () => {
  clickThird.classList.add('active');
  popupThird.classList.add('active');
  overlay2.classList.add('active');
});
removeThird.addEventListener('click', () => {
  removeThird.classList.remove('active');
  popupThird.classList.remove('active');
  overlay2.classList.remove('active');
});

// fourth div
const clickFourth = document.querySelector('.click-4');
const popupFourth = document.querySelector('.popup-4');
popupFourth.innerHTML = `
<div class="head">
<h2>Tonic</h2>
<div class="bar-1 bar-4"></div>
</div>
<ul class="ul-li">
<li class="cooler">CANOPY</li>
<li><img src="images/Counter.png"></li>
<li>Back End Dev</li>
<li><img src="images/Counter.png"></li>
<li>2015</li>
</ul>
<div class="div-img"><img src="images/Snapshoot Portfolio.png"></div>
`;
const textFourth = document.createElement('p');
textFourth.innerText = projects.firstDiv.text;
textFourth.className = 'text';
popupFourth.appendChild(textFourth);
const linksFourth = document.createElement('div');
linksFourth.className = 'nutton';
linksFourth.innerHTML = `
<ul class="sec-list">
<li>html</li>
<li>css</li>
<li>javaScript</li>
</ul>
<div class="link-btn">
<div class="divide"></div>
<button class="link"><a href="${projects.firstDiv.live}">See Live<img src="images/Icon.svg"></a></button>
<button class="link"><a href="${projects.firstDiv.source}">See Source<img src="images/Vector (4).svg"></a></button>
</div>
`;
popupFourth.appendChild(linksFourth);
const removeFourth = document.querySelector('.bar-4');
const body = document.querySelector('body');

clickFourth.addEventListener('click', () => {
  clickFourth.classList.add('active');
  popupFourth.classList.add('active');
  overlay2.classList.add('active');
});
removeFourth.addEventListener('click', () => {
  removeFourth.classList.remove('active');
  popupFourth.classList.remove('active');
  overlay2.classList.remove('active');
});

// Desktop popUp

const desktop = {
  desktopFst: {
    name: 'Tonic',
    image: 'images/Snapshoot Portfolio (3).png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    language: ['html', 'css', 'javaScript'],
    live: 'https://booze33.github.io/My-Portfolio/',
    source: 'https://github.com/Booze33/My-Portfolio/tree/main',
  },
  desktopSec: {
    name: 'Multi-Post Stores',
    image: 'images/Snapshoot Portfolio (3).png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    language: ['html', 'css', 'javaScript'],
    live: 'https://booze33.github.io/My-Portfolio/',
    source: 'https://github.com/Booze33/My-Portfolio/tree/main',
  },
  desktopTrd: {
    name: 'Facebook 360',
    image: 'images/Snapshoot Portfolio (3).png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    language: ['html', 'css', 'javaScript'],
    live: 'https://booze33.github.io/My-Portfolio/',
    source: 'https://github.com/Booze33/My-Portfolio/tree/main',
  },
  desktopFth: {
    name: 'Uber Navigation',
    image: 'images/Snapshoot Portfolio (3).png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    language: ['html', 'css', 'javaScript'],
    live: 'https://booze33.github.io/My-Portfolio/',
    source: 'https://github.com/Booze33/My-Portfolio/tree/main',
  },
};

// desktop first div

const post = document.querySelector('.this');
const task = document.createElement('div');
task.className = 'task1';
task.innerHTML = `
<div class="cross">
  <h2 class="h2-tag">${desktop.desktopFst.name}</h2>
  <div class="ex"></div>
</div>
<ul class="ul-list">
<li class="coler">CANOPY</li>
<li><img src="images/Counter.png"></li>
<li>Back End Dev</li>
<li><img src="images/Counter.png"></li>
<li>2015</li>
</ul>
<div class="pen"><img src="images/Snapshoot Portfolio (4).png"></div>
<div class="vide">
<p>${desktop.desktopFst.text}</p>
<div class="drig">
  <div class="small">
  <div class="inner">
    <ul class="double">
      <li>html</li>
      <li>css</li>
      <li>javaScript</li>
    </ul>
    <ul class="double">
      <li>github</li>
      <li>ruby</li>
      <li>bootstrap</li>
    </ul>
    </div>
    <div class="top-link">
    <div class="blue"></div>
    <button class="desk-live"><a href="${desktop.desktopFst.live}" alt="">See Live <img src="images/Icon.svg"></a></button>
    <button class="desk-live"><a href="${desktop.desktopFst.source}" alt=""></a>See Source <img src="images/Vector (4).svg"></button>
    </div>
    </div>
  </div>
</div>
`;
body.append(task);

const overlay = document.querySelector('.overlay');
post.addEventListener('click', () => {
  post.classList.add('active');
  task.classList.add('active');
  overlay.classList.add('active');
});
const close = document.querySelector('.ex');
close.addEventListener('click', () => {
  close.classList.remove('active');
  task.classList.remove('active');
  overlay.classList.remove('active');
});

// desktop second div
const post2 = document.querySelector('.this-2');
const task2 = document.createElement('div');
task2.className = 'task2';
task2.innerHTML = `
<div class="cross">
  <h2 class="h2-tag">${desktop.desktopSec.name}</h2>
  <div class="ex ex-2"></div>
</div>
<ul class="ul-list">
<li class="coler">CANOPY</li>
<li><img src="images/Counter.png"></li>
<li>Back End Dev</li>
<li><img src="images/Counter.png"></li>
<li>2015</li>
</ul>
<div class="pen"><img src="images/Snapshoot Portfolio (2).png"></div>
<div class="vide">
<p>${desktop.desktopFst.text}</p>
<div class="drig">
  <div class="small">
  <div class="inner">
    <ul class="double">
      <li>html</li>
      <li>css</li>
      <li>javaScript</li>
    </ul>
    <ul class="double">
      <li>github</li>
      <li>ruby</li>
      <li>bootstrap</li>
    </ul>
    </div>
    <div class="top-link">
    <div class="blue"></div>
    <button class="desk-live"><a href="${desktop.desktopFst.live}" alt="">See Live <img src="images/Icon.svg"></a></button>
    <button class="desk-live"><a href="${desktop.desktopFst.source}" alt=""></a>See Source <img src="images/Vector (4).svg"></button>
    </div>
    </div>
  </div>
</div>
`;
body.append(task2);

post2.addEventListener('click', () => {
  post2.classList.add('active');
  task2.classList.add('active');
  overlay.classList.add('active');
});
const close2 = document.querySelector('.ex-2');
close2.addEventListener('click', () => {
  close2.classList.remove('active');
  task2.classList.remove('active');
  overlay.classList.remove('active');
});

// desktop third div
const post3 = document.querySelector('.this-3');
const task3 = document.createElement('div');
task3.className = 'task3';
task3.innerHTML = `
<div class="cross">
  <h2 class="h2-tag">${desktop.desktopTrd.name}</h2>
  <div class="ex ex-3"></div>
</div>
<ul class="ul-list">
<li class="coler">CANOPY</li>
<li><img src="images/Counter.png"></li>
<li>Back End Dev</li>
<li><img src="images/Counter.png"></li>
<li>2015</li>
</ul>
<div class="pen"><img src="images/Snapshoot Portfolio (4).png"></div>
<div class="vide">
<p>${desktop.desktopFst.text}</p>
<div class="drig">
  <div class="small">
  <div class="inner">
    <ul class="double">
      <li>html</li>
      <li>css</li>
      <li>javaScript</li>
    </ul>
    <ul class="double">
      <li>github</li>
      <li>ruby</li>
      <li>bootstrap</li>
    </ul>
    </div>
    <div class="top-link">
    <div class="blue"></div>
    <button class="desk-live"><a href="${desktop.desktopFst.live}" alt="">See Live <img src="images/Icon.svg"></a></button>
    <button class="desk-live"><a href="${desktop.desktopFst.source}" alt=""></a>See Source <img src="images/Vector (4).svg"></button>
    </div>
    </div>
  </div>
</div>
`;
body.append(task3);

post3.addEventListener('click', () => {
  post3.classList.add('active');
  task3.classList.add('active');
  overlay.classList.add('active');
});
const close3 = document.querySelector('.ex-3');
close3.addEventListener('click', () => {
  close3.classList.remove('active');
  task3.classList.remove('active');
  overlay.classList.remove('active');
});

// desktop fourth div
const post4 = document.querySelector('.this-4');
const task4 = document.createElement('div');
task4.className = 'task4';
task4.innerHTML = `
<div class="cross">
  <h2 class="h2-tag">${desktop.desktopFth.name}</h2>
  <div class="ex ex-4"></div>
</div>
<ul class="ul-list">
<li class="coler">CANOPY</li>
<li><img src="images/Counter.png"></li>
<li>Back End Dev</li>
<li><img src="images/Counter.png"></li>
<li>2015</li>
</ul>
<div class="pen"><img src="images/Snapshoot Portfolio (4).png"></div>
<div class="vide">
<p>${desktop.desktopFst.text}</p>
<div class="drig">
  <div class="small">
  <div class="inner">
    <ul class="double">
      <li>html</li>
      <li>css</li>
      <li>javaScript</li>
    </ul>
    <ul class="double">
      <li>github</li>
      <li>ruby</li>
      <li>bootstrap</li>
    </ul>
    </div>
    <div class="top-link">
    <div class="blue"></div>
    <button class="desk-live"><a href="${desktop.desktopFst.live}" alt="">See Live <img src="images/Icon.svg"></a></button>
    <button class="desk-live"><a href="${desktop.desktopFst.source}" alt=""></a>See Source <img src="images/Vector (4).svg"></button>
    </div>
    </div>
  </div>
</div>
`;
body.append(task4);

post4.addEventListener('click', () => {
  post4.classList.add('active');
  task4.classList.add('active');
  overlay.classList.add('active');
});
const close4 = document.querySelector('.ex-4');
close4.addEventListener('click', () => {
  close4.classList.remove('active');
  task4.classList.remove('active');
  overlay.classList.remove('active');
});

// email validation
const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
const dame = document.getElementById('same');
const message = document.getElementById('message');

// form checking for submition
form.addEventListener('submit', (e) => {
  if (email.value === email.value.toLowerCase()) {
    form.submit();
    if (InputName != null || InputEmail != null || InputMessage != null) {
      return;
    }
  }
  else {
    e.preventDefault();
    error.style.display = 'block';
  }
});

const formElements = document.querySelectorAll('.storage');
const stringValues = localStorage.getItem('data');
const parseValues = JSON.parse(stringValues);

[formElements[0].value, formElements[1].value, formElements[2].value] = parseValues;
for (let i = 0; i < formElements.length; i += 1) {
  formElements[i].addEventListener('keyup', () => {
    const nameValue = formElements[0].value;
    const emailValue = formElements[1].value;
    const textAreaValue = formElements[2].value;
    const values = [nameValue, emailValue, textAreaValue];
    const stringifyValues = JSON.stringify(values);
    localStorage.setItem('data', stringifyValues);
  });
}


