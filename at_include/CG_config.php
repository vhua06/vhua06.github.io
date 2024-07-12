<?php
session_start();
$_SERVER['HTTP_HOST'];
$_SERVER['REQUEST_URI'];
$URL='http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

$webTitle='空氣品質模式支援中心';
$MetaDescription='空氣品質模式支援中心';
$MetaAuthor='環境部';
$MetaCopyright='中華民國環境部版權所有 Copyright © 2020 All Rights Reserved.';
$MetaKeyword='空氣品質模式支援中心';
$Meta_ogImg_0 = "";
$FB_ID = "";
$u_news = "newslist.html";
$verData = "?20200518";
$MetaKeyword01='最新消息：模擬技術, 審查, 教育訓練, 研習會, 環境影響評估, 技術規範';
$MetaKeyword02='關於模式中心：空氣污染防制法, 容許增量現值, 模式模擬審查, 相關法規之修訂, 空氣污染重大議題, 評估與分析';
$MetaKeyword03='模式介紹｜高斯類擴散模式：風速風向, 污染物種, 惰性物種, 點源, 線源, 面源, 體源, 煙囪設計, 燃燒性排放源, 監測網, 燃料更換, 輔助控制系統, 穩定, 均一';
$MetaKeyword04='模式介紹｜軌跡類模式：非化學反應, 逆軌跡模式, 風場, 軌跡線, 逆軌跡, 前軌跡, back trajectory';
$MetaKeyword05='模式介紹｜網格類模式：統御方程式, 座標系統, 有限差分法, 有限元素法, 量化評估, 涵容能力, 預警系統, 排放推估, 尤拉, Eulerian, governing equation';
$MetaKeyword06='模式介紹｜MM5：四維資料融入, 追隨地勢坐標, 交錯網格方式, Arakawa B, Fifth-Generation Penn State, NCAR Mesoscale Model, Mesosclae Model System version V, FDDA, Four Dimensional Data Assimilations';
$MetaKeyword07='模式介紹｜WRF：網隔間距, Weather Research and Forecasting Model, ARW, Advanced Research WRF, NMM, Non-hydrostatic Mesoscale Model, NCAR, MMM, Mesoscale and Microscale Meteorology Division, NOAA, National Oceanic and Atmospheric Administration';
$MetaKeyword08='法規相關｜法規及相關公告：天氣研究, 預報模式, 排放量規模, 上傳資料, 固定污染源, 模擬規範, 背景值, 防制法, 容許增量限值';
$MetaKeyword09='法規相關｜空氣品質模式模擬規範相關文件：高斯類擴散模式, 申請資料表, 查驗清單, 上傳指引, 格式規範, 性能評估, 檢核表, 格式規範, 背景濃度資料, 背景排放源, TEDS, 案例月, 案例季, 模擬期程, 天氣型態';
$MetaKeyword10='法規相關｜環境影響評估：技術規範, 相關文件, 技術規範，各項空氣品質模式使用指南, 空氣品質模式輸入資料, 空氣品質模式資料前處理, 空氣品質模擬結果後處理, 空氣品質模擬分析查驗清單';
$MetaKeyword11='公告模式｜ISCST3：空氣品質模式, 模擬規範公告, 地形, 氣象, 檔案, 程式, 使用規範, 申請資料表, 查驗清單, 操作手冊, 技術手冊, 輸入範例, 上傳, 指引, 格式規範';
$MetaKeyword12='公告模式｜AERMOD：空氣品質模式, 模擬規範公告, 氣象, 執行檔, 地形, 使用手冊, 使用規範, 查驗清單, 範例, 上架說明, 技術文件';
$MetaKeyword13='公告模式｜CMAQ：空氣品質模式, 模擬規範公告, 使用方式, 指引, 技術文件, 查驗清單, 使用規範, 後製工具, 國網, 簡報, 下載, 指引';
$MetaKeyword14='模式資料查詢：國家高速網路與計算中心, 國網, 模擬規範, 固定污染源, 帳號, 註冊, 指令, scp, rsync, 第三方軟體, 下載, 路徑, 案號, 許可, 申請方法, 模式分類, 公告模式';
$MetaKeyword15='歷年成果｜專案計畫報告：執行期限, 委辦單位, 基本資訊, 環境部';
$MetaKeyword16='歷年成果｜重要專題分析：複雜山區地形, 效能精進, 氣象模擬, 臭氧, 八小時濃度, 分布特徵, 案例月, 案例季, 綜合評估, 環評案, 審查分析, 風場, 中尺度, O3, PM10, PM2.5';
$MetaKeyword17='相關會議：教育訓練, 審查研習會, 諮商會議, 座談會, 推廣教育, 中國文化大學, 國際會議廳, 蓮潭國際會館, 圓形演講廳';
$MetaKeyword18='相關連結：環境部, 中央氣象局, 環境資料, 開放平臺, 監測網, 即時指標, 美國環境部, US EPA Office of Air and Radiation, US EPA Office of Air Quality Planning and Standards, US EPA Technology Transfer Network, Support Center for Regulatory Atmospheric';

