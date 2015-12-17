// GLOBAL VARS
var formOption = document.querySelectorAll('.form-selector-option'),
formOptionSelected = document.querySelector('.form-selector-option.selected'),
colorOption = document.querySelectorAll('.color-selector-option'),
colorOptionSelected = document.querySelector('.color-selector-option').querySelector('[selected]'),
randomBtn = document.querySelector('.randomall-btn'),
    formChosen = 'spherical', // default
    colorChosen = 'blue', // default
    bgChosen = "1"; // default


// General Init function, updates the droid
function init() {
  // Get all relevant vars : form, color, background, bonus
  // Draw droid from thos vars
  console.log('INIT');
}


// Droid Form Selector
function formSelector() {
  formChosen = this.getAttribute('value');
  console.log(formChosen);
  init();
}

for (var i = 0; i < formOption.length; i++) {
  formOption[i].addEventListener('click', formSelector);
}


// Droid Color Scheme Selector
function colorSelector() {
  colorChosen = this.getAttribute('value');
  console.log(colorChosen);
  init();
}

for (var i = 0; i < colorOption.length; i++) {
  colorOption[i].addEventListener('click', colorSelector);
}


// Droid Total Randomizer (random form + color + name)
function randomAll() {
  var randForm = ['spherical', 'circular'],
  randColor = ['blue', 'green', 'red'];
  formChosen = randForm[Math.floor(Math.random() * randForm.length)];
  colorChosen = randColor[Math.floor(Math.random() * randColor.length)];
  randomName();
  console.log(formChosen);
  console.log(colorChosen);
  // Add random background
  // Add random bonus
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



var viewbox = document.querySelector('.sbx-preview-viewbox');
var inventoryItem = document.querySelectorAll('.sbx-inventory-item');
// inventoryItem.addEventListener('click', function(){
//   console.log(this.getAttribute('data-cat'));
//   console.log(this.getAttribute('data-item'));
//   viewbox.innerHTML += "<img class='sbx-part' src='/img/"+ this.getAttribute('data-cat') +"/"+ this.getAttribute('data-item') +".png'>";
// });

//addparts() -> onclick inventoryItem
//  - detect which cat is clicked
//    - if cat = accessories
//      - if the item is already in the viewbox, delete it
//      - else add the item
//    - else
//      - if there is already an item in the viewbox, replace it wih the new item
//      - else add the item

for (var i = 0; i < inventoryItem.length; i++) {
  inventoryItem[i].addEventListener('click', function() {
    var dataCat = this.getAttribute('data-cat'),
    dataItem = this.getAttribute('data-item');
    if (dataCat == 'accessories'){
      console.log(dataItem);
      if (!viewbox.querySelector('[data-item='+dataItem+']')) {
        viewbox.innerHTML += "<img class='sbx-part' src='/img/"+ this.getAttribute('data-cat') +"/"+ this.getAttribute('data-item') +".png'>";
      }
    } else {
      viewbox.removeChild(querySelector('.sbx-part[data-item='+dataItem+']'));
    }
  });
}