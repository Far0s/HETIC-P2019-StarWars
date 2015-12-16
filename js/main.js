document.querySelector('.sbx-preview-name button').addEventListener('click', function(){
  var droidNames = ['R2-D2', 'R4-T5', 'R7-F5', 'R3-S6', 'R6-H5', 'R5-P8', 'R7-D4', 'R2-KT', 'R8-B7', 'R5-O13', 'R4-C4', 'R5-S9', 'R7-A4', 'R2-C2'];
  document.querySelector('.sbx-preview-name input').value = droidNames[parseInt(Math.random() * (droidNames.length + 1))];
});