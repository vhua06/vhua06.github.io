<?php
session_start();
$_SERVER['HTTP_HOST'];
$_SERVER['REQUEST_URI'];
$URL='http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

$webTitle='Support Center for Air Quality Models';
$MetaDescription='Support Center for Air Quality Models';
$MetaKeyword02='About AQM Support Center';
$MetaKeyword03='Gaussian Dispersion Model';
$MetaKeyword04='Trajectory Model (non-chemical reactions)';
$MetaKeyword05='Eulerian Grid Models';
$MetaKeyword07='Weather Research and Forecasting Model (WRF)';
$MetaAuthor='Ministry of Environment Executive Yuan';
$MetaCopyright='Ministry of Environment Executive Yuan,R.O.C.(Taiwan) Copyright © 2020 All Rights Reserved.';
$MetaKeyword='Support Center for Air Quality Models';
$Meta_ogImg_0 = "";
$FB_ID = "";
$u_news = "newslist.html";
$verData = "?20200518";
$MetaKeyword19='Air Pollution Control Act: pollution improvement strategies';
$MetaKeyword20='Real-time Air Quality Monitoring: Environmental Information Open Platform, Central Weather Bureau, Ministry of Environment, U.S. Environmental Protection Agency, US EPA Office of Air and Radiation, US EPA Office of Air Quality Planning and Standards, US EPA Technology Transfer Network, Support Center for Regulatory Atmospheric';

//------------------------------php防注入和XSS攻擊通用過濾-----Start--------------------------------------------//
function string_remove_xss($html) {
    preg_match_all("/\<([^\<]+)\>/is", $html, $ms); 
    $searchs[] = '<';
    $replaces[] = '&lt;';
    $searchs[] = '>';
    $replaces[] = '&gt;'; 
    if ($ms[1]) {
        $allowtags = 'img|a|font|div|table|tbody|caption|tr|td|th|br|p|b|strong|i|u|em|span|ol|ul|li|blockquote';
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
            $string = str_replace(array('&', '"', '<', '>', '#', '(', ')', '\''), array('&amp;', '&quot;', '&lt;', '&gt;', '&#35;', '&#40;', '&#41;', '&#39;'), $string);
            if (strpos($string, '&amp;#') !== false) {
                $string = preg_replace('/&amp;((#(\d{3,5}|x[a-fA-F0-9]{4}));)/', '&\\1', $string);
            }
        } else {
            if (PHP_VERSION < '5.4.0') {
                $string = htmlspecialchars($string, $flags);
            } else {
                if (!defined('CHARSET') || (strtolower(CHARSET) == 'utf-8')) {
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
//  PHP 5.4.0版本沒有內置的str_ends_with()函數，因為這個函數是在PHP 8.0版本中引入的。
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
# $queryString = string_remove_xss($_SERVER['QUERY_STRING']);
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
switch ($method) {
  case 'PUT':
  case 'POST':
  case 'GET':    
	# if (strpos($queryString , "%F6") OR strpos($queryString , "%3C") OR strpos($queryString , "<") OR strpos($queryString , "%3E") OR strpos($queryString , ">") OR strpos($queryString , "script") OR strpos($queryString , "prompt") OR strpos($queryString , "alert")) {
    if (strpos($queryString , "(") OR strpos($queryString , ")") OR strpos($queryString , ">") OR strpos($queryString , "%3C") OR strpos($queryString , "<") OR strpos($queryString , "%3E") OR strpos(strtolower($queryString) , "javascript") OR strpos(strtolower($queryString) , "script") OR preg_match($blacklist, $queryString)) {
		echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">';
		echo '<span id="errorText">An error occurred on the website. <br />Please consult with your administrator.</span></h1>';
        echo '<script>setTimeout(function(){ document.location.href="https://aqmc.moenv.gov.tw/ENG/index.html"; }, 1800);</script>';
        exit();
	}   
	#if (strpos($queryURL , "%F6") OR strpos($queryURL , "%3C") OR strpos($queryURL , "<") OR strpos($queryURL , "%3E") OR strpos($queryURL , ">") OR strpos($queryURL , "script") OR strpos($queryURL , "prompt") OR strpos($queryURL , "alert")) {
    if (strpos($queryURL , "(") OR strpos($queryURL , ")") OR strpos($queryURL , ">") OR strpos($queryURL , "%3C") OR strpos($queryURL , "<") OR strpos($queryURL , "%3E")  OR strpos(strtolower($queryURL) , "javascript") OR strpos(strtolower($queryURL)  , "script") OR strpos($queryURL , $char) OR strpos($queryURL , $char2) OR strpos($queryURL , $char3) OR strpos($queryURL, $endWith) OR preg_match($blacklist, $queryURL)) {
		echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">';
		echo '<span id="errorText">An error occurred on the website. <br />Please consult with your administrator.</span></h1>';
        echo '<script>setTimeout(function(){ document.location.href="https://aqmc.moenv.gov.tw/ENG/index.html"; }, 1800);</script>';
        exit();
	}
    break;
  default:
    break;
}
//------------------php防注入和XSS攻擊通用過濾-----End--------------------------------------------//
?>
	<noscript><b style="text-align:center; padding:1em 0; display:block; background:#e00; color:#fff;">Your browser does not support JavaScript. If the webpage function cannot be used normally, please enable the JavaScript status of your browser.</b></noscript>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>

    <!-- Fold Modal CSS -->
    <link href="../css/fold_modal.css" rel="stylesheet" type="text/css" />    
