$(document).ready(function(){
	var windowWidth= function(){
      if( $(window).width() > 768 ) {
        $("#sidebar").stick_in_parent({
          "offset_top": 25
        });
      } else {
        $("#sidebar").trigger("sticky_kit:detach");
      }
    }
    $(window).on('resize', function () {
      windowWidth();
    })  
    windowWidth();
})