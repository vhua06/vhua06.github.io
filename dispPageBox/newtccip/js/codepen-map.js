$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
  $("#taipei-list").addClass("list-hover");
  $('.list-item').removeClass('open');
  $(".list-item-body").slideUp();

});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
  $("#taipei-list").removeClass("list-hover");
});

$(document).mousemove(function(e) {
  // $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  // $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
  $('#info-box').css('top', e.offsetY - $('#info-box').height()-30);
  $('#info-box').css('left', e.offsetX - ($('#info-box').width())/2);
  //offsetX, offsetY 滑鼠相對於事件源元素（srcElement）的X,Y坐標，只有IE事件有這2個屬性，標準事件沒有對應的屬性。
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() { 
    var link = $(this).attr('href');   
    window.open(link,'_blank');
    return false;
  });
}
