/*!
 * at_cage.js v1.0.1
 * http://www.art-tangency.com
 * Copyright (c) 2017 CaGe Wei
 *
 * Date: 2017-02-09T23:09:19.514Z
 */
// $(window).on('load', function() {
    $(window).on('load', function() {
        "use strict";
        var Gw = $(window),
            Gww = Gw.width(),
            Gwh = Gw.height(),
            Gd = $(document),
            Gdw = Gd.width(),
            Gdh = Gd.height();
        if (Gwh < Gdh) {
            $('#footer').css({ 'position': 'relative' });
        } else {
            $('#footer').css({ 'position': 'fixed' });
        }
    
        /*
        $('.loadPad').animate({opacity:0},1000, function(){
            $('.loadPad').css({'display':'none'});
        });*/
    });
    
    $(document).ready(function() {
        "use strict";
    
        // ======= Project Coding ====== //
        var Gw = $(window),
            Gww = Gw.width(),
            Gwh = Gw.height(),
            Gd = $(document),
            Gdw = Gd.width(),
            Gdh = Gd.height(),
            mainH = $('#main').height(),
            contentPad_H = Gwh - $('#footer').height();
        if (Gww >= 740) {
            $('.height_F').css({ 'min-height': Gwh });
        } else {
            navEventlistener();
        }
        $('.height_F2').css({ 'min-height': contentPad_H });
    
        var $subCtrl = $('.secCtrl');
        $subCtrl.click(function() { $(this).toggleClass('action'); });
        $subCtrl.keypress(function() { $(this).toggleClass('action'); });
    
        // ======= AT CaGe Wei Basic ====== //	
        showBackTopbtn();
        // back Top
        $('.backTop').click(function() { back2Top(); });
        $('.backTop').keypress(function() { back2Top(); });
        // $('.btn_back').click(function(){window.history.go(-1);});
        // $('.btn_back').keypress(function(){window.history.go(-1);});
    
    
        /* 2021-07-02 SEARCH  */
        var aqmcKeywords = [
            "AERMOD",
            "CMAQ",
            "ISCST3",
            "WRF",
            "Gaussian Dispersion Model",
            "Eulerian Grid Models",
            "法規及相關公告",
            "空氣品質模式模擬規範相關文件",
            "環境影響評估技術規範相關文件",
            "高斯類擴散模式",
            "網格類模式",
            "技術審查",
            "教育訓練"
         ];
         function split(val) {
             return val.split(/,\s*/);
         }
         function extractLast(term) {
             return split(term).pop();
         }
         $( "#search_e" )
         // don't navigate away from the field on tab 
         // when selecting an item
           .bind("keydown", function (event) {
               if (event.keyCode === $.ui.keyCode.TAB &&
                   $(this).data("ui-autocomplete").menu.active) {
                   event.preventDefault();
               }
           })
           .autocomplete({
               minLength: 0,
               source: function (request, response) {
                   // delegate back to autocomplete, 
                   // but extract the last term
                   response($.ui.autocomplete.filter(
                      aqmcKeywords, extractLast(request.term)));
               },
               focus: function () {
                   // prevent value inserted on focus
                   return false;
               },
               select: function (event, ui) {
                   var terms = split(this.value);
                   // remove the current input
                   terms.pop();
                   // add the selected item
                   terms.push(ui.item.value);
                   // add placeholder to get the 
                   //comma-and-space at the end
                   terms.push("");
                   this.value = terms.join(", ");
                   // this.value = terms.join("");
                   return false;
               }
           });
           // For Menu
           $( "#search_in_e" )
           // don't navigate away from the field on tab 
           // when selecting an item
             .bind("keydown", function (event) {
                 if (event.keyCode === $.ui.keyCode.TAB &&
                     $(this).data("ui-autocomplete").menu.active) {
                     event.preventDefault();
                 }
             })
             .autocomplete({
                 minLength: 0,
                 source: function (request, response) {
                     // delegate back to autocomplete, 
                     // but extract the last term
                     response($.ui.autocomplete.filter(
                        aqmcKeywords, extractLast(request.term)));
                 },
                 focus: function () {
                     // prevent value inserted on focus
                     return false;
                 },
                 select: function (event, ui) {
                     var terms = split(this.value);
                     // remove the current input
                     terms.pop();
                     // add the selected item
                     terms.push(ui.item.value);
                     // add placeholder to get the 
                     //comma-and-space at the end
                     terms.push("");
                     this.value = terms.join(", ");
                     return false;
                 }
             });
        //
        $('[data-toggle=search-form]').click(function() {
            $('.search-form-wrapper').toggleClass('open');
            $('.search-form-wrapper .search').focus();
            $('html').toggleClass('search-form-open');
            $('.search-form-tigger').removeClass('cusm-boder');
        });
    
        $('[data-toggle=search-form-close]').click(function() {
            $('.search-form-wrapper').removeClass('open');
            $('html').removeClass('search-form-open');
            $('.search-form-tigger').toggleClass('cusm-boder');
        });
    
        $('.dropdown img').hover(function() {
            $('.search-form-wrapper').removeClass('open');
            $('html').removeClass('search-form-open');
            $('.search-form-tigger').toggleClass('cusm-boder');
        });
        var e = jQuery.Event("keydown", { keyCode: 20 });
        $('#search_e').focus(function(){
            $('#search_e').trigger( e );
        });
        $('#search_in_e').focus(function(){
            $('#search_in_e').trigger( e );
        });
        $('#search_e').click(function(){
            $('#search_e').trigger( e );
        });
        $('search_in_e').click(function(){
            $('#search_in_e').trigger( e );
        });
        $('#search-bar').click(function(event) {
            var keyword = $('.search').val();
            $('.search').val(''); //清空欄位
            searchfire(event, keyword, 'tw');
        });
    
        $('#adv-search-bar').click(function(event) {
            var keyword = $('.search').val();
            $('.search').val(''); //清空欄位
            advsearchfire(event, keyword, 'tw');
        });
    
        $('#search-left').click(function(event) {
            var keyword = $('.search-left').val();
            $('.search-left').val(''); //清空欄位
            searchfire(event, keyword, 'tw');
        });
    
        $('#adv-search-left').click(function(event) {
            var keyword = $('.search-left').val();
            $('.search-left').val(''); //清空欄位
            advsearchfire(event, keyword, 'tw');
        });
    
        $('#search-bar_e').click(function(event) {
            var keyword = $('.search').val();
            $('.search').val(''); //清空欄位
            searchfire(event, keyword, 'us');
        });
    
        $('#adv-search-bar_e').click(function(event) {
            var keyword = $('.search').val();
            $('.search').val(''); //清空欄位
            advsearchfire(event, keyword, 'us');
        });
    
        $('#search-left_e').click(function(event) {
            var keyword = $('.search-left').val();
            $('.search-left').val(''); //清空欄位
            searchfire(event, keyword, 'us');
        });
    
        $('#adv-search-left_e').click(function(event) {
            var keyword = $('.search-left').val();
            $('.search-left').val(''); //清空欄位
            advsearchfire(event, keyword, 'us');
        });
        //
        $('#search-bar').keypress(function(e) {
            var key = e.which;
            var keyword = $('.search').val();
            if(key == 13)  // the enter key code
            {
                $('.search').val(''); //清空欄位
                searchfire(e, keyword, 'tw');
            }
        });
        $('#search-bar_e').keypress(function(e) {
            var key = e.which;
            var keyword = $('.search').val();
            if(key == 13)  // the enter key code
            {
                $('.search').val(''); //清空欄位
                searchfire(e, keyword, 'us');
            }
        });
        $('#adv-search-bar').keypress(function(e) {
            var key = e.which;
            var keyword = $('.search').val();
            if(key == 13)  // the enter key code
            {
                $('.search').val(''); //清空欄位
                advsearchfire(e, keyword, 'tw');
            }
        });
        $('#adv-search-bar_e').keypress(function(e) {
            var key = e.which;
            var keyword = $('.search').val();
            if(key == 13)  // the enter key code
            {
                $('.search').val(''); //清空欄位
                advsearchfire(e, keyword, 'us');
            }
        });
        $('#search_e').keypress(function(e) {
            var key = e.which;
            var keyword = $('.search').val();
            if(key == 13)  // the enter key code
            {
                // $('.search').val(''); //清空欄位
                return false;
            }
        });
    
        $('#search-left').keypress(function(e) {
            var key = e.which;
            var keyword = $('.search-left').val();
            if(key == 13)  // the enter key code
            {
                $('.search-left').val(''); //清空欄位
                searchfire(e, keyword, 'tw');
            }
        });
    
        $('#adv-search-left').keypress(function(e) {
            var key = e.which;
            var keyword = $('.search-left').val();
            if(key == 13)  // the enter key code
            {
                $('.search-left').val(''); //清空欄位
                advsearchfire(e, keyword, 'tw');
            }
        });
    
        $('#search-left_e').keypress(function(e) {
            var key = e.which;
            var keyword = $('.search-left').val();
            if(key == 13)  // the enter key code
            {
                $('.search-left').val(''); //清空欄位
                searchfire(e, keyword, 'us');
            }
        });
    
        $('#adv-search-left_e').keypress(function(e) {
            var key = e.which;
            var keyword = $('.search-left').val();
            if(key == 13)  // the enter key code
            {
                $('.search-left').val(''); //清空欄位
                advsearchfire(event, keyword, 'us');
            }
        });
    
        $('.socialsharing').click(function(e) {
            $(".mydropdown-content").css("display","block");
            $(".mydropdown").css("display","block");
        });
    
        $('.socialsharing').keypress(function(e) {
            $(".mydropdown-content").css("display","block");
            $(".mydropdown").css("display","block");
        }); 
    
        $('.facebook').click(function(e) {
            myshare('fb');
        });       
    
        $('.facebook').keypress(function(e) {
            myshare('fb');
        });        
    
        $('.lineicon').click(function(e) {
            myshare('line');
        });       
    
        $('.lineicon').keypress(function(e) {
            myshare('line');
        });        
    
        $('.twitter').click(function(e) {
            myshare('twitter');
        });       
    
        $('.twitter').keypress(function(e) {
            myshare('twitter');
        });
    });
    
    $(window).resize(function() {
        "use strict";
        var Gw = $(window),
            Gww = Gw.width(),
            Gwh = Gw.height(),
            Gd = $(document),
            Gdh = Gd.height();
        if (Gww >= 740) {
            $('.height_F').css({ 'min-height': Gwh });
        } else {
            navEventlistener();
        }
        showBackTopbtn();
    });
    
    $(window).scroll(function() {
        "use strict";
        showBackTopbtn();
    });
    
    function replaceTagChar(value) {
        var lt = /</g, 
        gt = />/g, 
        ap = /'/g, 
        ic = /"/g,
        bk1 = /\(/g,
        bk2 = /\)/g;
        return value.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;").replace(bk1, "&#40;").replace(bk2, "&#41;");
    }
    
    function searchfire_BK(event, keyword, lang) {
        event.preventDefault();
        // var sUTL = 'https://cse.google.com/cse?cx=a78015efb707541ae&as_sitesearch=aqmc.moenv.gov.tw';
        var sUTL = 'https://www.google.com.tw/search?hl=zh-TW&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=&cr=&as_qdr=all&as_sitesearch=aqmc.moenv.gov.tw&as_occt=any&safe=images&as_filetype=&tbs=';
        // var sUTL = './search_result.html?hl=zh-TW';
        if (keyword !== null && keyword !== "") {
            keyword = replaceTagChar(keyword);
            sUTL = sUTL + '&q=' + keyword;
            // sUTL = sUTL + '&as_q=' + keyword + '&q=' + keyword + '&hl=zh-TW&as_q=&num=100';
            // window.open(sUTL, "_blank");
            if(lang === 'tw') {
            // if(lang != 'tw') {
                openURL("搜尋：" + keyword, sUTL); 
                // sUTL = './search_result.html?hl=en-US';
            }
            else openURL_e("Search: " + keyword, sUTL); 
            // sUTL = sUTL + '&q=' + keyword + " site:aqmc.moenv.gov.tw";        
            // location.href = sUTL;
        } else {
            $('form').find("input[type=text]").each(function(ev) {
                if (!$(this).val()) {                    
                    alert("＊ 此處不能為空白 ( This cannot be blank ) ＊");
                    $(this).attr("placeholder", "＊ This cannot be blank ＊");
                }
            });
        }
    }
    
    function searchfire(event, keyword, lang) {
        event.preventDefault();
        // var sUTL = 'https://cse.google.com/cse?cx=a78015efb707541ae&as_sitesearch=aqmc.moenv.gov.tw';
        // var sUTL = 'https://www.google.com.tw/search?hl=zh-TW&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=&cr=&as_qdr=all&as_sitesearch=aqmc.moenv.gov.tw&as_occt=any&safe=images&as_filetype=&tbs=';
        var sUTL = './search_result.html?hl=zh-TW';
        var keywordL = keyword.toLowerCase();
        if(keywordL.includes("alert") || keywordL.includes("prompt") || keywordL.includes("confirm") || keywordL.includes("(") || keywordL.includes(")") || keywordL.includes("script") || keywordL.includes("backup") || keywordL.includes("create") || keywordL.includes("update") || keywordL.includes("delete") || keywordL.includes("drop") || keywordL.includes("insert") || keywordL.includes("select")) {
            keyword = " ";
        }
        if (keyword !== null && keyword !== "") {
            // sUTL = sUTL + '&as_q=' + keyword + '&q=' + keyword + '&hl=zh-TW&as_q=&num=100';
            // window.open(sUTL, "_blank");
            // if(lang === 'tw') {
            if(lang != 'tw') {
                // openURL("搜尋：" + keyword, sUTL); 
                sUTL = './search_result.html?hl=en-US';
            }
            // else openURL_e("Search: " + keyword, sUTL); 
            keyword = replaceTagChar(keyword);
            console.log(keyword);
            sUTL = sUTL + '&q=' + keyword + " site:aqmc.moenv.gov.tw";        
            location.href = sUTL;
        } else {
            $('form').find("input[type=text]").each(function(ev) {
                if (!$(this).val()) {
                    alert("＊ 此處不能為空白 ( This cannot be blank ) ＊");
                    $(this).attr("placeholder", "＊ 此處不能為空白 ＊");
                }
            });
            $("#search_e").effect( "shake" );
        }
    }
    
    function advsearchfire(event, keyword, lang) {
        event.preventDefault();
        var advURL = "https://www.google.com.tw/advanced_search?hl=zh-TW&as_q=&num=100&as_sitesearch=aqmc.moenv.gov.tw&cof=FORID%3A10&ie=UTF-8&sa=%E6%90%9C%E5%B0%8B&siteurl=www";
        
        keyword = replaceTagChar(keyword);
        if (keyword !== null && keyword !== "") {            
            advURL = advURL + "&q=" + keyword;
        }
        // window.open(advURL, "_blank");    
        if(lang === 'tw')
            openURL("進階搜尋：" + keyword, advURL);
        else openURL_e("Advanced Search: " + keyword, advURL);  
       //  location.href = advURL;
    }
    
    function showBackTopbtn() {
        var Gw = $(window),
            Gwh = Gw.height(),
            _nowHeight = $(window).scrollTop();
        //backTop BTN show & hide
        if (_nowHeight >= Gwh / 5) { $('.backTop').addClass('action') } else { $('.backTop').removeClass('action'); }
    
    }
    
    function back2Top() {
        $('html,body').animate({ scrollTop: $('#main').offset().top });
    };
    
    function navEventlistener() {
        $('.nav').click(function() {
            $(this).toggleClass('action');
            $('.mainLeft').toggleClass('action');
        });
    }
    
    function openURL(title, url) {
        let msg = (title !== undefined) ? "另開新視窗，前往連結 「" + title + "」 ？" : "您即將離開本網站，繼續前往連結頁嗎?";
        let yesno = confirm(msg);
        if (yesno == true) {
            window.open(url, "_blank");
        }
    }
    
    function openURL_e(title, url) {
        let msg = (title !== undefined) ? "To open in a new tab, then open a link (" +
            title + ") on a web page ?" : "You are going to leave this website. Continue with ?";
        let yesno = confirm(msg);
        if (yesno == true) {
            window.open(url, "_blank");
        }
    }    
    
	/*----- 社群分享 -----*/
	function myshare(key, subkey = "") {
		let _loc = location;
		let link = encodeURIComponent(_loc.href);
		let url = "";
        let urls = link.split("%2F");

        subkey = (subkey === "") ? "" : "%23".concat(subkey);
        let reURL = (link.includes("ENG")) ? "https%3A%2F%2Faqmc.moenv.gov.tw%2FENG%2F".concat(urls.at(-1)).concat(subkey) : "https%3A%2F%2Faqmc.moenv.gov.tw%2F".concat(urls.at(-1)).concat(subkey);
		switch (key) {
			case "fb": url = 'https://www.facebook.com/sharer/sharer.php?u='.concat(reURL).concat("&amp;src=sdkpreparse"); 
            break;
            
            case "line": url = 'https://social-plugins.line.me/lineit/share?url='.concat(reURL).concat("&text=環境部大氣環境司"); 
            break;

            case "twitter": url = 'https://twitter.com/share?url='.concat(reURL);
            break;
		}
		reOpen(url);
	}

	function reOpen(url) {
		let myurl = window.open(url, "reURL");
		myurl.open(url, "reURL");
	}