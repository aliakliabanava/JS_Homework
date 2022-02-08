

// document.getElementsByTagName('button')[0].addEventListener("click", function() {
//     for (var i = 0; i < firstPar.children.length; i++) {
//         firstPar.children[i].classList.add('red');
//     }
// });


// var childs = secondPar.children; 

// for (var i = 0; i < childs.length; i++) {
//     childs[i].onclick = function (evt) { 
//         evt.preventDefault(); 
//         alert(evt.target.href);
        
//     }
// }
var button = document.getElementById('button');

button.addEventListener("click", function() {
    button.insertBefore(<td></td><td></td><td></td>, button);
    });
