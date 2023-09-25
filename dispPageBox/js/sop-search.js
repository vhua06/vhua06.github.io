
        $(document).ready(function() {
			"use strict";
			/* SEARCH  */
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

			$('.search-form').click(function(event) {
				event.preventDefault();
				var keyword = $('.search').val();
				if (keyword !== null && keyword !== "") {
					$('.search').val(''); //清空欄位
					openURL();
					window.open("https://cse.google.com/cse?cx=1f03caa0789045668&as_sitesearch=adapt.epa.gov.tw&q=" + keyword, "_blank");
				}
			});

			$('#adv-search-bar').click(function(event) {
				event.preventDefault();
				var keyword = $('.search').val();
				var advURL = "https://www.google.com.tw/advanced_search?hl=zh-TW&as_q=&num=100&as_sitesearch=adapt.epa.gov.tw&cof=FORID%3A10&ie=UTF-8&sa=%E6%90%9C%E5%B0%8B&siteurl=www";
				if (keyword !== null && keyword !== "") {
					$('.search').val(''); //清空欄位
					advURL = advURL + "&q=" + keyword;
				}
				window.open(advURL, "_blank");
			});
		});
		
		function openURL() {
			alert("即將開啟新視窗");
		}