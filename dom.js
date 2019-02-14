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
*/

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

// QUERYSELECTORAL //
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
*/
// TRAVERSING THE DOM //

var itemList = document.querySelector('#items');

//parentnode

console.log(itemList.parentNode);