//------------------------------php防注入和XSS攻擊通用過濾-----Start--------------------------------------------//
function string_remove_xss($html) {
    preg_match_all("/\<([^\<]+)\>/is", $html, $ms); 
    $searchs[] = '<';
    $replaces[] = '&lt;';
    $searchs[] = '>';
    $replaces[] = '&gt;'; 
    if ($ms[1]) {
        $allowtags = 'svg|img|a|font|div|table|tbody|caption|tr|td|th|br|p|b|strong|i|u|em|span|ol|ul|li|blockquote';
        $ms[1] = array_unique($ms[1]);
        foreach ($ms[1] as $value) {
            $searchs[] = "&lt;".$value."&gt;"; 
            $value = str_replace('&amp;', '_uch_tmp_str_', $value);
            $value = string_htmlspecialchars($value);
            $value = str_replace('_uch_tmp_str_', '&amp;', $value); 
            $value = str_replace(array('\\', '/*'), array('.', '/.'), $value);
            $skipkeys = array('onabort','onactivate','onafterprint','onafterupdate','onbeforeactivate','onbeforecopy','onbeforecut','onbeforedeactivate',
                    'onbeforeeditfocus','onbeforepaste','onbeforeprint','onbeforeunload','onbeforeupdate','onblur','onbounce','oncellchange','onchange',
                    'onclick','oncontextmenu','oncontrolselect','oncopy','oncut','ondataavailable','ondatasetchanged','ondatasetcomplete','ondblclick',
                    'ondeactivate','ondrag','ondragend','ondragenter','ondragleave','ondragover','ondragstart','ondrop','onerror','onerrorupdate',
                    'onfilterchange','onfinish','onfocus','onfocusin','onfocusout','onhelp','onkeydown','onkeypress','onkeyup','onlayoutcomplete',
                    'onload','onlosecapture','onmousedown','onmouseenter','onmouseleave','onmousemove','onmouseout','onmouseover','onmouseup','onmousewheel',
                    'onmove','onmoveend','onmovestart','onpaste','onpropertychange','onreadystatechange','onreset','onresize','onresizeend','onresizestart',
                    'onrowenter','onrowexit','onrowsdelete','onrowsinserted','onscroll','onselect','onselectionchange','onselectstart','onstart','onstop',
                    'onsubmit','onunload','javascript','script','eval','behaviour','expression','style','class');
            $skipstr = implode('|', $skipkeys);
            $value = preg_replace(array("/($skipstr)/i"), '.', $value);
            if (!preg_match("/^[\/|\s]?($allowtags)(\s+|$)/is", $value)) {
                $value = '';
            }
            $replaces[] = empty($value) ? '' : "<" . str_replace('&quot;', '"', $value) . ">";
        }
    }
    $html = str_replace($searchs, $replaces, $html); 
    return $html;
}
// php防注入和XSS攻擊通用過濾 
function string_htmlspecialchars($string, $flags = null) {
    if (is_array($string)) {
        foreach ($string as $key => $val) {
            $string[$key] = string_htmlspecialchars($val, $flags);
        }
    } else {
        if ($flags === null) {
            # $string = str_replace(array('&', '"', '<', '>'), array('&amp;', '&quot;', '&lt;', '&gt;'), $string);
            $string = str_replace(array('&', '"', '<', '>', '#', '(', ')', '\''), array('&amp;', '&quot;', '&lt;', '&gt;', '&#35;', '&#40;', '&#41;', '&#39;'), $string);
            if (strpos($string, '&amp;#') !== false) {
                $string = preg_replace('/&amp;((#(\d{3,5}|x[a-fA-F0-9]{4}));)/', '&\\1', $string);
            }
        } else {
            if (PHP_VERSION < '5.4.0') {
                $string = htmlspecialchars($string, $flags);
            } else {
                if (!defined('CHARSET') || (strtolower('CHARSET') == 'utf-8')) {
                    $charset = 'UTF-8';
                } else {
                    $charset = 'ISO-8859-1';
                }
                $string = htmlspecialchars($string, $flags, $charset);
            }
        }
    }
    return $string;
}
// PHP 5.4.0版本沒有內置的str_ends_with()函數，因為這個函數是在PHP 8.0版本中引入的。
function str_ends_with540($haystack, $needle) {
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }
    return (substr($haystack, -$length) === $needle);
}

