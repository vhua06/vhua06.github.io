$(document).ready(function() {
  function e(e) {
      var i = attHtmlEncode(e, "data-closetitle");
      $(".footerAll>ul>li>ul").slideDown(350), $("footer").removeClass("off"), e.html(i)
  }
  function i(e) {
      var i = attHtmlEncode(e, "data-opentitle");
      $(".footerAll>ul>li>ul").slideUp(350), e.html(i), setTimeout(function() {
          $("footer").addClass("off")
      }, 250)
  }
  function t() {
      h = $(window).outerWidth() <= 768
  }
  function n() {
      w = $(window).outerWidth() <= 1024
  }
  function a() {
      0 == w ? ($(".mobile_close").prop("checked", !0), $(".cd-accordion-menu.left_menu4 ul,.cd-accordion-menu.left_menu3 ul,.cd-accordion-menu.left_menu2 ul").attr("style", "display:block;")) : ($(".mobile_close").prop("checked", !1), $(".cd-accordion-menu.left_menu4 ul,.cd-accordion-menu.left_menu3 ul,.cd-accordion-menu.left_menu2 ul").attr("style", "display:none;"), $(".control2 .left_menu2").eq(0).find("ul").attr("style", "display:block;").siblings(".mobile_close").prop("checked", !0))
  }
  function s() {
      var e, i, t, n;
      ($(".idxMapCon").length || $(".fansPageWrap").length) && (p = $(this).height(), f = $(this).scrollTop()), $(".idxMapCon").length && !g && (e = $(".idxMapCon").offset().top, i = $(".idxMapCon").outerHeight() / 4, e + i - p < f && f < e + i && e + i < f + p && (g = !0, $(".idxMapCon .idxMapConI").eq(0).find("iframe").css("display", "block"))), $(".fansPageWrap").length && !S && (t = $(".fansPageWrap").offset().top, n = $(".fansPageWrap").outerHeight() / 4, t + n - p < f && f < t + n && t + n < f + p && (S = !0, r()))
  }
  function r() {
      var e, i, t = $(".fansPageJs"),
          n = t.find("iframe"),
          a = $(".idxVideoSocialL"),
          s = t.outerWidth();
      a.outerHeight();
      e = Math.round(t.outerWidth()), 0 == h ? i = Math.round(a.outerHeight()) : (500 <= e && (e = 500), i = Math.round(t.outerHeight())), (0 == x || 1 == x && e != s) && (n.attr("src", ""), n.width(e), n.height(i), n.attr("src", "https://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2FMOENV.TW&width=" + e + "&height=" + i + "&colorscheme=light&show_faces=false&header=false&stream=true&show_border=true&small_header=false"), s = e)
  }
  function o() {
      0 == m && ($(".tabCon1ConJs").length && $(".tabCon1ConJs iframe").attr("loading", "").css("display", "block"), $(".fansPageJs").length && r(), m = !0)
  }
  var v, d, c, l, p, f, u = $(window).width(),
      h = !1,
      w = !1;
  $("body").on("click", ".excoSwitchJs", function() {
      $("footer").hasClass("off") ? e($(this)) : i($(this))
  })
});

function attHtmlEncode(e, i) {
    var t = document.createElement("span"),
        n = encodeURI(i ? e.attr(i) : e.textContent),
        a = decodeURI(n);
    return t.appendChild(document.createTextNode(a)), t.innerHTML
}
//Scroll to Top
$(function() {
    jQuery(window).scroll(function() {
        if(jQuery(this).scrollTop() > 150) {
            jQuery('.up').fadeIn();  
        } else {
            jQuery('.up').fadeOut();
        }      
    });
});
$('.up').on('click', function() {
    $('html, body').animate({scrollTop: '0'}, 200);
}); 