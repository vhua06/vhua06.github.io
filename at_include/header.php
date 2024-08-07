﻿<a href="#cont" class="abtn_topmain" tabindex="1">主要的內容區域</a>
<div id="header">
    <div class="headerTopBar"></div>
    <div class="headerTopCont">
        <div class="headerConts clear">
            <div class="bg_movieclip">
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="headerLogoPad">
                    <!-- <img src="images/EPA-Logo_1_300-2.png" style="width:50%;height:50%;float:left; padding:0px 0px;"
                        class="titleName optionalstuff" title="環境部 LOGO" alt="環境部 LOGO" /> -->
                <a href="index.html" tabindex="1" accesskey="H" title="首頁"><img src="images/title_name3.png" class="logo" title="空氣模式支援中心" alt="空氣模式支援中心" /></a>
            </div>
            <div class="headerMenu CGt">
                <ul role="header">
                        <li style="border-right: none;float: right;">
                            <a href="./ENG/index.html" title="English" tabindex="1" role="button"><span class="circle c_lang" role="button"><div class="f_lang">EN</div></span></a>&nbsp;                        
                            <a href="#" onclick="openURL('Facebook','https://www.moenv.gov.tw/page/5BE8739FFBB880CB'); return false;" tabindex="1" title="Facebook" role="button"><span class="circle c_fb" role="button"><div class="f_fb">f</div></span></a>&nbsp;
                            <a href="#" onclick="openURL('Line','https://line.me/R/ti/p/KjOox0U09B');return false;" tabindex="1" title="Line" role="button"><span class="circle c_line" role="button"><div class="f_line">LINE</div></span></a>&nbsp;
                            <!-- <a href="#search" class="search-form-tigger btn btn-success" data-toggle="search-form" tabindex="1" title="搜尋" role="button"><span class="circle c_search" role="button"><div class="f_search" style="font-size:20px;">&#x1F50E;&#xFE0E;</div></span></a> -->
                    </li><br />
                    <li style="border-right: none;float: right;"><a href="index.html" title="回首頁" tabindex="1" role="button"><i class="fa fa-home"></i>回首頁</a>&nbsp;|&nbsp;
                        <a href="#" title="意見信箱" tabindex="1" target="_blank" 
                                    onclick="openURL('意見信箱','https://epamail.moenv.gov.tw/Front/MailBoxHome');return false;" role="button"><i class="fa fa-envelope"></i>意見信箱</a>&nbsp;|&nbsp;
                        <a href="sitemap.html" tabindex="1" title="網站導覽" role="button"><i class="fa fa-sitemap"></i>網站導覽</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!--  2021-07-02 SEARCH BAR  -->
<div class="search-form-wrapper">
    <!-- <form class="search-form" role="search" method="GET" id="searchform1" action="./search_result.html">
        <div class="input-group">
            <label for="search_e" title="搜尋">搜尋：</label>
            <input tabindex="1" type="search" name="q" id="search_e" class="search form-control" placeholder="請輸入或選擇關鍵字" />
            <input type="hidden" name="cx" value="a78015efb707541ae"/>
		    <button type="submit" tabindex="1" id="search-bar" class="search-button search-button-v2" title="搜尋" name="search_btn" style="width:50px;height:32.5px;background:#4D90FE;color:white;"><i class='fa fa-search' aria-hidden="true"></i></button>
            <span tabindex="1" id="adv-search-bar" class="search-button search-button-v2" title="進階搜尋" name="advanced_search_btn" role="button"><i class='fa fa-search-plus' aria-hidden="true"></i></span>
        </div>
    </form> -->
    <form class="search-form" id="" action="" method="POST">
        <div class="input-group">
            <label for="search_e" title="搜尋" style="color: darkblue;">搜尋：</label>
            <input tabindex="1" type="search" name="search" id="search_e" class="search form-control" placeholder="請輸入或選擇關鍵字" />
            <span tabindex="1" id="search-bar" class="search-button search-button-v2" title="搜尋" name="search_btn" role="button"><i class='fa fa-search' aria-hidden="true"></i></span>
            <span tabindex="1" id="adv-search-bar" class="search-button search-button-v2" title="進階搜尋" name="advanced_search_btn" role="button"><i class='fa fa-search-plus' aria-hidden="true"></i></span>
        </div>
    </form>
</div>
<!-- Folding Modal Content  -->
<section id="modal-1" class="modal-container" role="modal-content">
    <div class="modal-dialog">    
        <svg class="modal-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon class="modal-polygon" />
        </svg>				
        <div id="timer"></div>
        <div class="modal-content">
            <div class="pageCont pg_about">
                <div><h2 style="color:#AA0000;text-align: center;margin-bottom:5px;font-size:2em;">！！！重要事項提醒！！！</h2></div>
                <div style="margin:15px;">
                    <!-- <h2><i class="fa fa-eercast"></i></i>&nbsp;本網站 <a href="#" onclick="openURL('使用調查問卷', 'https://forms.gle/3747eMvFgcgZWjgJ6');return false;" title="使用調查問卷"><strong style="color: white">「使用調查問卷」</strong>&nbsp;<span style='font-size: 65%;color:white;'>[另開新視窗]</span></a>，請撥冗填寫或至「最新消息」填寫。</h2> -->
                    <h2><i class="fa fa-eercast"></i>&nbsp;依據環境部空字第1111173069號函所示：</h2>
                    <h2>一、自112年1月1日起，公私場所固定污染源依據空氣污染防制法申請固定污染源設置許可證，需進行高斯類擴散模式模擬濃度增量者，應使用AERMOD模式。</h2>
                    <h2>二、原高斯類擴散公告模式ISCST3自112年1月1日起新申請案不適用，自112年5月1日起相關文件及檔案將移出網站公告模式區。</h2>
                </div>
                <br><br>
                <div style="text-align: center;">(任意點擊即可關閉視窗)</div>
            </div> 
        </div>				
    </div>
</section>  

<script type="text/javascript" src="js/TweenMax.1.20.3.min.js"></script>
<script type="text/javascript" src="js/fold_modal.js"></script>