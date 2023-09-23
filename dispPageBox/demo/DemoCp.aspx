<%@ Page Language="c#" Src="~/dispCore/dispPage/PageSet.aspx.cs" Inherits="PageSet"%>
<%%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- saved from url=(0014)about:internet -->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<!--***********輸出共用表頭*****************************************************************-->

<!-- General metadata -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- SEO metadata -->
<meta name="description" content="信諾科技U WEB 網站建置服務DEMO專用">
<meta name="keywords" content="網站,SEO,UTRUST,信諾科技,DISP,UWEB,模組化,快速,便利,動態,省錢">
<meta name ="Distribution" content ="Global">
<meta http-equiv ="imagetoolbar" content ="no">
<meta name ="Revisit-After" content ="3 Days">
<meta name ="Rating" content ="General">
<meta name ="last-modified" CONTENT=" 2010 08 14 ">
<meta name ="Robots" content ="All,follow">
<meta name ="Classification" content ="Media">
<meta name ="area" content ="public Services">
<meta name E="placename" content ="Taipei,Taiwan">
<meta name ="owner" content ="信諾科技 UTRUST">
<meta name ="resource-type" content ="Document">
<meta name ="Author" content ="信諾科技">
<meta http-equiv ="audience" content ="General">
<meta http-equiv ="EXPIRES" content ="">
<meta name ="copyright" content ="本網頁著作權屬信諾科技所有">
<meta name="Robots" content="all,follow">
<meta name="googlebot" content="all" />


<!-- Title and metadata -->
<title><%=TitleName%> | DISP Web Demo</title>

<!-- CSS and WebID -->
<link rel="stylesheet" href="<%=ResolveUrl("~/dispPageBox/demo/css/default.css") %>" type="text/css" media="screen" title="DEMO樣式" />


<!--Google Analytics Script碼(start) 要放在</head>之前-->
<%=strGoogleAtsCode%>
<!--Google Analytics Script碼(End)-->
<script language="JavaScript"> 
function resize(){ 
   //動態改變div高度
   //var ScreenHeight=screen.availHeight;  //視窗高度
   //var OtherHeight=540;                  //除內文外的高度(隨版面自行計算，Head或Head + Foot的高度)
	 //var ContentHigh=ScreenHeight - OtherHeight;  //內文高度
  // document.getElementById("mainContent").style.height = ContentHigh + "px"; 　  　　 
} 　 
</script>
</head>

<body onload="resize();">
<form runat="server">
<div id="Wrapper">

<!--*** Header Start ***-->
<div id="Header_ct">
    <!-- Logo-->
    <H1><a href="<%=ResolveUrl("~/dispPageBox/trans.aspx") %>?ddsPageID=DEMOHP"><img src="<%=ResolveUrl("~/dispPageBox/demo/images/logo.jpg") %>" alt="DISP Web Demo - Home" /><em>DISP Web Demo</em></a></H1>

    <!-- 上方輔助導覽列 -->
    <asp:PlaceHolder ID="NAV_TOP_BAR" runat="server"/>
    
    <!-- 內嵌輔助功能 1 - 關鍵字搜尋 -->
    <asp:PlaceHolder ID="AST_1" runat="server"/>
    
</div>
<!--*** Header End ***-->


<!--*** Main Nav Start ***-->
    <!-- 主導覽列 -->
    <asp:PlaceHolder ID="NAV_MAIN" runat="server"/>
<!--*** Main Nav End ***-->


     
<!--*** Main Content Start ***-->
<div id="mainContent">

<!--*** 左方區塊 start ***-->
<div id="DivLeft">

    <!-- 選單 start -->
    <div id="SubMenu">
        <div class="MenuDiv">
        <H2><A href="#"><asp:PlaceHolder ID="AST_5" runat="server"/><em>主標題</em></A></H2>
        <!-- 子導覽 Bar -->
        <ul>	  
        <asp:PlaceHolder ID="NAV_SUB" runat="server"/>
        </ul>
        </div>
    </div>
    <!-- 選單 end  -->
    
    <!-- 內嵌輔助功能 3 - 左方區塊 -->
    <asp:PlaceHolder ID="AST_3" runat="server"/>
</div>
<!--*** 左方區塊 end ***-->


<!--*** 右方區塊 start ***-->
<div id="DivRight">
    <!-- 內嵌輔助功能 4 - 右方區塊 -->
    <asp:PlaceHolder ID="AST_4" runat="server"/>
</div>
<!--*** 右方區塊 end ***-->


<!--*** 中間內容 start ***-->
<div id="DivContent">

<!-- 此節點標題 -->
<h3><%=TitleName%></h3>

<!-- 麵包屑導覽列 -->
<asp:PlaceHolder ID="AST_2" runat="server"/>

<!-- 大類 Start --> 
<asp:PlaceHolder ID="AST_6" runat="server"/>
<!-- 大類 End --> 


<div id="Content">

<asp:PlaceHolder ID="CNT_MAIN" runat="server"/>
</div>
</div>
<!--*** 中間內容 end ***-->


<br clear="all" />
</div>
<!--*** Main Content End ***-->


<!--*** Footer start ***-->
<div id="Footer">
<div class="footDiv">
<div class="footLogo"><A href="#"><img src="<%=ResolveUrl("~/dispPageBox/demo/images/logo_footer.gif") %>" alt="DISP Web Demo" /><em>DISP Web Demo</em></A></div>
<div class="footInfo">U WEB 版權所有 © 2010 UTURST All Rights Reserved.<br>TEL : 02-2781-3033  /  FAX : 02-2781-6404</div>
<div class="footLink">
<ul>
	<!-- 內嵌輔助功能 10 - 下方區塊常用連結 -->
    <asp:PlaceHolder ID="AST_10" runat="server"/>
</ul>
</div>
</div>
</div>
<!--*** Footer end ***-->


</div>
</form>
</body>
</html>
