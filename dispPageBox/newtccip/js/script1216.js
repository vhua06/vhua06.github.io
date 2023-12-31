﻿/*=================================================================
             UTRUST JS - All Rights Reserved.
==================================================================*/


// top
var $ = jQuery.noConflict();
jQuery(document).ready(function ($) {
    scrollToTop.init();
});

var scrollToTop = {
    /**
     * When the user has scrolled more than 100 pixels then we display the scroll to top button using the fadeIn function
     * If the scroll position is less than 100 then hide the scroll up button
     *
     * On the click event of the scroll to top button scroll the window to the top
     */
    init: function () {

        //Check to see if the window is top if not then display button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.ToHome').fadeIn();
            } else {
                $('.ToHome').fadeOut();
            }
        });

        // Click event to scroll to top
        $('.scrollToTop').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    }
};

// device
var classNames = [];
if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) classNames.push('device-ios');
if (navigator.userAgent.match(/android/i)) classNames.push('device-android');

var html = document.getElementsByTagName('html')[0];

if (classNames.length) classNames.push('on-device');



$(".sidebar-offcanvas").height($("#sidebar").height());

// offcanvas
$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });
});


//if ($(window).width() <= 768) {} else {}

// sidebar list-group
//$(".list-group").navgoco({accordion: true});


// affix top
$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $(".header").addClass('affix-top');
    } else {
        $(".header").removeClass('affix-top');
    }

    if ($(document).width() > 900) {
        // $(".header").css("top", Math.max(130, $(this).scrollTop()));

        if ($(this).scrollTop() > 135) {
            // $(".affix-top").css("margin-top", "-95px");
            $(".header").addClass('affix-top');

            // $(".header").css("top", "53px");
        } else {
            // $(".affix-top").css("margin-top", "-5px");
            $(".header").removeClass('affix-top');
            // $(".header").css("top", "33px");
        }
    }

});



// Highcharts
if ($('#StackedBar').length) {

    Highcharts.chart('StackedBar', {
        chart: {
            type: 'bar',
            backgroundColor: null,
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        title: {
            text: '優先調適行動計畫與行動綱領政策內涵關聯圖'
        },
        xAxis: {
            categories: ['教育、練與宣導', '財務及金融機制', '風險評估、科學研究', '法規推動教育、練與宣導'],
            labels: {
                style: {
                    color: '#4d4d4d'
                }
            },
            lineWidth: 1,
            lineColor: '#4d4d4d',
        },
        yAxis: {
            min: 0,
            // title: {
            //     text: 'Total fruit consumption'
            // },
            labels: {
                style: {
                    color: '#4d4d4d'
                }
            },
            gridLineColor: '#4d4d4d'
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: '內政部',
            data: [5, 3, 4, 7]
        }, {
            name: '勞動部',
            data: [5, 3, 4, 7]
        }, {
            name: '海洋委員會',
            data: [5, 3, 4, 7]
        }, {
            name: '經濟部',
            data: [5, 3, 4, 7]
        }, {
            name: '衛生福利部',
            data: [5, 3, 4, 7]
        }, {
            name: '原住民族委員會',
            data: [5, 3, 4, 7]
        }, {
            name: '交通部',
            data: [5, 3, 4, 7]
        }, {
            name: '科技部',
            data: [5, 3, 4, 7]
        }, {
            name: '公共工程委員會',
            data: [5, 3, 4, 7]
        }, {
            name: '文化部',
            data: [5, 3, 4, 7]
        }, {
            name: '金融管理與監督委員會',
            data: [5, 3, 4, 7]
        }, {
            name: '國家通訊傳播委員會',
            data: [5, 3, 4, 7]
        }]
    });
};
//chart.yAxis[0].ticks[0].gridLine.css({ stroke: "#000", "stroke-width": 1 });

