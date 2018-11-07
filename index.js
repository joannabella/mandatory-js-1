// Text content in header h1 is wrong, should be Fruits & Vegetables Corp (see first issue)
let header = document.querySelector('header h1');
header.textContent = 'Fruits & Vegetables Corp';
header.setAttribute('style', 'color: red;');

// The last a tag in header ul has wrong text content and href attribute (should be Vegetables and not Bananas)
let links = document.querySelectorAll('ul li a');
for (let link of links) {
  if (link.textContent === 'Bananas') {
    link.textContent = 'Vegetables';
    link.href = '#vegetables'
  }
}

// The section #contact and #about are in the wrong order. Swap them
let contact = document.querySelector('#contact');
let about = document.querySelector('#about');
contact.parentNode.insertBefore(about, contact);

// The text "We're the best in fruits & vegetables" under #about should be wrapped in a p tag
let text = document.querySelector('#about').textContent;
let p = document.createElement('p');
p.textContent = text;
about.textContent = '';
about.appendChild(p);

// Each section should have a h2 tag at the top with corresponding text according to its id
let contacth2 = document.createElement('h2');
contacth2.textContent = 'Contact';
contact.insertBefore(contacth2, contact.firstChild);

let abouth2 = document.createElement('h2');
abouth2.textContent = 'About';
about.insertBefore(abouth2, about.firstChild);

// The developer used td elements in thead instead of th. Fix it.
let tds = document.querySelectorAll('thead td');
for (let td of tds) {
  let th = document.createElement('th');
  th.textContent = td.textContent;
  td.parentNode.appendChild(th);
  td.parentNode.removeChild(td);
}

// The developer forgot to include the main.css file. Add it to head
let head = document.querySelector('head');
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css';
head.appendChild(link);


// Head title is wrong MDN info. Should be "Fruits & Vegetables Corp"
let title = document.querySelector('title');
title.textContent = 'Fruits & Vegetables Corp';