header("X-Content-Type-Options: nosniff");
header("X-XSS-Protection: 1; mode=block");

// Disabled Cache
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // 一個舊的日期
header("X-Frame-Options: SAMEORIGIN");

# header("Content-Security-Policy: default-src 'self'; script-src 'self' https://aqmc.moenv.gov.tw https://www.googletagmanager.com/gtag/js?id=G-24G07EQMD4 https://accessibility.moda.gov.tw/Applications/Detail?category=20231109134715");
# $queryString = htmlspecialchars($_SERVER['QUERY_STRING'], ENT_QUOTES, 'UTF-8');
$queryString = string_remove_xss($_SERVER['QUERY_STRING'], ENT_QUOTES, 'UTF-8');
# echo $queryString;
$queryURL = string_remove_xss($_SERVER['REQUEST_URI'], ENT_QUOTES, 'UTF-8');
# echo $queryURL;
$method = $_SERVER['REQUEST_METHOD'];
$endWith = '.html/';
$char = $endWith.'?';
$char2 = $endWith.'%3F';
$char3 = $endWith.'%F6';
# $blacklist = '/binary|hex|~|`|!|@|#|\$|%|\^|&|\*|\(|\)|\+|=|\||\\|\/|\{|\}|\[|\]|<|>|\?|;|:|\'|"|insert|select|update|drop/i';
# 更正以排除符合站內搜尋的字元
$blacklist = '/binary|hex|~|`|!|@|\$|\^|\*|\(|\)|\+|\||\\|\{|\}|\[|\]|<|>|;|\'|"|script|prompt|alert|confirm|insert|select|update|drop/i';
# $queryString = "hl=zh-TW&q=AERMOD,%20%20site:aqmc.moenv.gov.tw";
switch ($method) {
  case 'PUT':
  case 'POST':
  case 'GET':
    
	# echo 'QUERY_STRING:'.$queryString;
    #if (strpos($queryString , "%F6") OR strpos($queryString , "%3C") OR strpos($queryString , "<") OR strpos($queryString , "%3E") OR strpos($queryString , ">") OR strpos($queryString , "script") OR strpos($queryString , "prompt") OR strpos($queryString , "alert")) {
    if (strpos($queryString , "(") OR strpos($queryString , ")") OR strpos($queryString , ">") OR strpos($queryString , "%3C") OR strpos($queryString , "<") OR strpos($queryString , "%3E") OR strpos(strtolower($queryString) , "javascript") OR strpos(strtolower($queryString) , "script") OR preg_match($blacklist, $queryString)) {
        echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">';
		echo '<span id="errorText">網站發生錯誤，請洽系統管理人員。</span></h1>';   
        echo '<script>setTimeout(function(){ document.location.href="http://aqmc.moenv.gov.tw/"; }, 1800);</script>';
        exit();
	}
	# echo 'REQUEST_URI:'.$queryURL;
	# if (strpos($queryURL , "%F6") OR strpos($queryURL , "%3C") OR strpos($queryURL , "<") OR strpos($queryURL , "%3E") OR strpos($queryURL , ">") OR strpos($queryURL , "script") OR strpos($queryURL , "prompt") OR strpos($queryURL , "alert")) {
    if (strpos($queryURL , "(") OR strpos($queryURL , ")") OR strpos($queryURL , ">") OR strpos($queryURL , "%3C") OR strpos($queryURL , "<") OR strpos($queryURL , "%3E") OR strpos(strtolower($queryURL) , "javascript") OR strpos(strtolower($queryURL)  , "script") OR strpos($queryURL , $char) OR strpos($queryURL , $char2) OR strpos($queryURL , $char3) OR strpos($queryURL, $endWith) OR preg_match($blacklist, $queryURL)) {
        echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">';
		echo '<span id="errorText">網站發生錯誤，請洽系統管理人員。</span></h1>';
		echo '<script>setTimeout(function(){ document.location.href="http://aqmc.moenv.gov.tw/"; }, 1800);</script>';
        exit();
	}
    break;
  default:
    break;
}
//------------------php防注入和XSS攻擊通用過濾-----End--------------------------------------------//
?>
	<noscript><b style="text-align:center; padding:1em 0; display:block; background:#e00; color:#fff;">您的瀏覽器不支援JavaScript功能，請開啟瀏覽器JavaScript狀態，或更換瀏覽器</b></noscript>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>

    <!-- Fold Modal CSS -->
    <link href="css/fold_modal.css" rel="stylesheet" type="text/css" />