// Pie chart
if ($('#pieChart').length) {
    $(function () {
        $('#pieChart').highcharts({
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            chart: {
                type: 'pie',
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
                backgroundColor: null,
            },
            exporting: {
                enabled: false
            },
            title: {
                text: '',
                // align: 'center',
                // verticalAlign: 'middle'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: '案件數量',
                innerSize: '50%',
                data: [{
                    name: '教育、練與宣導',
                    y: 40,
                    sliced: true,
                    selected: true
                }, {
                    name: '財務及金融機制',
                    y: 30
                }, {
                    name: '風險評估、科學研究',
                    y: 20
                }, {
                    name: '法規推動',
                    y: 10
                }]
            }]

        })
    });
};


// polar chart
if ($('#polarChart').length) {
    $(function () {
        $('#polarChart').highcharts({
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            chart: {
                renderTo: 'container',
                polar: true,
                type: 'area',
                backgroundColor: null,
                // type: 'line'
            },

            title: {
                text: '',
                // x: -80
            },

            pane: {
                size: '80%'
            },

            xAxis: {
                categories: ['災害風險評估與治理', '維生基礎設施韌性', '水資源供需平衡與效能提升', '國土安全整合管理',
                        '永續海洋資源及海岸防護管理', '能源供給及產業調適推動', '農業生產及生物多樣性維護', '醫療與健康風險管理'],
                tickmarkPlacement: 'on',
                lineWidth: 0,
                lineColor: '#4d4d4d',
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0,
                gridLineColor: '#4d4d4d',
                // labels: {
                //     style: {
                //         color: '#4d4d4d'
                //     }
                // },
            },

            tooltip: {
                shared: true,
                // valuePrefix: '$'
            },

            // legend: {
            //     align: 'right',
            //     verticalAlign: 'top',
            //     y: 100,
            //     layout: 'vertical'
            // },

            series: [{
                name: '國家',
                data: [38, 29, 22, 14, 8, 12, 39, 11],
                pointPlacement: 'on'
            }, {
                name: '內政部',
                data: [0, 0, 0, 4, 1, 0, 0, 0],
                pointPlacement: 'on'
            }, {
                name: '文化部',
                data: [4, 0, 0, 0, 1, 0, 0, 0],
                pointPlacement: 'on'
            }, {
                name: '交通部',
                data: [13, 10, 1, 3, 2, 0, 0, 0],
                pointPlacement: 'on'
            }, {
                name: '行政院公共工程委員會',
                data: [0, 2, 0, 0, 0, 0, 0, 0],
                pointPlacement: 'on'
            }, {
                name: '金融監督管理委員會',
                data: [0, 0, 0, 0, 0, 2, 0, 0],
                pointPlacement: 'on'
            }, {
                name: '科技部',
                data: [1, 0, 0, 0, 0, 0, 0, 0],
                pointPlacement: 'on'
            }, {
                name: '原住民族委員會',
                data: [0, 0, 0, 0, 0, 0, 0, 0],
                pointPlacement: 'on'
            }, {
                name: '海洋委員會',
                data: [1, 0, 0, 0, 3, 0, 1, 0],
                pointPlacement: 'on'
            }, {
                name: '財政部',
                data: [0, 0, 0, 4, 1, 0, 0, 0],
                pointPlacement: 'on'
            }, {
                name: '國家通訊傳播委員會',
                data: [0, 2, 0, 0, 0, 0, 0, 0],
                pointPlacement: 'on'
            }, {
                name: '國家發展委員會',
                data: [0, 0, 0, 0, 0, 0, 0, 0],
                pointPlacement: 'on'
            }, {
                name: '教育部',
                data: [0, 0, 0, 0, 0, 0, 0, 0],
                pointPlacement: 'on'
            }, {
                name: '勞動部',
                data: [0, 0, 0, 0, 0, 0, 0, 2],
                pointPlacement: 'on'
            }, {
                name: '經濟部',
                data: [8, 14, 16, 0, 3, 9, 1, 0],
                pointPlacement: 'on'
            }, {
                name: '農委會',
                data: [7, 1, 3, 4, 1, 1, 37, 0],
                pointPlacement: 'on'
            }, {
                name: '衛生福利部',
                data: [4, 0, 0, 0, 0, 0, 0, 4],
                pointPlacement: 'on'
            }, {
                name: '環保署',
                data: [0, 0, 2, 0, 0, 0, 0, 1],
                pointPlacement: 'on'
            }]

            //////////////////////////////////////
            // credits: {
            //     enabled: false
            // },
            // exporting: {
            //     enabled: false
            // },
            // chart: {
            //     polar: true,
            //     backgroundColor: null,
            // },

            // title: {
            //     text: 'Highcharts Polar Chart'
            // },

            // // subtitle: {
            // //     text: 'Also known as Radar Chart'
            // // },

            // pane: {
            //     startAngle: 0,
            //     endAngle: 360
            // },

            // // xAxis: {
            // //     tickInterval: 45,
            // //     min: 0,
            // //     max: 360,
            // //     labels: {
            // //         format: '{value}°'
            // //     }
            // // },

            // xAxis: {
            //     categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
            //             'Information Technology', 'Administration','Information Technology', 'Administration'],
            //     tickmarkPlacement: 'on',
            //     lineWidth: 0
            // },

            // yAxis: {
            //     min: 0
            // },

            // plotOptions: {
            //     series: {
            //         pointStart: 0,
            //         pointInterval: 45
            //     },
            //     column: {
            //         pointPadding: 0,
            //         groupPadding: 0
            //     }
            // },

            // series: [{
            //     type: 'column',
            //     name: 'Column',
            //     data: [8, 7, 6, 5, 4, 3, 2, 1],
            //     pointPlacement: 'between'
            // }, {
            //     type: 'line',
            //     name: 'Line',
            //     data: [1, 2, 3, 4, 5, 6, 7, 8]
            // }, {
            //     type: 'area',
            //     name: 'Area',
            //     data: [1, 8, 2, 7, 3, 6, 4, 5]
            // }]

        })
    });


};


