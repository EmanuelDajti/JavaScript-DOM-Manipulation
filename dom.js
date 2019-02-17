// Examine THE DOCUMENT OBJECT //

// console.dir(document);

/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 12;

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[14]);
document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);


//GETELEMENTBYID //

console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px black';


//GETELEMENTSNYCLASSNAME //

var items = document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[2].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';



for(var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}
*/

/*

//GETELEMENTSBYTAGNAME //
var li = document.getElementsByTagName('li');
console.log(li);
console.log[li[1]];
li[1].textContent = 'Hello 4';
li[2].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';



for(var i = 0; i < items.length; i++) {
    li[i].style.backgroundColor = '#f4f4f4';
}


// QUERYSELECTOR //

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = "send";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';
*/

// QUERYSELECTORALL //
/*
var title = document.querySelectorAll('.title');
title[0].textContent = 'Hello';
console.log(title);

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i = 0; i < odd.length; i++) {
   
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}

// TRAVERSING THE DOM //

var itemList = document.querySelector('#items');

//parentnode

//console.log(itemList.parentNode);

itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);


//childnodes


var itemList = document.querySelector('#items');

console.log(itemList.childNodes);



var itemList = document.querySelector('#items');

console.log(itemList.children);


var itemList = document.querySelector('#items');

//FirstChild
console.log(itemList.firstChild);



var itemList = document.querySelector('#items');

console.log(itemList.firstElementChild);

itemList.firstElementChild.textContent = 'Hello 1';



// NEXTSIBLING

var itemList = document.querySelector('#items');

console.log(itemList.nextElementSibling);

//previous sibling

console.log(itemList.previousElementSibling);

*/

// createElement

//Create a div

/*
var newDiv = document.createElement('div');

//Add class

newDiv.className = 'hello';

// Add ID

newDiv.id = 'hello1';

//add attribute

newDiv.setAttribute('title', 'Hello Developer');

//Create a text node
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);

container.insertBefore(newDiv, h1);

// EVENTS //

var button = document.getElementById('button').addEventListener
('click', buttonclick);

function buttonclick(e) {
     // console.log('Button Clicked');
    //  document.getElementById('header-title').textContent = 'Changed';
    //  console.log(e);

  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);

  var output = document.getElementById('output');
  output.innerHTML = '<h3>'+e.target.id+'</h3>';
  
}

*/
