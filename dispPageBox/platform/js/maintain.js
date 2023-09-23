function delete_confirm(){return confirm('刪除後無法回復，是否確定刪除?');};
function setting_confirm(){return confirm('確認批次更新下架日期?');};

$(document).ready( function(){
	var History = window.History;

    $("a.loading").unbind("click").live('click', function () {
		$('#loader').height($(document).height()).fadeIn(200);
//		var href = $(this).attr('href');
//		var title = $(this).text();
//		if ( 'http://'+document.domain+href != History.getState().url )
//		{
//			$('head').find('title').text(title);
//			History.pushState(null, title, href);
//		};
//		return false;
    });
	
	getAccordion();

//	History.Adapter.bind(window,'statechange',function(){ 
//		var state = History.getState();
//		var url = state.url;
//		getSideBar( url );
//	});
});

function getSideBar(url)
{
	$('#loader').height($(document).height()).fadeIn(200,function(){
		
		$('form').load(url + ' form', function (response, status, xhr) {
			if ( status == 'error') {
				window.location.href = url;
			}else{
				$(this).find('form').unwrap();
				$('form').hide().fadeIn(200,function(){$('#loader').fadeOut(800);});
				if ( $('form').text() == '' ) window.location.href = url;
				getAccordion();
				$.getScript("/dispPageBox/platform/js/postback.js");
			}
		});
		
	}).fadeOut(800);
}

function getAccordion()
{
	var userpanel = $("#accordion"); 
//	var accordingIndex = $.cookie("accordion");
//	var active;
//	if (accordingIndex != -1) active = userpanel.find("h4:eq(" + accordingIndex + ")");
	userpanel.accordion({
		header: "h4",
//		event: "click",
//		active: active,
//		change: function(event, ui) {
//			var index = $(this).find("h4").index ( ui.newHeader[0] );
//			$.cookie("accordion", index);
//		},
//		cookie: true,
		autoHeight: false,
		navigation: true
	});
}

function postBackByObject()
{
    var o = window.event.srcElement;
    if (o.tagName == "INPUT" && o.type == "checkbox")
    {
       __doPostBack("","");
    } 
}
function OpenWindow(TargetPage){
	var Options='directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no,';
	Options=Options + 'top=10,left=10,width=700,height=500' ;    
	window.open(TargetPage,'SetPub',Options);
}
function OpenWindow(TargetPage,W,H){
	var Options='directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no,';
	Options=Options + 'top=10,left=10,width='  + W + ',height='  + H ;
	window.open(TargetPage,'SetPub',Options);
}
function OpenEditSbjWindow(DBID){
	var TargetPage='AttFil.aspx?DC_RN_PRT=' + DBID + "&PvgIni=O&RefInfKndID=ATTFIL&Cat=";
	var Options='directories=no,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no,';
	Options=Options + 'top=10,left=10,width='  + (screen.availWidth-180) + ',height='  + (screen.availHeight-60) ;
	window.open(TargetPage,'MndList',Options);
}
