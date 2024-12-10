function contentEncode(e, i) {
  var t = document.createElement("span"),
      n = encodeURI(i ? e.attr(i) : e.textContent),
      a = decodeURI(n);
  return t.appendChild(document.createTextNode(a)), t.innerHTML
}
$(document).ready(function() {
  var e = $(".cd-accordion-menu");
  0 < e.length && e.each(function() {
      $(this).on("change", 'input[type="checkbox"]', function() {
          var e = $(this);
          e.prop("checked") ? e.siblings("ul").attr("style", "display:none;").slideDown(300) : e.siblings("ul").attr("style", "display:block;").slideUp(300)
      })
  })
}), $(document).ready(function() {
  function e(e) {
      var i = contentEncode(e, "data-closetitle");
      $(".footerAll>ul>li>ul").slideDown(350), $("footer").removeClass("off"), e.attr("title", i).html(i)
  }

  function i(e) {
      var i = contentEncode(e, "data-opentitle");
      $(".footerAll>ul>li>ul").slideUp(350), e.attr("title", i).html(i), setTimeout(function() {
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
  }), $(".kv1SwiperJs").length && function() {
      function e() {
          i = $(".kv1SwiperJs .swiper-slide"), t = $(".kv1SwiperJs .swiper-slide-active"), n = $(".kv1SwiperPageJs .swiper-pagination-bullet"), a = $(".kv1SwiperPageJs .swiper-pagination-bullet-active"), i.attr("aria-hidden", "true"), i.find("a, iframe").attr("tabindex", -1), t.attr("aria-hidden", ""), t.find("a, iframe").attr("tabindex", ""), n.attr("aria-current", ""), a.attr("aria-current", "true")
      }
      if (1 < $(".kv1SwiperJs .swiper-slide").length) {
          var i, t, n, a, s = [];
          $(".kv1SwiperJs .swiper-slide").each(function() {
              s.push($(this).find(".swiperTxt").text())
          });
          var r = new Swiper(".kv1SwiperJs", {
              preloadImages: !1,
              lazy: !0,
              pagination: {
                  el: ".kv1SwiperPageJs",
                  clickable: !0,
                  renderBullet: function(e, i) {
                      return '<span class="' + i + '"><i>' + s[e] + "</i></span>"
                  }
              },
              navigation: {
                  prevEl: ".kv1SwiperPrevBtnJs",
                  nextEl: ".kv1SwiperNextBtnJs"
              },
              a11y: {
                  prevSlideMessage: contentEncode($(".kv1SwiperPrevBtnJs span")[0]),
                  nextSlideMessage: contentEncode($(".kv1SwiperNextBtnJs span")[0])
              },
              autoplay: {
                  delay: 7e3,
                  disableOnInteraction: !1
              },
              loop: !0,
              observer: !0,
              observeParents: !0,
              watchOverflow: !0,
              on: {
                  afterInit: function() {
                      e()
                  },
                  slideChangeTransitionEnd: function() {
                      e()
                  }
              }
          });
          $(".kv1SwiperJs .swiperCon").on("focus", function() {
              r.autoplay.stop()
          }), $(".kv1SwiperPrevBtnJs,.kv1SwiperNextBtnJs").on("focus", function() {
              r.autoplay.stop()
          }), $(".kv1SwiperPrevBtnJs,.kv1SwiperNextBtnJs").on("mousedown", function(e) {
              e.preventDefault()
          }), $($(".kv1SwiperJs .swiperCon")).on("keydown", function(e) {
              9 === e.which && e.shiftKey && r.autoplay.start()
          }), $(".kv1SwiperNextBtnJs").on("keydown", function(e) {
              9 !== e.which || e.shiftKey || r.autoplay.start()
          })
      } else $(".kv1SwiperJs").addClass("oneKv"), $(".kv1SwiperJs").find(".swiper-lazy").each(function() {
          var e = contentEncode($(this), "data-background");
          $(this).css("background-image", "url(" + e + ")")
      }), $(".kv1SwiperJs").find(".swiper-lazy-preloader").remove()
  }(), $(".hintJs").length && function() {
      function e() {
          var e = parseInt(a * u);
          h.eq(0).animate({
              left: -1 * a
          }, e, "linear", function() {
              h.css({
                  top: "-2em",
                  left: 0
              }), setTimeout(function() {
                  h.animate({
                      top: "0"
                  }, f, function() {
                      i()
                  })
              }, f)
          })
      }

      function i() {
          setTimeout(e, p)
      }

      function c(e) {
          var i, t, n, a, s = $(".hintJs").innerWidth(),
              r = h.eq(e).innerWidth(),
              o = 0 <= e - 1 ? e - 1 : w - 1;
          if (r < s) ! function(e, i) {
              h.eq(e).animate({
                  top: 0
              }, f, "linear"), l(i);
              var t = e === w - 1 ? 0 : ++e;
              v = setTimeout(c, p, t)
          }(e, o);
          else {
              var d = parseInt(r * u);
              i = e, t = o, n = r, a = d, h.eq(i).animate({
                  top: 0
              }, f, "linear", function() {
                  v = setTimeout(function() {
                      h.eq(i).animate({
                          left: -1 * n
                      }, a, "linear", function() {
                          var e = i === w - 1 ? 0 : ++i;
                          v = setTimeout(c, 500, e)
                      })
                  }, 2e3)
              }), l(t)
          }
      }

      function l(e) {
          h.eq(e).animate({
              top: t
          }, f, "linear", function() {
              h.eq(e).css({
                  top: "-2em",
                  left: 0
              })
          })
      }
      var t = "2em",
          p = 7e3,
          f = 850,
          u = 15,
          h = $(".hintJs li"),
          w = h.length;
      if (clearTimeout(v), h.stop().css({
              top: "-" + t,
              left: 0
          }), 0 == w) return;
      if (1 == w) {
          var n = $(".hintJs").innerWidth(),
              a = h.eq(0).innerWidth();
          h.css("top", 0), n < a && i()
      }
      1 < w && (h.css("top", "-" + t), c(0)), h.find("a").on("focus", function() {
          var e = $(this).parent("li").index();
          clearTimeout(v), h.css({
              top: "-" + t,
              left: 0
          }), h.eq(e).stop().css({
              top: 0,
              left: 0
          })
      }).on("mousedown", function(e) {
          e.preventDefault()
      }), $(".closeHintJs").on("click", function() {
          $(".hintBar").addClass("off"), clearTimeout(v), $(".hintJs").removeClass("hintJs"), $(".hintBar").slideUp(400)
      })
  }(), $(".pic1SwiperJs").length && function() {
      function e() {
          $slides = $(".pic1SwiperJs .swiper-slide"), $activeSlides = $(".pic1SwiperJs .swiper-slide-active"), $dot = $(".pic1SwiperPageJs .swiper-pagination-bullet"), $activeDot = $(".pic1SwiperPageJs .swiper-pagination-bullet-active"), $slides.attr("aria-hidden", "true"), $slides.find("a, iframe").attr("tabindex", -1), $activeSlides.attr("aria-hidden", ""), $activeSlides.find("a, iframe").attr("tabindex", ""), $dot.attr("aria-current", ""), $activeDot.attr("aria-current", "true")
      }
      if (1 < $(".pic1SwiperJs .swiper-slide").length) {
          var t = [];
          $(".pic1SwiperJs .swiper-slide").each(function() {
              t.push($(this).find(".swiperTxt").text())
          });
          var i = new Swiper(".pic1SwiperJs", {
              preloadImages: !1,
              pagination: {
                  el: ".pic1SwiperPageJs",
                  clickable: !0,
                  renderBullet: function(e, i) {
                      return '<span class="' + i + '"><i>' + t[e] + "</i></span>"
                  }
              },
              navigation: {
                  prevEl: ".pic1SwiperPrevBtnJs",
                  nextEl: ".pic1SwiperNextBtnJs"
              },
              a11y: {
                  prevSlideMessage: contentEncode($(".pic1SwiperPrevBtnJs span")[0]),
                  nextSlideMessage: contentEncode($(".pic1SwiperNextBtnJs span")[0])
              },
              autoplay: {
                  delay: 7e3,
                  disableOnInteraction: !1
              },
              loop: !0,
              observer: !0,
              observeParents: !0,
              watchOverflow: !0,
              on: {
                  afterInit: function() {
                      e()
                  },
                  slideChangeTransitionEnd: function() {
                      e()
                  }
              }
          });
          $(".pic1SwiperJs .slideCon").on("focus", function() {
              i.autoplay.stop()
          }), $(".pic1SwiperPrevBtnJs,.pic1SwiperNextBtnJs").on("focus", function() {
              i.autoplay.stop()
          }), $(".pic1SwiperPrevBtnJs,.pic1SwiperNextBtnJs").on("mousedown", function(e) {
              e.preventDefault()
          }), $($(".pic1SwiperJs .slideCon")).on("keydown", function(e) {
              9 === e.which && e.shiftKey && i.autoplay.start()
          }), $(".pic1SwiperNextBtnJs").on("keydown", function(e) {
              9 !== e.which || e.shiftKey || i.autoplay.start()
          })
      } else $(".pic1SwiperJs").addClass("onePic1")
  }(), $(".idxVideo1SwiperJs").length && (! function() {
      function e() {
          a = $(".idxVideo1SwiperJs .swiper-slide"), i = $(".idxVideo1SwiperJs .swiper-slide-active"), t = $(".idxVideo1SwiperPageJs .swiper-pagination-bullet"), n = $(".idxVideo1SwiperPageJs .swiper-pagination-bullet-active"), a.attr("aria-hidden", "true"), a.find("a, iframe").attr("tabindex", -1), i.attr("aria-hidden", ""), i.find("a, iframe").attr("tabindex", ""), t.attr("aria-current", ""), n.attr("aria-current", "true")
      }
      if (1 < $(".idxVideo1SwiperJs .swiper-slide").length) {
          var i, t, n, a = $(".idxVideo1SwiperJs .swiper-slide"),
              s = [];
          a.each(function() {
              s.push($(this).find(".swiperTxt").text())
          }), new Swiper(".idxVideo1SwiperJs", {
              preloadImages: !1,
              pagination: {
                  el: ".idxVideo1SwiperPageJs",
                  clickable: !0,
                  renderBullet: function(e, i) {
                      return '<span class="' + i + '"><i>' + s[e] + "</i></span>"
                  }
              },
              navigation: {
                  prevEl: ".idxVideo1SwiperPrevBtnJs",
                  nextEl: ".idxVideo1SwiperNextBtnJs"
              },
              a11y: {
                  prevSlideMessage: contentEncode($(".idxVideo1SwiperPrevBtnJs span")[0]),
                  nextSlideMessage: contentEncode($(".idxVideo1SwiperNextBtnJs span")[0])
              },
              effect: "fade",
              fadeEffect: {
                  crossFade: !0
              },
              observer: !0,
              observeParents: !0,
              watchOverflow: !0,
              on: {
                  afterInit: function() {
                      e()
                  },
                  reachBeginning: function() {
                      e()
                  },
                  slideChangeTransitionEnd: function() {
                      e()
                  }
              }
          })
      }
  }(), $(".ytWrap iframe").each(function(e) {
      var i = $(this);
      i.contents().on("keydown", function(e) {
          13 === e.which && setTimeout(function() {
              i.focus()
          }, 200)
      })
  })), $(".idxVideo2SwiperJs").length && function() {
      function e() {
          a = $(".idxVideo2SwiperJs .swiper-slide"), i = $(".idxVideo2SwiperJs .swiper-slide-active"), t = $(".idxVideo2SwiperPageJs .swiper-pagination-bullet"), n = $(".idxVideo2SwiperPageJs .swiper-pagination-bullet-active"), a.attr("aria-hidden", "true"), a.find("a, iframe").attr("tabindex", -1), i.attr("aria-hidden", ""), i.find("a, iframe").attr("tabindex", ""), t.attr("aria-current", ""), n.attr("aria-current", "true")
      }
      if (1 < $(".idxVideo2SwiperJs .swiper-slide").length) {
          var i, t, n, a = $(".idxVideo2SwiperJs .swiper-slide"),
              s = [];
          a.each(function() {
              s.push($(this).find(".swiperTxt").text())
          }), new Swiper(".idxVideo2SwiperJs", {
              preloadImages: !1,
              pagination: {
                  el: ".idxVideo2SwiperPageJs",
                  clickable: !0,
                  renderBullet: function(e, i) {
                      return '<span class="' + i + '"><i>' + s[e] + "</i></span>"
                  }
              },
              navigation: {
                  prevEl: ".idxVideo2SwiperPrevBtnJs",
                  nextEl: ".idxVideo2SwiperNextBtnJs"
              },
              a11y: {
                  prevSlideMessage: contentEncode($(".idxVideo2SwiperPrevBtnJs span")[0]),
                  nextSlideMessage: contentEncode($(".idxVideo2SwiperNextBtnJs span")[0])
              },
              effect: "fade",
              fadeEffect: {
                  crossFade: !0
              },
              observer: !0,
              observeParents: !0,
              watchOverflow: !0,
              on: {
                  afterInit: function() {
                      e()
                  },
                  reachBeginning: function() {
                      e()
                  },
                  slideChangeTransitionEnd: function() {
                      e()
                  }
              }
          })
      }
  }(), $(".idxVideo3SwiperJs").length && function() {
      function e() {
          a = $(".idxVideo3SwiperJs .swiper-slide"), i = $(".idxVideo3SwiperJs .swiper-slide-active"), t = $(".idxVideo3SwiperPageJs .swiper-pagination-bullet"), n = $(".idxVideo3SwiperPageJs .swiper-pagination-bullet-active"), a.attr("aria-hidden", "true"), a.find("a, iframe").attr("tabindex", -1), i.attr("aria-hidden", ""), i.find("a, iframe").attr("tabindex", ""), t.attr("aria-current", ""), n.attr("aria-current", "true")
      }
      if (1 < $(".idxVideo3SwiperJs .swiper-slide").length) {
          var i, t, n, a = $(".idxVideo3SwiperJs .swiper-slide"),
              s = [];
          a.each(function() {
              s.push($(this).find(".swiperTxt").text())
          }), new Swiper(".idxVideo3SwiperJs", {
              preloadImages: !1,
              pagination: {
                  el: ".idxVideo3SwiperPageJs",
                  clickable: !0,
                  renderBullet: function(e, i) {
                      return '<span class="' + i + '"><i>' + s[e] + "</i></span>"
                  }
              },
              navigation: {
                  prevEl: ".idxVideo3SwiperPrevBtnJs",
                  nextEl: ".idxVideo3SwiperNextBtnJs"
              },
              a11y: {
                  prevSlideMessage: contentEncode($(".idxVideo3SwiperPrevBtnJs span")[0]),
                  nextSlideMessage: contentEncode($(".idxVideo3SwiperNextBtnJs span")[0])
              },
              effect: "fade",
              fadeEffect: {
                  crossFade: !0
              },
              observer: !0,
              observeParents: !0,
              watchOverflow: !0,
              on: {
                  afterInit: function() {
                      e()
                  },
                  reachBeginning: function() {
                      e()
                  },
                  slideChangeTransitionEnd: function() {
                      e()
                  }
              }
          })
      }
  }(), $(".linksSwiperJs").length && function() {
      function e() {
          $(".linksSwiperPrevBtnJs").hasClass("swiper-button-lock") ? $(".linksSwiperJs .swiper-wrapper").css("justify-content", "center") : $(".linksSwiperJs .swiper-wrapper").css("justify-content", "")
      }
      var i;
      i = $(".linksSwiperPrevBtnJs").length ? {
          prevSlideMessage: contentEncode($(".linksSwiperPrevBtnJs")[0]),
          nextSlideMessage: contentEncode($(".linksSwiperNextBtnJs")[0])
      } : {
          enabled: !0
      }, new Swiper(".linksSwiperJs", {
          preloadImages: !1,
          navigation: {
              prevEl: ".linksSwiperPrevBtnJs",
              nextEl: ".linksSwiperNextBtnJs"
          },
          a11y: i,
          observer: !0,
          observeParents: !0,
          breakpoints: {
              1200: {
                  slidesPerGroup: 5,
                  slidesPerView: 5
              },
              992: {
                  slidesPerGroup: 4,
                  slidesPerView: 4
              },
              768: {
                  slidesPerGroup: 3,
                  slidesPerView: 3
              },
              500: {
                  slidesPerGroup: 2,
                  slidesPerView: 2
              }
          },
          on: {
              afterInit: function() {
                  e()
              },
              resize: function() {
                  e()
              }
          }
      })
  }(), $(".tabCon1NavJs").length && (c = $(".tabCon1NavJs"), l = $(".tabCon1ConJs"), c.each(function() {
      var e = $(this).find(".on").parent("li").index();
      e < 0 && (e = 0), $(this).find("a").on("click", function() {
          ! function(e) {
              if (e.parents(c).hasClass("navSetTarget")) {
                  var i = contentEncode(e, "data-target");
                  "undefined" != i && (e.addClass("on").parent("li").siblings().find("a").removeClass("on"), $("#" + i).fadeIn().siblings().hide())
              } else e.addClass("on").parent("li").siblings().find("a").removeClass("on"), e.parents().hasClass("idxBusinessNav") || e.parents(".idxVideoNav").length || e.parents(c).next(l).children("div").eq(e.parent("li").index()).fadeIn().siblings().hide(), e.parents().hasClass("idxBusinessNav") && $(".idxBusinessR").find(l).children("div").eq(e.parent("li").index()).fadeIn().siblings().hide(), e.parents(".idxVideoNav").length && e.parents(c).next(l).children("div").eq(e.parent("li").index()).css("visibility", "visible").fadeIn().siblings().hide().css("visibility", "hidden")
          }($(this))
      }).eq(e).click()
  })), $(".moreListJs").length && ($(".moreListJs").each(function() {
      var e = $(this),
          i = e.find(".listI").length;
      e.attr("data-num", i), i <= 3 && e.addClass("less3"), i <= 4 && e.addClass("less4"), i <= 6 && e.addClass("less6"), i <= 8 && e.addClass("less8"), i <= 10 && e.addClass("less10")
  }), $(".moreBtnJs").each(function() {
      var e = $(this);
      e.on("click", function() {
          e.parent(".btnBar1").addClass("hide"), e.parent(".btnBar1").prev(".moreListJs").addClass("showAll")
      })
  })), t(), n(), $(".left_menu2").length && a();
  var g = !1,
      S = !1,
      x = !1,
      m = !1;
  (s(), /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) ? window.matchMedia("print").addListener(function(e) {
      e.matches && o()
  }): window.onbeforeprint = function() {
      o()
  };
  $(window).on("resize", function() {
      clearTimeout(d), d = setTimeout(function() {
          $(window).width() != u && (u = $(window).width(), t(), n(), 0 == w && "true" == $(".navbar-toggle").attr("aria-expanded") && $(".navbar-toggle").click(), $(".fansPageJs").length && r(), $(".left_menu2").length && a())
      }, 250)
  }), $(window).scroll(function() {
      180 < $(this).scrollTop() ? $(".searchSwitch").addClass("searchSwitchFixed") : $(".searchSwitch").removeClass("searchSwitchFixed")
  }), ($(".idxMapCon").length || $(".fansPageWrap").length) && $(window).scroll(function() {
      s()
  }), $(".timeList").length && $(".timeList .summary").each(function() {
      var a, e, i, t, s, r, o, d, c;
      a = $(this), e = a[0].innerHTML, i = encodeURIComponent(e), t = e.split("<br>"), r = [], o = !(s = 0), d = encodeURIComponent(a.data("moretitle")), c = encodeURIComponent(a.data("moreicon")), $.each(t, function(e, i) {
          var t, n = i;
          0 != o && (120 < (s += $.trim(n).length) ? (120 < (s = 120 - (s - $.trim(n).length)) ? r.push("...") : r.push(n.substring(0, s) + '...<span class="ci-filetype">' + decodeURIComponent(c) + "</span>"), o = !1, t = r.join("<br>"), a[0].innerHTML = '<a class="moreTxt" href="javascript:;" title=' + decodeURIComponent(d) + ">" + t + "</a>") : (r.push(n), t = r.join("<br>"), a[0].innerHTML = t))
      }), a.on("click", ".moreTxt", function() {
          $(this).parent(".summary").empty().html(decodeURIComponent(i))
      })
  })
}), document.addEventListener("DOMContentLoaded", function() {
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      var e = document.getElementById("mobile-hidden-section");
      e && (e.style.display = "none")
  }
});