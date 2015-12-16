// Droid Form Selector


// Droid Color Scheme Selector


// Droid Total Randomizer (random form + color + name)




// Name Randomizer
document.querySelector('.sbx-preview-name button').addEventListener('click', function(){
  var droidNames = ['R2-D2', 'R4-T5', 'R7-F5', 'R3-S6', 'R6-H5', 'R5-P8', 'R7-D4', 'R2-KT', 'R8-B7', 'R5-O13', 'R4-C4', 'R5-S9', 'R7-A4', 'R2-C2', 'R4-P17'];
  document.querySelector('.sbx-preview-name input').value = droidNames[parseInt(Math.random() * (droidNames.length))];
});



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