// vkslider
if ($('.vkslider').length) {
    var vkslider = new Swiper('.vkslider-wrap', {
        pagination: {
            el: '.vk.swiper-pagination',
            // dynamicBullets: true,
        },
        navigation: {
            nextEl: '.vk.swiper-button-next',
            prevEl: '.vk.swiper-button-prev',
        },
        effect: 'fade',
    });
};




// video-wrap
if ($('.video-wrap').length) {
    var videoswiper = new Swiper('.video.swiper-container', {
        navigation: {
            nextEl: '.video .swiper-button-next',
            prevEl: '.video .swiper-button-prev',
        },
    });

    $('.card-deck a').fancybox({
        caption: function (instance, item) {
            return $(this).parent().find('.card-text').html();
        }
    });
};


// inner-imgslider
if ( $('.inner-imgslider').length ) {
    var imgslider = new Swiper('.inner-imgslider', {
        navigation: {
            nextEl: '.inner-imgslider .swiper-button-next',
            prevEl: '.inner-imgslider .swiper-button-prev',
        },
        pagination: {
            el: '.inner-imgslider .swiper-pagination',
            clickable: true,
        },
        loop: false,
        spaceBetween: 30
        
    });
    

};


// banner-wrap
if ($('.banner-wrap').length) {
    var banner = new Swiper('.banner.swiper-container', {
        navigation: {
            nextEl: '.banner-swiper-button-next',
            prevEl: '.banner-swiper-button-prev',
        },
        slidesPerView: 5,
        spaceBetween: 20,
        pagination: {
            el: '.banner.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            375: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1,
                //spaceBetween: 40
                spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // 1024: {
            //     slidesPerView: 5,
            //     spaceBetween: 20
            // }

        }
    });

    $('.card-deck a').fancybox({
        caption: function (instance, item) {
            return $(this).parent().find('.card-text').html();
        }
    });
};


