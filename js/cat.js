function showCat() {
  $(".category").click(function(){
    $('.category').removeClass('active');
    this.classList.add('active');
    var catValue = this.getAttribute('value');
    $(".list").css("display", "none");
    $(".list[value="+catValue+"]").css("display", "block");
  });
}
$(document).ready(showCat); 