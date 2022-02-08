var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="https://google.com">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

document.getElementsByTagName('button')[0].addEventListener("click", function() {
    for (var i = 0; i < firstPar.children.length; i++) {
        firstPar.children[i].classList.add('red');
    }
});


var childs = secondPar.children; 

for (var i = 0; i < childs.length; i++) {
    childs[i].onclick = function (evt) { 
        evt.preventDefault(); 

        if (localStorage.getItem(evt.target.innerText) == null) {

            var Obj = { 'path': evt.target.href};

            localStorage.setItem(evt.target.innerText, JSON.stringify(Obj));
            evt.target.href = '#';
            alert('Link saved');
        } 

        else alert(localStorage.getItem(evt.target.innerText));
    }
}

window.onload = function() {
    localStorage.clear();
   }


   