// newslider-wrap
if ($('.newslider-wrap').length) {
    var newslider = new Swiper('.newslider-wrap', {
        loop: true,
        navigation: {
            nextEl: '.news.swiper-button-next',
            prevEl: '.news.swiper-button-prev',
        },
        pagination: {
            el: '.news.swiper-pagination',
            clickable: true,
        },
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var paneTarget = $(e.target).attr('href');
        var $thePane = $('.tab-pane' + paneTarget);
        var paneIndex = $thePane.index();
        if ($thePane.find('.newslider-wrap').length > 0 && 0 === $thePane.find(
                '.swiper-slide-active').length) {
            newslider[paneIndex].update();
        }
    });

};

// scopes-wrap
if ($('.scopes').length) {
    var scopes = new Swiper('.scopes .swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.scopes.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.scopes.swiper-button-next',
            prevEl: '.scopes.swiper-button-prev',
        },
    });

};

//img-cover
if ( $('.img-cover').length ) {
    function addClass(el, className) {
        if (el.classList)
            el.classList.add(className);
        else if (!hasClass(el, className))
            el.className += ' ' + className;
    }
    var imgContainers, len;
    //if (!Modernizr.objectfit) {
    //    imgContainers = document.querySelectorAll('.img-cover');
    //    len = imgContainers.length;
    //    for (var i = 0; i < len; i++) {
    //        if (window.CP.shouldStopExecution(1)) {
    //            break;
    //        }
    //        var $container = imgContainers[i], imgUrl = $container.querySelector('img').getAttribute('src');
    //        if (imgUrl) {
    //            $container.style.backgroundImage = 'url(' + imgUrl + ')';
    //            addClass($container, 'compat-object-fit');
    //        }
    //    }
    //    window.CP.exitedLoop(1);
    //}
}


// sidebar list-group
if ($('#sidebar').length) {
    $("#sidebar .list-group").navgoco({accordion: true});
}

//twmap
if ($('.twmap-wrap').length) {

    if($(window).width() < 768) {
        $('.maplist-wrap .list-group>li').show().addClass('open');
        $('.maplist-wrap').find('.sub-nav').show();
        $('.maplist-wrap .alert-success').hide();
      } else {
        $(".maplist-wrap .list-group").navgoco({accordion: true});
        $('.maplist-wrap.list-group>li').hide();
        $(document).on("click", '.land.hasdata', function(e){
          var focusItem = $(this);
          var focusItemId = focusItem.attr('id');
          focusItem.addClass('active').siblings().removeClass('active');
          $('.maplist-wrap').find('#li-'+ focusItemId).show().addClass('open').siblings().hide();
          $('.maplist-wrap').find('#li-'+ focusItemId).find('.sub-nav').show();
          $('.maplist-wrap .alert-success').hide();
        });

        $('path, circle').hover(function(e) {
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
            $('#info-box').css('top', e.offsetY - $('#info-box').height()-30-170);
            $('#info-box').css('left', e.offsetX - ($('#info-box').width())/2);
            //offsetX, offsetY 滑鼠相對於事件源元素（srcElement）的X,Y坐標，只有IE事件有這2個屬性，標準事件沒有對應的屬性。
          }).mouseover();
    }
}
 //hp twmap
 if ($('.hptwmap .twmap-wrap').length) {
    if ($(window).width() < 768) {
        $('.hptwmap .alert-success').hide();
        $('.maplist-wrap .list-group>li').removeClass('open');
        $('.maplist-wrap').find('.sub-nav').hide();
        $('.maplist-wrap .list-group>li').eq(0).addClass('open');
        $('.maplist-wrap .list-group>li').eq(0).find('.sub-nav').show();

        $('.list-group>li').find('.fa-plus').on('click',function(){
            if( $(this).parent('li').hasClass('open') ){
                $(this).parent('li').removeClass('open');
                $(this).siblings('.sub-nav').slideUp();
            }else{
                 $(this).parent('li').addClass('open');
                 $(this).siblings('.sub-nav').slideDown();
            }

        })
    }
 }

