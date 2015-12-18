// GLOBAL VARS
var formOption = document.querySelectorAll('.form-selector-option'),
formOptionSelected = document.querySelector('.form-selector-option.selected'),
colorOption = document.querySelectorAll('.color-selector-option'),
colorOptionSelected = document.querySelector('.color-selector-option').querySelector('[selected]'),
bgOption = document.querySelectorAll('.bg-selector-option'),
bgOptionSelected = document.querySelector('.color-selector-option').querySelector('[selected]'),
randomBtn = document.querySelector('.randomall-btn'),
viewbox = document.querySelector('.sbx-preview-viewbox'),
inventoryItem = document.querySelectorAll('.list > li'),
    formChosen = 'spherical', // default
    colorChosen = 'blue', // default
    bgChosen = "tatooine"; // default

// General Init function, updates the droid
function init() {
  // Get all relevant vars : form, color, background, bonus
  // Draw droid from those vars
  viewbox.innerHTML = '<img class="droidbasis" src="img/basis/'+formChosen+colorChosen+'.png">';
  viewbox.style.background = "url(img/bg/"+bgChosen+".png)";
  viewbox.style.backgroundSize = "cover";
  viewbox.style.backgroundPosition = "50%";
  // + should get active accessories and keep them
}

// Droid Form Selector
function formSelector() {
  formChosen = this.getAttribute('value');
  var sound = document.getElementById("r2scream");
  init();
  if (sound) {
    sound.play();
    window.setTimeout(function(){
      sound.parentNode.removeChild(sound);
    }, 5000);
  };
}
for (var i = 0; i < formOption.length; i++) {
  formOption[i].addEventListener('click', formSelector);
}


// Droid Color Selector
function colorSelector() {
  colorChosen = this.getAttribute('value');
  init();
}
for (var i = 0; i < colorOption.length; i++) {
  colorOption[i].addEventListener('click', colorSelector);
}


// Background Selector
function bgSelector() {
  bgChosen = this.getAttribute('value');
  init();
}
for (var i = 0; i < bgOption.length; i++) {
  bgOption[i].addEventListener('click', bgSelector);
}


// Droid Total Randomizer (random form + color + background + name)
function randomAll() {
  var randForm = ['spherical', 'circular'],
  randColor = ['blue', 'green', 'red', 'gold', 'black', 'green2', 'orange', 'blue2', 'black2', 'orange2'],
  randBg = ['tatooine', 'planet', 'stars', 'winter'];
  formChosen = randForm[Math.floor(Math.random() * randForm.length)];
  colorChosen = randColor[Math.floor(Math.random() * randColor.length)],
  bgChosen = randBg[Math.floor(Math.random() * randBg.length)];
  randomName();
  // + Add random bonus ?
  init();
}
randomBtn.addEventListener('click', randomAll);



// Name Randomizer
function randomName() {
  var droidNames = ['R2-D2', 'R4-T5', 'R7-F5', 'R3-S6', 'R6-H5', 'R5-P8', 'R7-D4', 'R2-KT', 'R8-B7', 'R5-O13', 'R4-C4', 'R5-S9', 'R7-A4', 'R2-C2', 'R4-P17'];
  document.querySelector('.sbx-preview-name input').value = droidNames[parseInt(Math.random() * (droidNames.length))];
  init();
}

document.querySelector('.sbx-preview-name button').addEventListener('click', randomName);

//addparts() -> onclick inventoryItem
//  - detect which cat is clicked
//    - if cat = accessories
//      - if the item is already in the viewbox, delete it
//      - else add the item
//    - else
//      - if there is already an item in the viewbox, replace it wih the new item
//      - else add the item


// Add elements to the droid
for (var i = 0; i < inventoryItem.length; i++) {
  inventoryItem[i].addEventListener('click', function() {
    var dataCat = this.getAttribute('data-cat');
    var dataItem = this.getAttribute('data-item');
    if ($.contains('viewbox', '[data-item='+dataItem+']')) {
      $.delete($('.sbx-part[data-item='+dataItem+']'));
    } else {
      $('.sbx-part[data-item='+dataItem+']').remove();
      viewbox.innerHTML += "<img data-cat="+dataCat+" data-item="+dataItem+" class='sbx-part' src='img/categories/"+ this.getAttribute('data-cat') +"/"+ this.getAttribute('data-item') +"f.png'>";
    }
  });
}