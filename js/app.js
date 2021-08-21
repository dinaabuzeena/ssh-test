'use strict';

let btn = document.getElementById('submit');
let whatField = document.getElementById('what');
let dateFiled = document.getElementById('date');
let list = document.getElementById('list');



function Dina(what, date) {
    this.what = what;
    this.date = date;
    Dina.arr.push(this);

}
Dina.arr = [];

btn.addEventListener('click', handel);

function handel(event) {
    event.preventDefault();

    let newWhat = whatField.Value;
    let newDate = dateFiled.value;
    new Dina(newWhat, newDate);
    savetols();
    Dina.prototype.render();

};

Dina.prototype.render = function () {
    for (let i = 0; i < Dina.arr.length; i++) {
        let li = document.createElement('li');
        list.appendChild(li);
        li.textContent = Dina.arr[i].what;

    }

};


function savetols() {
    let newArr = JSON.stringify(Dina.arr);
    localStorage.setItem('arr', newArr);

}

function getTols() {
    let info = localStorage.getItem('arr');
    let parsOrder = JSON.parse(info);
    if (parsOrder) {
       Dina.arr=parsOrder;
       
    }
};

getTols();
Dina.prototype.render();


