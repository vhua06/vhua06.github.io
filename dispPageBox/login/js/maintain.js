function delete_confirm(){return confirm('刪除後無法回復，是否確定刪除?');};
function setting_confirm(){return confirm('確認批次更新下架日期?');};

$(document).ready(function(){
	$( "#accordion" ).accordion({
		autoHeight: false,
		navigation: true
	});
});

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