//worldmap
if ($('.worldmap-wrap').length) {

    if ($(window).width() < 768) {
        $('.maplist-wrap .list-group>li').show().addClass('open');
        $('.maplist-wrap').find('.sub-nav').show();
        $('.maplist-wrap .alert-success').hide();

    } else {
        $(".maplist-wrap .list-group").navgoco({ accordion: true });
        $('.maplist-wrap .list-group>li').hide();
        $(document).on("click", '.land.hasdata', function (e) {
            var focusItem = $(this);
            var focusItemId = focusItem.attr('id');
            focusItem.addClass('active').siblings().removeClass('active');
            $('.maplist-wrap').find('#li-' + focusItemId).show().addClass('open').siblings().hide();
            $('.maplist-wrap').find('#li-' + focusItemId).find('.sub-nav').show();
            $('.maplist-wrap .alert-success').hide();
        });

        $('g').hover(function (e) {
            $('#info-box').css('display', 'block');
            $('#info-box').html($(this).data('info'));
            // $("#taipei-list").addClass("list-hover");
            $('.list-item').removeClass('open');
            $(".list-item-body").slideUp();
        });

        $("g").mouseleave(function (e) {
            $('#info-box').css('display', 'none');
            // $("#taipei-list").removeClass("list-hover");
        });

        $(document).mousemove(function (e) {
            $('#info-box').css('top', e.offsetY - $('#info-box').height());
            $('#info-box').css('left', e.offsetX - ($('#info-box').width()) / 2);
            //offsetX, offsetY 滑鼠相對於事件源元素（srcElement）的X,Y坐標，只有IE事件有這2個屬性，標準事件沒有對應的屬性。
        }).mouseover();
    }
}

//能力建構
if ($('.listitem').length) {
    $(document).ready(function () {
        $('.listitem h3').on('click', function () {
            if ($(this).parent('.listitem').hasClass('open')) {
                $(this).parent('.listitem').removeClass('open');
                $(this).siblings('.list-detail').slideUp();
            } else {
                $(this).parent('.listitem').addClass('open');
                $(this).siblings('.list-detail').slideDown();
            }
        });
    })
}

