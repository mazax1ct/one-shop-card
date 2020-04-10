var init = function(e) {
  var bH = $('html').height() - 160;
  var cH = $('.page__inner').height();
  if(bH > cH){
    $('body').addClass('centered-content');
  }
};

$(document).ready(function () {
  init();
});

$(window).on("resize", init).on("orientationchange", init);
