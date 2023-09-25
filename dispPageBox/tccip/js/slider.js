//Slider
$(document).ready(function(){

  $('.keySlider').slick({
      infinite: true,
      cssEase: 'linear',
      autoplay:true
  });

  $('.videoSlider').slick({
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
  });


//bannerSecion
if ($(window).width() <= 375) {
      $('.bannerSection').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      });

  }else if($(window).width() <= 480){
      $('.bannerSection').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      });

  }else if($(window).width() <= 768){
      $('.bannerSection').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      });

  }else{
      $('.bannerSection').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      });
  };








});


//video
$(document).ready(function(){
    $('.videoImg').hover(function(){
        $(this).find('.playicon').addClass('iconHover')
    },function(){
        $(this).find('.playicon').removeClass('iconHover')
    })
//popup
 $('.popup-with-move-anim').magnificPopup({
          type: 'inline',
          fixedContentPos: false,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-slide-bottom'
});



  $(document).on('click', '.popup-modal-dismiss', function (e) {
      e.preventDefault();uploadItem_H
      $.magnificPopup.close();
  });



});




