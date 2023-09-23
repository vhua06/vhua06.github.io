(function($) {
	$.uddcm = {
		init:function(){
			$('.search .form-inline .btn-default').on('click',function(){
				$('.species').slideToggle();
			});
			$('input.metafilter:checkbox').change(function(){
				$.uddcm.meta();
			});
			$('.dc-function .btn-back').on('click',function(){
				var url=document.referrer;
				var p=url.toLowerCase().indexOf("dispuddcm");
				if ( 0 < p )
				{
					window.history.back();
					return false;
				};
			});
			$("#browser").treeview();
		},
		meta:function(){
			var show = $('input.metafilter:checkbox:checked').map(function(){
							   return $(this).val();
					   });
			if (show.length > 0){
				$('.meta label').hide();
				$('.meta label').each(
					function(){
						var arr = $(this).attr('class').split(' ');
						for (i=0;i<arr.length;i++)
						{
							if ($.inArray(arr[i],show) > -1) {
								$(this).fadeIn();
								break;
							}
						};
					});
			}
			else {
				$('.meta label').show();
				$('.meta').show();
			}
		},
		sidebar:function(i){
			$('.sidebar li').removeClass('active').eq(i).addClass('active');
		}
	};
	
	$(function () {
		$.uddcm.init();
		$.uddcm.meta();
	});
})(jQuery);