// history
if (0 < $('.history').length) {

    // min and max radius, radius threshold and percentage of filled circles
    var radMin = 5,
    radMax = 125,
    filledCircle = 60, //percentage of filled circles
    concentricCircle = 30, //percentage of concentric circles
    radThreshold = 25; //IFF special, over this radius concentric, otherwise filled

    //min and max speed to move
    var speedMin = 0.3,
    speedMax = 2.5;

    //max reachable opacity for every circle and blur effect
    var maxOpacity = 0.6;

    //default palette choice
    var colors = ['52,168,83', '117,95,147', '199,108,23', '194,62,55', '0,172,212', '120,120,120'],
    bgColors = ['52,168,83', '117,95,147', '199,108,23', '194,62,55', '0,172,212', '120,120,120'],
    circleBorder = 10,
    backgroundLine = bgColors[0];
    var backgroundMlt = 0.85;

    //min distance for links
    var linkDist = Math.min(canvas.width, canvas.height) / 2.4,
    lineBorder = 2.5;

    //most importantly: number of overall circles and arrays containing them
    var maxCircles = 12,
    points = [],
    pointsBack = [];

    //populating the screen
    for (var i = 0; i < maxCircles * 2; i++) points.push(new Circle());
    for (var i = 0; i < maxCircles; i++) pointsBack.push(new Circle(true));

    //experimental vars
    var circleExp = 1,
    circleExpMax = 1.003,
    circleExpMin = 0.997,
    circleExpSp = 0.00004,
    circlePulse = false;

    //circle class
    function Circle(background) {
    //if background, it has different rules
    this.background = (background || false);
    this.x = randRange(-canvas.width / 2, canvas.width / 2);
    this.y = randRange(-canvas.height / 2, canvas.height / 2);
    this.radius = background ? hyperRange(radMin, radMax) * backgroundMlt : hyperRange(radMin, radMax);
    this.filled = this.radius < radThreshold ? (randint(0, 100) > filledCircle ? false : 'full') : (randint(0, 100) > concentricCircle ? false : 'concentric');
    this.color = background ? bgColors[randint(0, bgColors.length - 1)] : colors[randint(0, colors.length - 1)];
    this.borderColor = background ? bgColors[randint(0, bgColors.length - 1)] : colors[randint(0, colors.length - 1)];
    this.opacity = 0.05;
    this.speed = (background ? randRange(speedMin, speedMax) / backgroundMlt : randRange(speedMin, speedMax)); // * (radMin / this.radius);
    this.speedAngle = Math.random() * 2 * Math.PI;
    this.speedx = Math.cos(this.speedAngle) * this.speed;
    this.speedy = Math.sin(this.speedAngle) * this.speed;
    var spacex = Math.abs((this.x - (this.speedx < 0 ? -1 : 1) * (canvas.width / 2 + this.radius)) / this.speedx),
    spacey = Math.abs((this.y - (this.speedy < 0 ? -1 : 1) * (canvas.height / 2 + this.radius)) / this.speedy);
    this.ttl = Math.min(spacex, spacey);
    };

    Circle.prototype.init = function() {
    Circle.call(this, this.background);
    }

    //support functions
    //generate random int a<=x<=b
    function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
    }
    //generate random float
    function randRange(a, b) {
    return Math.random() * (b - a) + a;
    }
    //generate random float more likely to be close to a
    function hyperRange(a, b) {
    return Math.random() * Math.random() * Math.random() * (b - a) + a;
    }

    //rendering function
    function drawCircle(ctx, circle) {
    //circle.radius *= circleExp;
    var radius = circle.background ? circle.radius *= circleExp : circle.radius /= circleExp;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, radius * circleExp, 0, 2 * Math.PI, false);
    ctx.lineWidth = Math.max(1, circleBorder * (radMin - circle.radius) / (radMin - radMax));
    ctx.strokeStyle = ['rgba(', circle.borderColor, ',', circle.opacity, ')'].join('');
    if (circle.filled == 'full') {
    ctx.fillStyle = ['rgba(', circle.borderColor, ',', circle.background ? circle.opacity * 0.8 : circle.opacity, ')'].join('');
    ctx.fill();
    ctx.lineWidth=0;
    ctx.strokeStyle = ['rgba(', circle.borderColor, ',', 0, ')'].join('');
    }
    ctx.stroke();
    if (circle.filled == 'concentric') {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, radius / 2, 0, 2 * Math.PI, false);
    ctx.lineWidth = Math.max(1, circleBorder * (radMin - circle.radius) / (radMin - radMax));
    ctx.strokeStyle = ['rgba(', circle.color, ',', circle.opacity, ')'].join('');
    ctx.stroke();
    }
    circle.x += circle.speedx;
    circle.y += circle.speedy;
    if (circle.opacity < (circle.background ? maxOpacity : 1)) circle.opacity += 0.01;
    circle.ttl--;
    }

    //initializing function
    function init() {
    window.requestAnimationFrame(draw);
    }

    //rendering function
    function draw() {

    if (circlePulse) {
    if (circleExp < circleExpMin || circleExp > circleExpMax) circleExpSp *= -1;
    circleExp += circleExpSp;
    }
    var ctxfr = document.getElementById('canvas').getContext('2d');
    var ctxbg = document.getElementById('canvasbg').getContext('2d');

    ctxfr.globalCompositeOperation = 'destination-over';
    ctxfr.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    ctxbg.globalCompositeOperation = 'destination-over';
    ctxbg.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    ctxfr.save();
    ctxfr.translate(canvas.width / 2, canvas.height / 2);
    ctxbg.save();
    ctxbg.translate(canvas.width / 2, canvas.height / 2);

    //function to render each single circle, its connections and to manage its out of boundaries replacement
    function renderPoints(ctx, arr) {
    for (var i = 0; i < arr.length; i++) {
        var circle = arr[i];
        //checking if out of boundaries
        if (circle.ttl<0) {}
        var xEscape = canvas.width / 2 + circle.radius,
        yEscape = canvas.height / 2 + circle.radius;
        if (circle.ttl < -20) arr[i].init(arr[i].background);
        //if (Math.abs(circle.y) > yEscape || Math.abs(circle.x) > xEscape) arr[i].init(arr[i].background);
        drawCircle(ctx, circle);
    }
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
        var deltax = arr[i].x - arr[j].x;
        var deltay = arr[i].y - arr[j].y;
        var dist = Math.pow(Math.pow(deltax, 2) + Math.pow(deltay, 2), 0.5);
        //if the circles are overlapping, no laser connecting them
        if (dist <= arr[i].radius + arr[j].radius) continue;
        //otherwise we connect them only if the dist is < linkDist
        if (dist < linkDist) {
            var xi = (arr[i].x < arr[j].x ? 1 : -1) * Math.abs(arr[i].radius * deltax / dist);
            var yi = (arr[i].y < arr[j].y ? 1 : -1) * Math.abs(arr[i].radius * deltay / dist);
            var xj = (arr[i].x < arr[j].x ? -1 : 1) * Math.abs(arr[j].radius * deltax / dist);
            var yj = (arr[i].y < arr[j].y ? -1 : 1) * Math.abs(arr[j].radius * deltay / dist);
            ctx.beginPath();
            ctx.moveTo(arr[i].x + xi, arr[i].y + yi);
            ctx.lineTo(arr[j].x + xj, arr[j].y + yj);
            var samecolor = arr[i].color == arr[j].color;
            ctx.strokeStyle = ["rgba(", arr[i].borderColor, ",", Math.min(arr[i].opacity, arr[j].opacity) * ((linkDist - dist) / linkDist), ")"].join("");
            ctx.lineWidth = (arr[i].background ? lineBorder * backgroundMlt : lineBorder) * ((linkDist - dist) / linkDist); //*((linkDist-dist)/linkDist);
            ctx.stroke();
        }
        }
    }
    }

    var startTime = Date.now();
    renderPoints(ctxfr, points);
    renderPoints(ctxbg, pointsBack);
    deltaT = Date.now() - startTime;

    ctxfr.restore();
    ctxbg.restore();

    window.requestAnimationFrame(draw);
    }

    init();

    /*Credits and aknowledgements:
    Original Idea and Design by Luca Luzzatti

    Optimizing tips from Benjamin Kästner
    General tips from Salvatore Previti*/
}

//bgball
// if ($('.bgball').length) {
//     const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

//     const numBalls = 50;
//     const balls = [];

//     for (let i = 0; i < numBalls; i++) {
//     let ball = document.createElement("div");
//     ball.classList.add("ball");
//     ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//     ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
//     ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
//     ball.style.transform = `scale(${Math.random()})`;
//     ball.style.width = `${Math.random()}em`;
//     ball.style.height = ball.style.width;

//     balls.push(ball);
//     //document.body.append(ball);
//     $('.bg-ball').append(ball);
//     }

//     // Keyframes
//     balls.forEach((el, i, ra) => {
//     let to = {
//         x: Math.random() * (i % 2 === 0 ? -11 : 11),
//         y: Math.random() * 12
//     };

//     let anim = el.animate(
//         [
//         { transform: "translate(0, 0)" },
//         { transform: `translate(${to.x}rem, ${to.y}rem)` }
//         ],
//         {
//         duration: (Math.random() + 1) * 2000, // random duration
//         direction: "alternate",
//         fill: "both",
//         iterations: Infinity,
//         easing: "ease-in-out"
//         }
//     );
//     });

// }





