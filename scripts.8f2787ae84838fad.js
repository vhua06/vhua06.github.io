var $=jQuery.noConflict();jQuery(document).ready(function(i){scrollToTop.init()});var scrollToTop={init:function(){$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollToTop").fadeIn():$(".scrollToTop").fadeOut()}),$(window).scroll(function(){$(this).scrollTop()>100?$(".ToHome").fadeIn():$(".ToHome").fadeOut()}),$(".scrollToTop").click(function(){return $("html, body").animate({scrollTop:0},800),!1})}},classNames=[];navigator.userAgent.match(/(iPad|iPhone|iPod)/i)&&classNames.push("device-ios"),navigator.userAgent.match(/android/i)&&classNames.push("device-android");var html=document.getElementsByTagName("html")[0];if(classNames.length&&classNames.push("on-device"),$(".sidebar-offcanvas").height($("#sidebar").height()),$(document).ready(function(){$('[data-toggle="offcanvas"]').click(function(){$(".row-offcanvas").toggleClass("active")})}),$(window).scroll(function(){$(this).scrollTop()>40?$(".header").addClass("affix-top"):$(".header").removeClass("affix-top"),$(document).width()>900&&($(this).scrollTop()>135?$(".header").addClass("affix-top"):$(".header").removeClass("affix-top"))}),$("#StackedBar").length&&Highcharts.chart("StackedBar",{chart:{type:"bar",backgroundColor:null},credits:{enabled:!1},exporting:{enabled:!1},title:{text:"\u512a\u5148\u8abf\u9069\u884c\u52d5\u8a08\u756b\u8207\u884c\u52d5\u7db1\u9818\u653f\u7b56\u5167\u6db5\u95dc\u806f\u5716"},xAxis:{categories:["\u6559\u80b2\u3001\u7df4\u8207\u5ba3\u5c0e","\u8ca1\u52d9\u53ca\u91d1\u878d\u6a5f\u5236","\u98a8\u96aa\u8a55\u4f30\u3001\u79d1\u5b78\u7814\u7a76","\u6cd5\u898f\u63a8\u52d5\u6559\u80b2\u3001\u7df4\u8207\u5ba3\u5c0e"],labels:{style:{color:"#4d4d4d"}},lineWidth:1,lineColor:"#4d4d4d"},yAxis:{min:0,labels:{style:{color:"#4d4d4d"}},gridLineColor:"#4d4d4d"},legend:{reversed:!0},plotOptions:{series:{stacking:"normal"}},series:[{name:"\u5167\u653f\u90e8",data:[5,3,4,7]},{name:"\u52de\u52d5\u90e8",data:[5,3,4,7]},{name:"\u6d77\u6d0b\u59d4\u54e1\u6703",data:[5,3,4,7]},{name:"\u7d93\u6fdf\u90e8",data:[5,3,4,7]},{name:"\u885b\u751f\u798f\u5229\u90e8",data:[5,3,4,7]},{name:"\u539f\u4f4f\u6c11\u65cf\u59d4\u54e1\u6703",data:[5,3,4,7]},{name:"\u4ea4\u901a\u90e8",data:[5,3,4,7]},{name:"\u79d1\u6280\u90e8",data:[5,3,4,7]},{name:"\u516c\u5171\u5de5\u7a0b\u59d4\u54e1\u6703",data:[5,3,4,7]},{name:"\u6587\u5316\u90e8",data:[5,3,4,7]},{name:"\u91d1\u878d\u7ba1\u7406\u8207\u76e3\u7763\u59d4\u54e1\u6703",data:[5,3,4,7]},{name:"\u570b\u5bb6\u901a\u8a0a\u50b3\u64ad\u59d4\u54e1\u6703",data:[5,3,4,7]}]}),$("#pieChart").length&&$(function(){$("#pieChart").highcharts({credits:{enabled:!1},exporting:{enabled:!1},chart:{type:"pie",plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1,backgroundColor:null},exporting:{enabled:!1},title:{text:""},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{type:"pie",name:"\u6848\u4ef6\u6578\u91cf",innerSize:"50%",data:[{name:"\u6559\u80b2\u3001\u7df4\u8207\u5ba3\u5c0e",y:40,sliced:!0,selected:!0},{name:"\u8ca1\u52d9\u53ca\u91d1\u878d\u6a5f\u5236",y:30},{name:"\u98a8\u96aa\u8a55\u4f30\u3001\u79d1\u5b78\u7814\u7a76",y:20},{name:"\u6cd5\u898f\u63a8\u52d5",y:10}]}]})}),$("#polarChart").length&&$(function(){$("#polarChart").highcharts({credits:{enabled:!1},exporting:{enabled:!1},chart:{renderTo:"container",polar:!0,type:"area",backgroundColor:null},title:{text:""},pane:{size:"80%"},xAxis:{categories:["\u707d\u5bb3\u98a8\u96aa\u8a55\u4f30\u8207\u6cbb\u7406","\u7dad\u751f\u57fa\u790e\u8a2d\u65bd\u97cc\u6027","\u6c34\u8cc7\u6e90\u4f9b\u9700\u5e73\u8861\u8207\u6548\u80fd\u63d0\u5347","\u570b\u571f\u5b89\u5168\u6574\u5408\u7ba1\u7406","\u6c38\u7e8c\u6d77\u6d0b\u8cc7\u6e90\u53ca\u6d77\u5cb8\u9632\u8b77\u7ba1\u7406","\u80fd\u6e90\u4f9b\u7d66\u53ca\u7522\u696d\u8abf\u9069\u63a8\u52d5","\u8fb2\u696d\u751f\u7522\u53ca\u751f\u7269\u591a\u6a23\u6027\u7dad\u8b77","\u91ab\u7642\u8207\u5065\u5eb7\u98a8\u96aa\u7ba1\u7406"],tickmarkPlacement:"on",lineWidth:0,lineColor:"#4d4d4d"},yAxis:{gridLineInterpolation:"polygon",lineWidth:0,min:0,gridLineColor:"#4d4d4d"},tooltip:{shared:!0},series:[{name:"\u570b\u5bb6",data:[38,29,22,14,8,12,39,11],pointPlacement:"on"},{name:"\u5167\u653f\u90e8",data:[0,0,0,4,1,0,0,0],pointPlacement:"on"},{name:"\u6587\u5316\u90e8",data:[4,0,0,0,1,0,0,0],pointPlacement:"on"},{name:"\u4ea4\u901a\u90e8",data:[13,10,1,3,2,0,0,0],pointPlacement:"on"},{name:"\u884c\u653f\u9662\u516c\u5171\u5de5\u7a0b\u59d4\u54e1\u6703",data:[0,2,0,0,0,0,0,0],pointPlacement:"on"},{name:"\u91d1\u878d\u76e3\u7763\u7ba1\u7406\u59d4\u54e1\u6703",data:[0,0,0,0,0,2,0,0],pointPlacement:"on"},{name:"\u79d1\u6280\u90e8",data:[1,0,0,0,0,0,0,0],pointPlacement:"on"},{name:"\u539f\u4f4f\u6c11\u65cf\u59d4\u54e1\u6703",data:[0,0,0,0,0,0,0,0],pointPlacement:"on"},{name:"\u6d77\u6d0b\u59d4\u54e1\u6703",data:[1,0,0,0,3,0,1,0],pointPlacement:"on"},{name:"\u8ca1\u653f\u90e8",data:[0,0,0,4,1,0,0,0],pointPlacement:"on"},{name:"\u570b\u5bb6\u901a\u8a0a\u50b3\u64ad\u59d4\u54e1\u6703",data:[0,2,0,0,0,0,0,0],pointPlacement:"on"},{name:"\u570b\u5bb6\u767c\u5c55\u59d4\u54e1\u6703",data:[0,0,0,0,0,0,0,0],pointPlacement:"on"},{name:"\u6559\u80b2\u90e8",data:[0,0,0,0,0,0,0,0],pointPlacement:"on"},{name:"\u52de\u52d5\u90e8",data:[0,0,0,0,0,0,0,2],pointPlacement:"on"},{name:"\u7d93\u6fdf\u90e8",data:[8,14,16,0,3,9,1,0],pointPlacement:"on"},{name:"\u8fb2\u59d4\u6703",data:[7,1,3,4,1,1,37,0],pointPlacement:"on"},{name:"\u885b\u751f\u798f\u5229\u90e8",data:[4,0,0,0,0,0,0,4],pointPlacement:"on"},{name:"\u74b0\u4fdd\u7f72",data:[0,0,2,0,0,0,0,1],pointPlacement:"on"}]})}),$(".vkslider").length)var vkslider=new Swiper(".vkslider-wrap",{pagination:{el:".vk.swiper-pagination"},navigation:{nextEl:".vk.swiper-button-next",prevEl:".vk.swiper-button-prev"},effect:"fade"});if($(".video-wrap").length){var videoswiper=new Swiper(".video.swiper-container",{navigation:{nextEl:".video .swiper-button-next",prevEl:".video .swiper-button-prev"}});$(".card-deck a").fancybox({caption:function(i,s){return $(this).parent().find(".card-text").html()}})}if($(".inner-imgslider").length)var imgslider=new Swiper(".inner-imgslider",{navigation:{nextEl:".inner-imgslider .swiper-button-next",prevEl:".inner-imgslider .swiper-button-prev"},pagination:{el:".inner-imgslider .swiper-pagination",clickable:!0},loop:!1,spaceBetween:30});if($(".banner-wrap").length){var banner=new Swiper(".banner.swiper-container",{navigation:{nextEl:".banner-swiper-button-next",prevEl:".banner-swiper-button-prev"},slidesPerView:5,spaceBetween:20,pagination:{el:".banner.swiper-pagination",clickable:!0},breakpoints:{375:{slidesPerView:1,spaceBetween:30},480:{slidesPerView:1,spaceBetween:20},640:{slidesPerView:3,spaceBetween:30}}});$(".card-deck a").fancybox({caption:function(i,s){return $(this).parent().find(".card-text").html()}})}if($(".newslider-wrap").length){var newslider=new Swiper(".newslider-wrap",{loop:!0,navigation:{nextEl:".news.swiper-button-next",prevEl:".news.swiper-button-prev"},pagination:{el:".news.swiper-pagination",clickable:!0}});$('a[data-toggle="tab"]').on("shown.bs.tab",function(i){var s=$(i.target).attr("href"),o=$(".tab-pane"+s),y=o.index();o.find(".newslider-wrap").length>0&&0===o.find(".swiper-slide-active").length&&newslider[y].update()})}if($(".scopes").length)var scopes=new Swiper(".scopes .swiper-container",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".scopes.swiper-pagination",clickable:!0},navigation:{nextEl:".scopes.swiper-button-next",prevEl:".scopes.swiper-button-prev"}});if($(".img-cover").length)var imgContainers,len,addClass=function(s,o){s.classList?s.classList.add(o):hasClass(s,o)||(s.className+=" "+o)};function myHistory(){if(0<$(".history").length){let v=function(t){this.background=t||!1,this.x=w(-canvas.width/2,canvas.width/2),this.y=w(-canvas.height/2,canvas.height/2),this.radius=t?x(i,s)*C:x(i,s),this.filled=this.radius<q?!(d(0,100)>o)&&"full":!(d(0,100)>y)&&"concentric",this.color=t?m[d(0,m.length-1)]:b[d(0,b.length-1)],this.borderColor=t?m[d(0,m.length-1)]:b[d(0,b.length-1)],this.opacity=.05,this.speed=t?w(S,I)/C:w(S,I),this.speedAngle=2*Math.random()*Math.PI,this.speedx=Math.cos(this.speedAngle)*this.speed,this.speedy=Math.sin(this.speedAngle)*this.speed;var e=Math.abs((this.x-(this.speedx<0?-1:1)*(canvas.width/2+this.radius))/this.speedx),p=Math.abs((this.y-(this.speedy<0?-1:1)*(canvas.height/2+this.radius))/this.speedy);this.ttl=Math.min(e,p)},d=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},w=function(t,e){return Math.random()*(e-t)+t},x=function(t,e){return Math.random()*Math.random()*Math.random()*(e-t)+t},O=function(t,e){var p=e.background?e.radius*=f:e.radius/=f;t.beginPath(),t.arc(e.x,e.y,p*f,0,2*Math.PI,!1),t.lineWidth=Math.max(1,M*(i-e.radius)/(i-s)),t.strokeStyle=["rgba(",e.borderColor,",",e.opacity,")"].join(""),"full"==e.filled&&(t.fillStyle=["rgba(",e.borderColor,",",e.background?.8*e.opacity:e.opacity,")"].join(""),t.fill(),t.lineWidth=0,t.strokeStyle=["rgba(",e.borderColor,",",0,")"].join("")),t.stroke(),"concentric"==e.filled&&(t.beginPath(),t.arc(e.x,e.y,p/2,0,2*Math.PI,!1),t.lineWidth=Math.max(1,M*(i-e.radius)/(i-s)),t.strokeStyle=["rgba(",e.color,",",e.opacity,")"].join(""),t.stroke()),e.x+=e.speedx,e.y+=e.speedy,e.opacity<(e.background?H:1)&&(e.opacity+=.01),e.ttl--},V=function(){window.requestAnimationFrame(P)},P=function(){F&&((f<z||f>U)&&(B*=-1),f+=B);var t=this.canvas.getContext("2d"),e=this.canvasbg.getContext("2d");function p(h,a){for(var n=0;n<a.length;n++){var g=a[n];g.ttl<-20&&a[n].init(a[n].background),O(h,g)}for(n=0;n<a.length-1;n++)for(var l=n+1;l<a.length;l++){var k=a[n].x-a[l].x,T=a[n].y-a[l].y,r=Math.pow(Math.pow(k,2)+Math.pow(T,2),.5);if(!(r<=a[n].radius+a[l].radius)&&r<c){var R=(a[n].x<a[l].x?1:-1)*Math.abs(a[n].radius*k/r),X=(a[n].y<a[l].y?1:-1)*Math.abs(a[n].radius*T/r),Y=(a[n].x<a[l].x?-1:1)*Math.abs(a[l].radius*k/r),N=(a[n].y<a[l].y?-1:1)*Math.abs(a[l].radius*T/r);h.beginPath(),h.moveTo(a[n].x+R,a[n].y+X),h.lineTo(a[l].x+Y,a[l].y+N),h.strokeStyle=["rgba(",a[n].borderColor,",",Math.min(a[n].opacity,a[l].opacity)*((c-r)/c),")"].join(""),h.lineWidth=(a[n].background?A*C:A)*((c-r)/c),h.stroke()}}}t.globalCompositeOperation="destination-over",t.clearRect(0,0,this.canvas.width,this.canvas.height),e.globalCompositeOperation="destination-over",e.clearRect(0,0,this.canvas.width,this.canvas.height),t.save(),t.translate(this.canvas.width/2,this.canvas.height/2),e.save(),e.translate(this.canvas.width/2,this.canvas.height/2);var Q=Date.now();p(t,L),p(e,W),deltaT=Date.now()-Q,t.restore(),e.restore(),window.requestAnimationFrame(P)};for(var i=5,s=125,o=60,y=30,q=25,S=.3,I=2.5,H=.6,b=["52,168,83","117,95,147","199,108,23","194,62,55","0,172,212","120,120,120"],m=["52,168,83","117,95,147","199,108,23","194,62,55","0,172,212","120,120,120"],M=10,C=.85,c=Math.min(this.canvas.width,this.canvas.height)/2.4,A=2.5,L=[],W=[],u=0;u<24;u++)L.push(new v);for(u=0;u<12;u++)W.push(new v(!0));var f=1,U=1.003,z=.997,B=4e-5,F=!1;v.prototype.init=function(){v.call(this,this.background)},V()}}$("#sidebar").length&&$("#sidebar .list-group").navgoco({accordion:!0}),$(".twmap-wrap").length&&($(window).width()<768?($(".maplist-wrap .list-group>li").show().addClass("open"),$(".maplist-wrap").find(".sub-nav").show(),$(".maplist-wrap .alert-success").hide()):($(".maplist-wrap .list-group").navgoco({accordion:!0}),$(".maplist-wrap.list-group>li").hide(),$(document).on("click",".land.hasdata",function(i){var s=$(this),o=s.attr("id");s.addClass("active").siblings().removeClass("active"),$(".maplist-wrap").find("#li-"+o).show().addClass("open").siblings().hide(),$(".maplist-wrap").find("#li-"+o).find(".sub-nav").show(),$(".maplist-wrap .alert-success").hide()}),$("path, circle").hover(function(i){$("#info-box").css("display","block"),$("#info-box").html($(this).data("info")),$("#taipei-list").addClass("list-hover"),$(".list-item").removeClass("open"),$(".list-item-body").slideUp()}),$("path, circle").mouseleave(function(i){$("#info-box").css("display","none"),$("#taipei-list").removeClass("list-hover")}),$(document).mousemove(function(i){$("#info-box").css("top",i.offsetY-$("#info-box").height()-30-170),$("#info-box").css("left",i.offsetX-$("#info-box").width()/2)}).mouseover())),$(".hptwmap .twmap-wrap").length&&$(window).width()<768&&($(".hptwmap .alert-success").hide(),$(".maplist-wrap .list-group>li").removeClass("open"),$(".maplist-wrap").find(".sub-nav").hide(),$(".maplist-wrap .list-group>li").eq(0).addClass("open"),$(".maplist-wrap .list-group>li").eq(0).find(".sub-nav").show(),$(".list-group>li").find(".fa-plus").on("click",function(){$(this).parent("li").hasClass("open")?($(this).parent("li").removeClass("open"),$(this).siblings(".sub-nav").slideUp()):($(this).parent("li").addClass("open"),$(this).siblings(".sub-nav").slideDown())})),$(".worldmap-wrap").length&&($(window).width()<768?($(".maplist-wrap .list-group>li").show().addClass("open"),$(".maplist-wrap").find(".sub-nav").show(),$(".maplist-wrap .alert-success").hide()):($(".maplist-wrap .list-group").navgoco({accordion:!0}),$(".maplist-wrap .list-group>li").hide(),$(document).on("click",".land.hasdata",function(i){var s=$(this),o=s.attr("id");s.addClass("active").siblings().removeClass("active"),$(".maplist-wrap").find("#li-"+o).show().addClass("open").siblings().hide(),$(".maplist-wrap").find("#li-"+o).find(".sub-nav").show(),$(".maplist-wrap .alert-success").hide()}),$("g").hover(function(i){$("#info-box").css("display","block"),$("#info-box").html($(this).data("info")),$(".list-item").removeClass("open"),$(".list-item-body").slideUp()}),$("g").mouseleave(function(i){$("#info-box").css("display","none")}),$(document).mousemove(function(i){$("#info-box").css("top",i.offsetY-$("#info-box").height()),$("#info-box").css("left",i.offsetX-$("#info-box").width()/2)}).mouseover())),$(".listitem").length&&$(document).ready(function(){$(".listitem h3, .listitem p").on("click",function(){$(this).parent(".listitem").hasClass("open")?($(this).parent(".listitem").removeClass("open"),$(this).siblings(".list-detail").slideUp()):($(this).parent(".listitem").addClass("open"),$(this).siblings(".list-detail").slideDown())})});