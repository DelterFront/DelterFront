/*var timer = false;
$(window).resize(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        //console.log(window.innerWidth);
        // 何らかの処理
        if(window.innerWidth >= 768){
          $(function(){
            $("#menu").css("display", "inline");
          });
        }else{
          $(function(){
            $("#menu").css("display", "none");
          });
        }
    }, 200);
});

//http://kadoppe.com/archives/2012/02/jquery-window-resize-event.html
*/

$(window).resize(function(){
  console.log(window.innerWidth);
  if(window.innerWidth >= 768){
    $(function(){
      $("#menu").css("display", "inline");
    });
  }else{
    $(function(){
      $("#menu").css("display", "none");
    });
  }
});
