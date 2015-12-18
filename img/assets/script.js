var choice = document.querySelector('.round_droid-flag'); // Using a class instead, see note below.
var choice_square = document.querySelector('.square_droid-flag'); // Using a class instead, see note below.
var droids = document.getElementsByClassName('droid');
var flags = document.querySelectorAll('.flag');
//choice.addEventListener('click', function(){
//    choice.classList.add('.active');
//    console.log('oooo');
//});

//choice.onclick = function(){
//  choice.classList.toggle('active');
//    console.log('oooo');   
//}

//choice_square.onclick = function(){
//  choice_square.classList.toggle('active_square');
//    console.log('oooo');   
//}

for (var i = 0; i<droids.length; i++) {
    droids[i].addEventListener('click', function(){
        droids.classList.remove('active');
        this.classList.add('active');
    })
}

 
function JouerSon() {
    var sound = document.getElementById("MonSon");
    sound.play();
}