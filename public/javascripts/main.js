$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

var showMenu = $('#showMenu');
var hiddenNav = $('#hiddenNav');
var showDropList = $('#showDropList');
var dropDownList = $('#dropDownList');

  showMenu.on('click', function(){
  hiddenNav.slideToggle();
});

showDropList.on('click', function(){
  dropDownList.show().animate({
    'height':'16.5em'
  });
});
