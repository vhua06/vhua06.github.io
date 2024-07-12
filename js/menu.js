// JavaScript Document

/* Menu */
$(function(){
	var $menuMain = $('.menuPad'),
		$menuMainCtrl = $('#pd'),
		$menuSubChild = $('.menuSub div ul'),
		$menuSec = $('.menuBar_B ul'),
		$menuThre = $('.menuBar_C ul'),
		$menuThreLi = $('.menuBar_C ul li'),
		_menuSubH = $menuSubChild.height(),
		_animateSpeed = 200;
	
	$menuSubChild.css({
		top: _menuSubH * -1
	});
	$menuMainCtrl.mouseover(function(){
		$menuSec.stop().animate({
			top: 0
		}, _animateSpeed);
	});
	$('.menuBar_B ul li').mouseover(function(){
		var $this = $(this),
			_no = $this.index();
		$menuThre.eq(_no).stop().animate({
			top: _menuSubH
		},_animateSpeed).siblings().stop().animate({
			top: _menuSubH * -1 
		},_animateSpeed);
		$this.css({backgroundColor:'#999'}).siblings().css({backgroundColor:''});
	});
	$menuThreLi.mouseover(function(){
		var $this = $(this);
		$this.css({backgroundColor:'#000'}).siblings().css({backgroundColor:''});
	});
	
	$menuMain.mouseleave(function(){
		$menuSubChild.stop().animate({
			top: _menuSubH * -1
		}, _animateSpeed);
		$menuThreLi.css({background:''});
		$('.menuBar_B ul li').css({background:''});
	});

});